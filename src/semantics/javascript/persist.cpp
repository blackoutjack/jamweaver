
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <alloca.h>
#include <math.h>
#include <time.h>

#include <algorithm>
#include <map>
#include <set>
#include <string>
#include <vector>
#include <fstream>
#include <unistd.h>
#include <sys/wait.h>

#define USE_SPIDERMONKEY
//#define USE_V8

#define USE_LIBRARY
//#define USE_PROCESS

#ifdef USE_V8

#include "v8.h"
//#include "v8-debug.h"

#else  // Use SpiderMonkey

//#define XP_UNIX
#include "jsapi.h"

#endif

#ifdef CONST
#undef CONST
#endif

#include "boost/functional/hash.hpp"
#include "boost/algorithm/string.hpp"

#include "yices_c.h"

#include "cinterf.h"
#include "context.h"

//#define DEBUG

using namespace std;

#define STDIN_FILENO 0
#define STDOUT_FILENO 1
#define STDERR_FILENO 2

// Macros for verifying types of input parameters.

#define REQ_LIST(n) do {\
  prolog_term t = reg_term(CTXTc n);\
  if (!is_list(t) && !is_nil(t))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_INT(n) do {\
  if (!is_int(reg_term(CTXTc n)))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_INT_OR_VAR(n) do {\
  prolog_term t = reg_term(CTXTc n);\
  if (!is_int(t) && !is_var(t))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_STRING(n) do {\
  if (!is_string(reg_term(CTXTc n)))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_VAR(n) do {\
  if (!is_var(reg_term(CTXTc n)))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_STRING_OR_VAR(n) do {\
  prolog_term t = reg_term(CTXTc n);\
  if (!is_string(t) && !is_var(t))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_LIST_OR_VAR(n) do {\
  prolog_term t = reg_term(CTXTc n);\
  if (!is_list(t) && !is_nil(t) && !is_var(t))\
  {\
    return FALSE;\
  }\
} while (0)

#define REQ_STRING_OR_LIST_OR_VAR(n) do {\
  prolog_term t = reg_term(CTXTc n);\
  if (!is_string(t) && !is_list(t) && !is_nil(t) && !is_var(t))\
  {\
    return FALSE;\
  }\
} while (0)

// Some constant path names

string jamdir(getenv("JAMPKG"));
string jamlib("lib");
string jamlibpath(jamdir + "/" + jamlib);
string nativedatfile("native.dat");
string nativedatpath(jamlibpath + "/" + nativedatfile);

string yices_base("native.yic");
string yices_base_path(jamlibpath + "/" + yices_base);
yices_context yices_ctxt;
bool yices_initted = false;

#if defined(USE_PROCESS)
#if defined(USE_V8)
// Location of the D8 interpreter
string d8(jamdir + "/v8/out/native/d8");
#endif
string spidermonkey(jamdir + "/jamscript/mozilla-esr-dev/obj-release/browser/dist/bin/js");
#endif

#ifdef USE_V8

#ifndef USE_PROCESS
// Context to use across multiple calls to eval.
v8::Persistent<v8::Context> v8context
#endif

#endif

// Persistent (across a single query) state

// Expressions collected in constraints are asserted with every
// query to Yices.
set<string> constraints;
// This is a collection of all symbolic values.
set<string> symbols;
// This contains all boolean-valued (in Yices) symbols.
set<string> bools;
// This contains all int-valued (in Yices) symbols.
set<string> ints;
// Contains all the literal integers used in functions and constraints
set<string> intliterals;
// A mapping of a symbolic value to the literal string it represents
map<string,string> strings;
// Inversion of the above
map<string,string> reverse_strings;
// A collection of memory locations, native and non-native
set<string> locations;
// Native function locations
set<string> natives;
// User function locations
set<string> user_functions;
// A mapping of an (atomic) symbolic value to the (compound) symbolic
// expression it represents
map<string,string> aliases;
// A mapping of a symbolic value to the (JavaScript) type that it has
map<string,string> typemap;
// A list of the different JS types
set<string> types;
// A list of properties used in the policy
map<int,set<string> > policy_props;
// A list of strings used in the policy
map<int,set<string> > policy_strs;
// Map an identifier and local scope to a lookup scope.
//map<string, map<string,string> > scope_map;
map<string,string> scope_map;

// The index of the policy path being examined.
int policy_idx = -1;

typedef enum heapkind {
  ALLOC = 1,
  PROPSET,
  DELETE,
} heapkind; 

// Structure to hold discrete string arguments
typedef struct box {
  heapkind kind;
  string pre;
  string loc;
  string prop;
  string value;
  string obj;
  string post;
} box;

// %%% Legacy.
typedef struct boxold {
  vector<string> v;
  bool valid;
} box_t;

// Memory updates (alloc, property set, and property deletion).
vector<box> mem;

map<string,int> allocpre_index;
map<string,int> allocobj_index;
map<string,int> allocpost_index;
map<string,int> heappre_index;
map<string,int> heapobj_index;
map<string,int> heappost_index;
map<string,int> delpre_index;
map<string,int> delobj_index;
map<string,int> delpost_index;
map<string,vector<int> > loc_index;

// This stores initial symbolic location to object mappings.
vector<box_t> initmap_mem;

typedef set< vector<string> > delheapprop_t;
typedef delheapprop_t::iterator delheapprop_iter_t;
// Collection of memory deletions
delheapprop_t delheapprop_mem;
// Collection of references that have been generated.
set<string> newref_mem;

set<string> hasidx_mem;

// Collection of constructed objects
set<string> newobj_mem;
// Collections to store objects created during conversions
// from primitive values to their corresponding object values
set<string> newnumber_mem;
set<string> newstring_mem;
set<string> newbool_mem;
set<string> newerror_mem;
// Collection of activation records
set<string> newact_mem;
// Collection of argument
set<string> newarg_mem;
// Collection of object properties to iterate.
set<string> iterate_mem;

vector< pair<string,string> > assigns;
int assignidx = 0;
vector< pair<string,string> > reads;
int readidx = 0;
vector< pair<string,string> > args;
int argidx = 0;
vector<string> calls;
int callidx = 0;


// Flags

// If false, hasprop can generate a new symbolic value rather
// than fail.
bool symb_lookup = false;
// Whether an expression represents a return from a call.
bool return_flag = false;
// Whether we're symbolically executing a statement in
// isolation, or otherwise an entire program.
bool symbolic_mode = false;
// A flag for concrete execution that says we've entered the
// asynchronous callback loop.
bool callback_mode = false;
// Whether native references (like document.getElementById) should
// be assumed to point to the actual native object
bool native_mode = false;
// Once statement evaluation begins, we want to clear metadata that was
// accumulated during the assertion phase when new metadata comes in.
bool clear_next_call = false;
bool clear_next_assign = false;
bool clear_next_read = false;

// Counter to ensure unique names.
map<string,int> vargen;

// String manipulation convenience functions

int hashcode(string s) {
  boost::hash<string> string_hash;
  return string_hash(s);
}

vector<string> &split(const string &s, char delim, vector<string> &elems) {
  stringstream ss(s);
  string item;
  while(getline(ss, item, delim)) {
    elems.push_back(item);
  }
  return elems;
}

vector<string> split(const string &s, char delim) {
  vector<string> elems;
  return split(s, delim, elems);
}

string findreplace(string source, string searchString, string replaceString) {

  string str(source.c_str());

  string::size_type pos = 0;
  while ((pos = str.find(searchString, pos)) != string::npos) {
    string::iterator begit = str.begin() + pos;
    string::iterator endit = str.begin() + pos + searchString.size();
    str.erase(begit, endit);
    str.insert(pos, replaceString);    
    pos+=replaceString.size();
  }

  return str;
}

string fix_special_literals(char *in) {
  if (in == "#Infinity") {
    return "Infinity";
  } else if (in == "#-Infinity") {
    return "-Infinity";
  } else if (in == "#NaN") {
    return "NaN";
  } else if (in == "#undefined") {
    return "undefined";
  } else if (in == "#null") {
    return "null";
  }
  return in;
}

string revert_special_literals(string in) {
  if (in == "Infinity") {
    return "#Infinity";
  } else if (in == "-Infinity") {
    return "#-Infinity";
  } else if (in == "NaN") {
    return "#NaN";
  } else if (in == "undefined") {
    return "#undefined";
  } else if (in == "null") {
    return "#null";
  }
  return in;
}

#if defined(USE_V8)

#if defined(USE_PROCESS)

// Interface with V8 interpreter to facilitate evalunary and evalbin.
// Spawn V8 (actually D8) as a separate process.
string eval(string source) {
  int readpipe[2] = {-1,-1}; /* child -> parent */

  if (pipe(readpipe) < 0) {
    fprintf(stderr, "Unable to open pipe for eval");
    return "";
  }

  pid_t pid = fork();
  if (pid == 0) {
    // In the new process

    // Redirect the pipe to stdin/out
    close(readpipe[0]);
    dup2(readpipe[1], STDOUT_FILENO);
    close(readpipe[1]);

    source = "print(" + source + ")";

    // Spawn d8 interpreter
    execl(d8.c_str(), d8.c_str(), "-e", source.c_str(), (char*)NULL);

  } else if (pid < 0) { 
    // Error
    fprintf(stderr, "Error spawning d8 process\n");
    return "";
  } else {
    // Still in the parent
    close(readpipe[1]);

    // Read the response
    int buflen = 32;
    char response[buflen];
    string recd;
    bzero(response, buflen);
    while (read(readpipe[0], response, buflen - 1) > 0) {
      recd += string(response);
      bzero(response, buflen);
    }

    close(readpipe[0]);
    waitpid(pid, NULL, 0);
    
    // Trim trailing newline.
    int last = recd.size() - 1;
    if (recd[last] == '\n')
      recd = recd.substr(0, last);

    return revert_special_literals(recd);
  }
}

#else  // Use the V8 library

string eval(string source) {
  v8::HandleScope handle_scope;
  if (v8context.IsEmpty()) {
    v8context = v8::Context::New(NULL, v8::ObjectTemplate::New());
  }
  v8context->Enter();

  const char *csrc = source.c_str();
  v8::Local<v8::String> src = v8::String::New(csrc);
  v8::Local<v8::String> name = v8::String::New("(jam)");

  v8::TryCatch try_catch;
  v8::Handle<v8::Script> script = v8::Script::Compile(src, name);

  // Return value
  string ret;

  if (script.IsEmpty()) {
    // Print errors that happened during compilation.
    fprintf(stderr, "Error during eval.\n");
    ret = "";
  } else {
    v8::Handle<v8::Value> result = script->Run();
    if (result.IsEmpty()) {
      // Print errors that happened during execution.
      fprintf(stderr, "Error result from eval.\n");
      ret = "";
    } else {
      // If all went well then print the returned value.
      v8::String::Utf8Value str(result);
      size_t len = str.length() * sizeof(**str);
      char *val = (char*)malloc(len + 1);
      strncpy(val, *str, len);
      val[len] = '\0';

      ret = val;
      free(val);

      // Enclose strings in quotes.
      if (result->IsString()) {
        ret = "\"" + ret + "\"";
      }
    }
  }

  v8context->Exit();

  return revert_special_literals(ret);
}
#endif

#else  // Use SpiderMonkey

// Interface with SpiderMonkey interpreter to facilitate evalunary and
// evalbin.

#ifdef USE_PROCESS

// Spawn SpiderMonkey as a separate process.
string eval(string source) {
  int readpipe[2] = {-1,-1}; /* child -> parent */

  if (pipe(readpipe) < 0) {
    fprintf(stderr, "Unable to open pipe for eval");
    return "";
  }

  pid_t pid = fork();
  if (pid == 0) {
    // In the new process

    // Redirect the pipe to stdin/out
    close(readpipe[0]);
    dup2(readpipe[1], STDOUT_FILENO);
    close(readpipe[1]);

    source = "print(" + source + ")";

    // Spawn SpiderMonkey interpreter
    execl(spidermonkey.c_str(), spidermonkey.c_str(), "-e", source.c_str(), (char*)NULL);

  } else if (pid < 0) { 
    // Error
    fprintf(stderr, "Error spawning SpiderMonkey process\n");
    return "";
  } else {
    // Still in the parent
    close(readpipe[1]);

    // Read the response
    int buflen = 32;
    char response[buflen];
    string recd;
    bzero(response, buflen);
    while (read(readpipe[0], response, buflen - 1) > 0) {
      recd += string(response);
      bzero(response, buflen);
    }

    close(readpipe[0]);
    waitpid(pid, NULL, 0);
    
    // Trim trailing newline.
    int last = recd.size() - 1;
    if (recd[last] == '\n')
      recd = recd.substr(0, last);

    return revert_special_literals(recd);
  }
}

#else  // Use the SpiderMonkey library
/* The error reporter callback. */
void reportError(JSContext *cx, const char *message, JSErrorReport *report)
{
    fprintf(stderr, "%s:%u:%s\n",
            report->filename ? report->filename : "<no filename>",
            (unsigned int) report->lineno,
            message);
}

static JSClass global_class = {
  "global",
  JSCLASS_GLOBAL_FLAGS,
  JS_PropertyStub,
  JS_PropertyStub,
  JS_PropertyStub,
  JS_StrictPropertyStub,
  JS_EnumerateStub,
  JS_ResolveStub,
  JS_ConvertStub,
  JS_FinalizeStub,
  JSCLASS_NO_OPTIONAL_MEMBERS
};

JSRuntime *grt = NULL;
JSContext *gcx = NULL;
JSObject *gglob = NULL;

bool init_environment(JSRuntime **rt, JSContext **cx, JSObject **glob) {


  if (grt != NULL && gcx != NULL && gglob != NULL) {
    *rt = grt;
    *cx = gcx;
    *glob = gglob;

    return true;
  }

  /* Create a JS runtime. */
  *rt = JS_NewRuntime(8L * 1024L * 1024L);
  if (*rt == NULL) {
    /* Cleanup. */
    //JS_DestroyContext(*cx);
    //JS_DestroyRuntime(*rt);
    JS_ShutDown();
    fprintf(stderr, "Unable to create SpiderMonkey runtime\n");
    
    return false;
  }

  /* Create a context. */
  *cx = JS_NewContext(*rt, 8192);
  if (*cx == NULL) {
    /* Cleanup. */
    //JS_DestroyContext(*cx);
    JS_DestroyRuntime(*rt);
    JS_ShutDown();
    fprintf(stderr, "Unable to create SpiderMonkey context\n");
    
    return false;
  }
  JS_SetOptions(*cx, JSOPTION_VAROBJFIX);
  JS_SetVersion(*cx, JSVERSION_LATEST);
  JS_SetErrorReporter(*cx, reportError);

  /* Create the global object. */
  *glob = JS_NewCompartmentAndGlobalObject(*cx, &global_class, NULL);
  if (!(*glob)) {
    /* Cleanup. */
    JS_DestroyContext(*cx);
    JS_DestroyRuntime(*rt);
    JS_ShutDown();
    fprintf(stderr, "Unable to create SpiderMonkey global\n");
    
    return false;
  }
  
  JSAutoEnterCompartment ac;
  if (!ac.enter(*cx, *glob)) {
    /* Cleanup. */
    JS_DestroyContext(*cx);
    JS_DestroyRuntime(*rt);
    JS_ShutDown();
    fprintf(stderr, "Unable to enter SpiderMonkey compartment\n");
    
    return false;
  }
  
  /* Populate the global object with the standard globals,
     like Object and Array. */
  if (!JS_InitStandardClasses(*cx, *glob)) {
    /* Cleanup. */
    JS_DestroyContext(*cx);
    JS_DestroyRuntime(*rt);
    JS_ShutDown();
    fprintf(stderr, "Unable to initialize SpiderMonkey classes\n");
    
    return false;
  }

  grt = *rt;
  gcx = *cx;
  gglob = *glob;

  return true;
}

string eval(string source) {

  JSRuntime *rt;
  JSContext *cx;
  JSObject *glob;
  if (!init_environment(&rt, &cx, &glob)) {
    return "ERROR 1";
  }

  const char *src = source.c_str();
  jsval rval;
  JSBool ok = JS_EvaluateScript(cx, glob, src, strlen(src), "null", 1, &rval);
  
  if (ok) {
    JSString *d;
    JSType type = JS_TypeOfValue(cx, rval);
    d = JS_ValueToString(cx, rval);

    string ret(JS_EncodeString(cx, d));

    if (type == JSTYPE_STRING) {
      ret = "\"" + ret + "\"";
    }
    
    return revert_special_literals(ret);
  } else {
    fprintf(stderr, "Error while evaluating script with SpiderMonkey: %s\n", src);
    return "ERROR 2";
  }

  fprintf(stderr, "Error parsing results from SpiderMonkey.\n");
  return "ERROR 3";
}

#endif

#endif

// Generate a new value with the given base.
string newval(const string &base) {
  int num = vargen[base]++;
  ostringstream ss;
  ss << base << num;
  return ss.str();
}

void deserializeList(string s, prolog_term l) {
  assert(is_var(l));

  if (s == "&EOL") {
    c2p_nil(CTXTc l);
    return;
  }

  c2p_list(CTXTc l);
  size_t pos = s.find("~!@#ITEM");
  // The &EOL case should be caught above.
  assert(pos != string::npos);

  string carstr = s.substr(0, pos);
  string cdrstr = s.substr(pos + 8);

  prolog_term car = p2p_car(l);
  char buf[carstr.length() + 1];
  strcpy(buf, carstr.c_str());
  c2p_string(CTXTc buf, car);

  deserializeList(cdrstr, p2p_cdr(l));
  /*
  for (vector<string>::iterator it=toks.begin(); it!=toks.end(); it++)
    

  prolog_term ret = reg_term(CTXTc 2);
  p2p_unify(CTXTc car, ret);
*/
}

string serializeList(prolog_term l) {
  // Only lists should be passed to this function.
  assert(is_list(l) || is_nil(l));

  // Check base case.
  if (is_nil(l)) {
    return string("&EOL");
  }

  // Get the car and convert to a string.
  prolog_term car = p2p_car(l);
  assert(is_string(car));
  char *carcstr = p2c_string(CTXTc car);
  string carstr(carcstr);

  // This could happen but we're hoping it doesn't for now.
  assert(carstr.find("~!@#ITEM") == string::npos);

  // Process the tail recursively.
  prolog_term cdr = p2p_cdr(l);
  assert(is_list(cdr) || is_nil(cdr));

  // %%% Unsafe delimiter.
  return carstr + "~!@#ITEM" + serializeList(cdr);
}


// Exported predicates

extern "C" int enter_clear_mode(CTXTdecl) {
  clear_next_call = true;
  clear_next_assign = true;
  clear_next_read = true;
  return TRUE;
}

extern "C" int leave_clear_mode(CTXTdecl) {
  clear_next_call = false;
  clear_next_assign = false;
  clear_next_read = false;
  return TRUE;
}

extern "C" int enter_native_mode(CTXTdecl) {
  native_mode = true;
  return TRUE;
}

extern "C" int leave_native_mode(CTXTdecl) {
  native_mode = false;
  return TRUE;
}

extern "C" int is_native_mode(CTXTdecl) {
  if (native_mode) return TRUE;
  return FALSE;
}

extern "C" int enter_symbolic_mode(CTXTdecl) {
  symbolic_mode = true;
  return TRUE;
}

extern "C" int enter_concrete_mode(CTXTdecl) {
  symbolic_mode = false;
  return TRUE;
}

extern "C" int is_symbolic_mode(CTXTdecl) {
  if (symbolic_mode) return TRUE;
  return FALSE;
}

extern "C" int is_concrete_mode(CTXTdecl) {
  if (symbolic_mode) return FALSE;
  return TRUE;
}

extern "C" int enter_callback_mode(CTXTdecl) {
  callback_mode = true;
  return TRUE;
}

extern "C" int is_callback_mode(CTXTdecl) {
  if (callback_mode) return TRUE;
  return FALSE;
}

// Evaluate a concrete binary operation.
extern "C" int evalbin(CTXTdecl) {
  string given1(extern_ptoc_string(1));
  string given2(fix_special_literals(extern_ptoc_string(2)));
  string given3(fix_special_literals(extern_ptoc_string(3)));

  string source;
  // %%% Need to escape these somehow?
  if (given1 == "RegexTest") {
    source = given2 + ".test(" + given3 + ")";
  } else if (given1 == "StringContains") {
    source = given2 + ".indexOf(" + given3 + ") > -1";
  } else if (given1 == "StringStartsWith") {
    source = given2 + ".startsWith(" + given3 + ")";
  } else {
    source = given2 + given1 + given3;
  }
  //fprintf(stderr, "source: %s\n", source.c_str());
  string result = eval(source);
  //fprintf(stderr, "result: %s\n", result.c_str());

  extern_ctop_string(4, result.c_str());
  return TRUE;
}

// Evaluate arbitrary JavaScript in a bare environment.
extern "C" int evaljs(CTXTdecl) {
  string source(extern_ptoc_string(1));

  string result = eval(source);

  extern_ctop_string(2, result.c_str());
  return TRUE;
}

// Evaluate a concrete unary operation.
extern "C" int evalunary(CTXTdecl) {
  // Read the first argument to the predicate,
  // create a JS string
  string given1(extern_ptoc_string(1));
  string given2(fix_special_literals(extern_ptoc_string(2)));

  string source = given1 + given2;
  string result = eval(source);
  extern_ctop_string(3, result.c_str());
  return TRUE;
}

// Enclose a value in quotes, or the inverse.
extern "C" int makestr(CTXTdecl) {
  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  
  string val1;
  bool has1 = false;
  string val2;
  bool has2 = false;
  if (!is_var(reg_term(CTXTc 1))) {
    has1 = true;
    val1 = string(extern_ptoc_string(1));
  }
  if (!is_var(reg_term(CTXTc 2))) {
    has2 = true;
    val2 = string(extern_ptoc_string(2));
  }

  if (has1 && !has2) {
    // Enclose the value in quotes.
    string given(extern_ptoc_string(1));
    string escaped = "\"" + findreplace(given, "\\", "\\\\") + "\"";
    extern_ctop_string(2, escaped.c_str());
    return TRUE;
  } else if (!has1 && has2) {
    // Strip the quotes off the string.
    string given(extern_ptoc_string(2));
    int last = given.size() - 1;
    if (given[0] != '"' || given[last] != '"') {
      // A non-string value was provided.
      return FALSE;
    }
    string unescaped = findreplace(given.substr(1, last - 1), "\\\\", "\\");
    extern_ctop_string(1, unescaped.c_str());
    return TRUE;
  } else if (has1 && has2) {
    // %%% Verify the correspondence.
    return FALSE;
  } else {
    // Two variable values doesn't make sense.
    return FALSE;
  }
}

// Determine whether an expression is a branch predicate.
extern "C" int is_branch(CTXTdecl) {

  REQ_STRING(1);

  char *given = extern_ptoc_string(1);
  
  if (given[0] == '[' && given[1] == '#') {
    if (given[2] == 't') {
      extern_ctop_string(2,"true");
      return TRUE;
    }
    if (given[2] == 'f') {
      extern_ctop_string(2,"false");
      return TRUE;
    }
  }

  return FALSE;
}

extern "C" int is_callback_entry(CTXTdecl) {
  REQ_STRING(1);

  char *given = extern_ptoc_string(1);

  if (!strncmp(given, "[#c", 3)) {
    return TRUE;
  }
  return FALSE;
}

// Determine whether an expression is a function entry and strip
// the brackets if so.
extern "C" int is_fnentry(CTXTdecl) {

  REQ_STRING(1);

  char *given = extern_ptoc_string(1);

  if (!strncmp(given, "{#", 2)) {
    
    int buflen = strlen(given);
    char *buf = (char *)malloc(buflen);
    // Zeroing required since strncpy doesn't null-terminate.
    bzero(buf, buflen);
    strncpy(buf, given + 1, buflen - 2);

    extern_ctop_string(2, buf);
    free(buf);

    return TRUE;
  }

  return FALSE;
}

// Determine whether a value is a memory location.
extern "C" int isaddr(CTXTdecl) {
 
  REQ_STRING(1);

  char *given = extern_ptoc_string(1);

  if (given[0] == '#') {
    return TRUE;
  }
  
  return FALSE;
}

// Like |isaddr|, but exclude special primitives.
extern "C" int isobj(CTXTdecl) {
 
  REQ_STRING(1);

  string given(extern_ptoc_string(1));

  if (given == "#Infinity") {
    return FALSE;
  } else if (given == "#-Infinity") {
    return FALSE;
  } else if (given == "#NaN") {
    return FALSE;
  } else if (given == "#undefined") {
    return FALSE;
  } else if (given == "#null") {
    return FALSE;
  }
  if (given[0] == '#') {
    return TRUE;
  }
  
  return FALSE;
}

// Avoid unused variable warnings.
extern "C" int always(CTXTdecl) {
  return TRUE;
}

// Example of processing Prolog lists.
extern "C" int list_test(CTXTdecl) {
  REQ_LIST(1);
  REQ_VAR(2);

  prolog_term list = reg_term(CTXTc 1);
  prolog_term car = p2p_car(list);
  prolog_term ret = reg_term(CTXTc 2);
  p2p_unify(CTXTc car, ret);
  
  return TRUE;
}

// Convert between first argument int and
// second argument string.
extern "C" int inttostr(CTXTdecl) {

  if (is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)))
  {
    char *given2 = extern_ptoc_string(2);
    extern_ctop_int(1, atoi(given2));
    return TRUE;
  }
  else if (!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)))
  {
    int given1 = extern_ptoc_int(1);

    char buf[32];
    bzero(buf,32);
    sprintf(buf, "%d", given1);

    extern_ctop_string(2,buf);

    return TRUE;
  }
  else if (!is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)))
  {
    char *given2 = extern_ptoc_string(2);
    return atoi(given2) == extern_ptoc_int(1) ? TRUE : FALSE;
  }
  else
  {
    // Both arguments can't be variables.
    return FALSE;
  }
}

// Returns true if the unary argument is a quoted number.
extern "C" int numprop(CTXTdecl) {

  REQ_STRING(1);

  char *given = extern_ptoc_string(1);

  // remove outer quotations on given
  char o = given[strlen(given)-1];
  given[strlen(given)-1] = 0;
  char *unquoted = (char *)malloc(strlen(given));
  strcpy(unquoted, given+1);
  int num = atoi(unquoted);
  given[strlen(given)] = o;

  if(strcmp(unquoted,"0") && num <= 0) {
    free(unquoted);
    return FALSE;
  } else {
    free(unquoted);
    return TRUE;
  }
}

extern "C" int newref(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);

  if(!is_var(reg_term(CTXTc 3)) && is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2))) {

    char *given3 = extern_ptoc_string(3);

    for(set<string>::iterator it = newref_mem.begin(); it != newref_mem.end(); it++) {
      vector<string> toks = split(*it,',');
      if(toks[toks.size()-1] == given3) {
        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;

  } else if(!is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2))) {

    char *given1 = extern_ptoc_string(1);
    char *given2 = extern_ptoc_string(2);
    char *given3 = extern_ptoc_string(3);
    
    char *concat = (char *)malloc(strlen(given1) + strlen(given2) + strlen(given3) + 3);
    sprintf(concat, "%s,%s,%s", given1, given2, given3);

    if(newref_mem.find(string(concat)) != newref_mem.end()) {
      free(concat);
      return TRUE;
    } else {
      free(concat);
      return FALSE;
    }
  } else if(is_var(reg_term(CTXTc 3)) && is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2))) {
    return FALSE;
  } else {

    char *given1 = extern_ptoc_string(1);
    char *given2 = extern_ptoc_string(2);

    string bufstr = newval("ref");
    const char *buf = bufstr.c_str();
    
    extern_ctop_string(3, buf);

    char *concat = (char *)malloc(strlen(given1) + strlen(given2) + strlen(buf) + 3);
    sprintf(concat, "%s,%s,%s", given1, given2, buf);

    newref_mem.insert(string(concat));
    free(concat);
  }

  return TRUE;
}

box_t mem_search(vector<box_t> mem, vector<string> vals) {
  for (vector<box_t>::iterator it=mem.begin(); it!=mem.end(); it++) {

    bool matched = true;
    // Check each component against the corresponding value.
    for(int i=0; i<vals.size(); i++) {
      // If this argument is a variable, we do not try to match it
      if(!vals[i].compare("~!@#VAR")) continue;

      if (vals[i].compare(it->v[i])) {
        matched = false;
        break;
      }
    }

    if (matched) return *it;    
  }

  // Return a value indicating that no match was found.
  box_t ret;
  ret.valid = false;

  return ret;
}

// Associate an existing symbol with a type.
void map_symbol_type(string sym, string typ) {

  // Map the symbol to its type.
  typemap[sym] = typ;

  // Create the type assertion for this value.
  string tfn = "(= (HasType " + sym + ") " + typ + ")";
  string alias = newval("sa");

  aliases[alias] = tfn;
  symbols.insert(alias);
  bools.insert(alias);
  constraints.insert(alias);
}

// Convert symbolic functions from an alias to their 
// expanded form.
string load_fn(string arg) {
  string ret;

  char *endptr;
  long int num = strtol(arg.c_str(), &endptr, 0);
  if (arg != "" && *endptr == '\0') {
    // If the argument is an integer literal, just return it.
    intliterals.insert(arg);
    ret = arg;
  } else if (aliases.find(arg) != aliases.end()) {
    // Get the stored expansion of this symbol.
    return aliases[arg];
  } else if (arg[0] == '#') {
    // This short-circuit should hopefully be a little faster.
    if (arg[1] == '#' && arg[2] == '#' && locations.find(arg) == locations.end()) {
      locations.insert(arg);
    }
    return arg;
  } else {
    if (symbols.find(arg) == symbols.end() && natives.find(arg) == natives.end()) {
      // This is a string literal. Get a symbolic constant
      // to represent it.
#ifdef DEBUG
      fprintf(stderr, "SYMBOL: %s\n", arg);
#endif
      string nvar;
      if (reverse_strings.find(arg) == reverse_strings.end()) {
        nvar = newval("c");
        strings[nvar] = arg;
        reverse_strings[arg] = nvar;
        //fprintf(stderr, "%s: %s\n", nvar.c_str(), arg.c_str());
      } else {
        nvar = reverse_strings[arg];    
      }
      ret = nvar;
    } else {
      // If this is a symbolic value, just return it.
      ret = arg;
    }
  }

  return ret;
}

bool init_yices() {
  // Initial load of the Yices base code.
  ifstream yin(yices_base_path.c_str());

  // Test existence, access.
  if (yin.fail()) {
    fprintf(stderr, "Unable to read Yices base file: %s\n", yices_base_path.c_str());
    yices_initted = false;
    return false;
  }

  string base_code;
  string in;
  while (!yin.eof()) {
    getline(yin, in);
    base_code += in + string("\n");
  }
  yin.close();

  // Load the program-specific (but immutable) clauses for the user
  // functions.
  if (user_functions.size() > 0) {
    for (set<string>::iterator i=user_functions.begin(); i!=user_functions.end(); i++) {
      base_code += "(define " + *i + "::int)\n";
    }
    base_code += "(assert (and\n";
    for (set<string>::iterator i=user_functions.begin(); i!=user_functions.end(); i++) {
      char hash[32];
      sprintf(hash, "%d", hashcode(*i));
      base_code += "(= (uniq " + *i + ") " + hash + ")\n";
    }
    base_code += "))\n";
  }

  FILE* outfl = fopen("/tmp/satbase", "a");
  fprintf(outfl, "#####\n%s\n", base_code.c_str());
  fclose(outfl);

  yices_ctxt = yices_mk_context();
  int ok = yices_parse_command(yices_ctxt, base_code.c_str());

  if (!ok) {
    fprintf(stderr, "Error parsing base input to Yices: %s\n", yices_get_last_error_message());
    yices_initted = false;
    return false;
  }

  yices_initted = true;
  return true;
}

string build_yices() {

  string yicesin;

  // Assemble Yices input
  for (set<string>::iterator i=ints.begin(); i!=ints.end(); i++) {
    // These are already loaded into the boilerplate Yices query.
    if (natives.find(*i) != natives.end()) continue;
    yicesin += "(define " + *i + "::int)\n";
  }
  for (set<string>::iterator i=bools.begin(); i!=bools.end(); i++) {
    // These are already loaded into the boilerplate Yices query.
    if (natives.find(*i) != natives.end()) continue;
    yicesin += "(define " + *i + "::bool)\n";
  }
  for (map<string,string>::iterator i = strings.begin(); i != strings.end(); i++) {
    yicesin += "(define " + i->first + "::int)\n";
  }
  for (set<string>::iterator i=locations.begin(); i!=locations.end(); i++) {
    yicesin += "(define " + *i + "::int)\n";
  }

  if (intliterals.size() + strings.size() > 0) {
    yicesin += "(assert (and\n";
    for (set<string>::iterator i=intliterals.begin(); i!=intliterals.end(); i++) {
      char hash[32];
      sprintf(hash, "%d", hashcode(*i));
      yicesin += "(= (uniq " + *i + ") " + hash + ")\n";
    }
    for (map<string,string>::iterator i=strings.begin(); i!=strings.end(); i++) {
      // The hash is of the literal string.
      char hash[32];
      sprintf(hash, "%d", hashcode(i->second));
      yicesin += "(= (uniq " + i->first + ") " + hash + ")\n";
    }
    // Dynamically generated locations are not necessarily unique from
    // other locations, so don't assert uniq for those.
    /*
    for (set<string>::iterator i=locations.begin(); i!=locations.end(); i++) {
      char hash[32];
      sprintf(hash, "%d", hashcode(*i));
      yicesin += "(= (uniq " + *i + ") " + hash + ")\n";
    }
    */

    yicesin += "))\n";
  }

  // Load dynamic policy-supporting facts.
  // %%% This should be based on actuality.
  set<string> props = policy_props[policy_idx];
  for (set<string>::iterator i=props.begin(); i!=props.end(); i++) {
    string prop = *i;
    if (reverse_strings.find(prop) != reverse_strings.end()) {
      yicesin += "(assert (not (IsNumProp " + reverse_strings[prop] + ")))\n";
    }
  }

  // %%% Generate some assertions for policy_strs also.

  for (set<string>::iterator i = constraints.begin(); i != constraints.end(); i++) {
    string con;
    if (aliases.find(*i) == aliases.end()) {
      // This may occur for single variable assertions.
      con = string("(ToBool " + *i + ")");
    } else {
      con = aliases[*i];
    }
    
    yicesin += "(assert " + con + ")\n";
  }

  //yices_built = true;

  return yicesin;
}

bool query_kaluza(yices_model model) {
  yices_display_model(model);
  return true;
}

bool query_yices(string fmla) {
  if (!yices_initted) {
    init_yices();
  }

  // Output the string symbols and the literals they map to.
  string stringtable;
  for (map<string,string>::iterator i = strings.begin(); i != strings.end(); i++) {
    stringtable += i->first + " " + i->second + "\n";
  }
  
  // Build up all the definitions and constraints that have been
  // accumulated so far.
  //if (!yices_built) {
  string yicesin = build_yices();
  //}
  // %%% Check for sat here?

  // Add the query in question.
  yicesin += "(assert " + fmla + ")\n";
  FILE* outfl = fopen("/tmp/satin", "a");
  fprintf(outfl, "#####\n%s\n", yicesin.c_str());
  fclose(outfl);

  // Mark the baseline query to be able to revert.
  yices_push(yices_ctxt);

  // Redirect stdout because Yices vomits errors to stdout.
  /*
  FILE *redir = freopen("/dev/null", "w", stdout);
  if (redir == NULL) {
    fprintf(stderr, "Unable to redirect stdout\n");
  }
  */
  //fprintf(stderr, "INPUT:%s\n", yicesin.c_str());
  int ok = yices_parse_command(yices_ctxt, yicesin.c_str());
  //fprintf(stderr, "REDIR:%p\n", redir);
  /*
  if (redir != NULL) {
    // Revert stdout back to normal.
    redir = freopen("/dev/stdout", "w", stdout);
    if (redir == NULL) {
      fprintf(stderr, "Unable to revert stdout\n");
    }
  }
  */

  if (yices_inconsistent(yices_ctxt) == 1) {
    //fprintf(stderr, "Yices context is inconsistent\n");
    // Revert back to the boilerplate Yices expression.
    yices_pop(yices_ctxt);
    return false;
  }

  if (!ok) {
    fprintf(stderr, "Error parsing query input to Yices: %s\n", yices_get_last_error_message());
    // Revert back to the boilerplate Yices expression.
    yices_pop(yices_ctxt);
    // Returning true is the conservative action.
    return true;
  }

  lbool sat = yices_check(yices_ctxt);

  // If Yices determines that the model is satisfiable, we can
  // potentially refine the result by querying Kaluza. Otherwise, if
  // Yices returns unsat, we can continue on.
  /* %%% Currently disabled
  if (sat == l_true) {
    // Get model and query Kaluza if we have string constants.
    yices_model model = yices_get_model(yices_ctxt);
    bool kalsat = query_kaluza(model);
  }
  */

  // Revert back to the boilerplate Yices expression.
  yices_pop(yices_ctxt);

  // There are 3 values: l_true, l_false and l_undef. I'm pretty sure
  // our queries should never result in l_undef, but in that case,
  // returning true is the conservative action.
  if (sat == l_false) {
    return false;
  } else if (sat == l_true) {
    return true;
  }

  fprintf(stderr, "Yices returned l_undef!\n");
  return true;
}

// Helper functions for delheapprop.
// %%% These should go away in favor of the standardized search.
int vector_match(const vector<string> val, const string *pat, int slots, int n)
{
  for (int i = 0; i < n; ++i)
  {
    if (slots & 1)
    {
      if (val[i] != pat[i])
      {
        return 0;
      }
    }
    slots >>= 1;
  }
  return 1;
}

delheapprop_iter_t vector_set_search(const delheapprop_t &xs, const string *pat, int s, int n)
{
  for (delheapprop_iter_t i = xs.begin(); i != xs.end(); ++i)
  {
    if (vector_match(*i, pat, s, n))
    {
      return i;
    }
  }
  return delheapprop_mem.end();
}

// This set of functions implements the logic of the externally-
// exposed predicates.

bool meta_clear_impl() {
  reads.clear();
  readidx = 0;
  assigns.clear();
  assignidx = 0;
  calls.clear();
  callidx = 0;
  args.clear();
  argidx = 0;
}

bool is_symbolic_impl(string val) {
  return symbols.find(val) != symbols.end();
}

string unary_fn_impl(string op, string arg) {
  
  string fn = load_fn(arg);

  if (op == "not") {
    if (ints.find(arg) != ints.end() || arg == "true" || arg == "false") {
      // The not operator necessarily has a boolean operand.
      // So if the symbol has Yices type int, we need to
      // wrap it in an expression.
      fn = "(ToBool " + fn + ")";
      string alias = newval("sa");

      aliases[alias] = fn;
      symbols.insert(alias);
      bools.insert(alias);
    }
  } else if (ints.find(arg) == ints.end()) {
    fn = "(ToInt " + fn + ")";
    string alias = newval("sa");

    aliases[alias] = fn;
    symbols.insert(alias);
    ints.insert(alias);
  }

  string fun = "(" + op + " " + fn + ")";
  string alias = newval("sa");

  aliases[alias] = fun;
  symbols.insert(alias);
  // All unary operators/functions result in boolean values.
  bools.insert(alias);
  
  return alias;
}

string binary_fn_impl(string op, string arg1, string arg2) {
  string fn1 = load_fn(arg1);
  string fn2 = load_fn(arg2);

  // Yices type sanity check.
  if (op == "and" || op == "or") {
    // Convert these operators' operands to boolean.
    if (bools.find(arg1) == bools.end()) {
      fn1 = "(ToBool " + fn1 + ")";
      string alias = newval("sa");

      aliases[alias] = fn1;
      symbols.insert(alias);
      bools.insert(alias);
    }
    if (bools.find(arg2) == bools.end()) {
      fn2 = "(ToBool " + fn2 + ")";
      string alias = newval("sa");

      aliases[alias] = fn2;
      symbols.insert(alias);
      bools.insert(alias);
    }
  } else {
    // Otherwise convert all bool operands to int, which can actually
    // represent all other types.
    if (bools.find(arg1) != bools.end()) {
      fn1 = "(ToInt " + fn1 + ")";
      string alias = newval("sa");

      aliases[alias] = fn1;
      symbols.insert(alias);
      ints.insert(alias);
    }
    if (bools.find(arg2) != bools.end()) {
      fn2 = "(ToInt " + fn2 + ")";
      string alias = newval("sa");

      aliases[alias] = fn2;
      symbols.insert(alias);
      ints.insert(alias);
    }
  }

  string fun;
  if (op == "HasType") {
    // Process functions a little differently than operators.
    fun = "(= (" + op + " " + fn1 + ") " + fn2 + ")";
  } else if (op == "*" && intliterals.find(fn1) == intliterals.end()
      && intliterals.find(fn2) == intliterals.end()) {
    // Yices chokes on "non linear problems."
    fun = "(Mult " + fn1 + " " + fn2 + ")";
  } else {
    fun = "(" + op + " " + fn1 + " " + fn2 + ")";
  }
  string alias = newval("sa");

  aliases[alias] = fun;
  symbols.insert(alias);
  // Categorize the alias based on Yices return type.
  if (op == "+" || op == "-" || op == "*" || op == "/") {
    ints.insert(alias);
    // The result of all these operators is a Number value.
    // %%% At this point, + may mean string concatenation.
    typemap[alias] = "Number";
  } else {
    bools.insert(alias);
    typemap[alias] = "Boolean";
  }

  return alias;
}

string trinary_fn_impl(string op, string arg1, string arg2, string arg3) {
  string fn1 = load_fn(arg1);
  string fn2 = load_fn(arg2);
  string fn3 = load_fn(arg3);

  // Yices type sanity check.
  if (bools.find(arg1) != bools.end()) {
    fn1 = "(ToInt " + fn1 + ")";
    string alias = newval("sa");

    aliases[alias] = fn1;
    symbols.insert(alias);
    ints.insert(alias);
    typemap[alias] = "Object";
  }
  if (bools.find(arg2) != bools.end()) {
    fn2 = "(ToInt " + fn2 + ")";
    string alias = newval("sa");

    aliases[alias] = fn2;
    symbols.insert(alias);
    ints.insert(alias);
    typemap[alias] = "String";
  }
  if (bools.find(arg3) != bools.end()) {
    fn3 = "(ToInt " + fn3 + ")";
    string alias = newval("sa");

    aliases[alias] = fn3;
    symbols.insert(alias);
    ints.insert(alias);
    typemap[alias] = "Boolean";
  }

  // Only support HasProp function currently.
  string fun = "(= (" + op + " " + fn1 + " " + fn2 + ") " + fn3 + ")";
  string alias = newval("sa");

  aliases[alias] = fun;
  symbols.insert(alias);
  bools.insert(alias);

  return alias;
}

void constraint_impl(string sym) {

  if (aliases.find(sym) == aliases.end()) {
    // We're asserting an JS value, so need to convert to bool.
    string alias = "(= " + sym + " True)";
    sym = newval("sa");
    aliases[sym] = alias;
    symbols.insert(sym);
    // All unary operators/functions result in boolean values.
    bools.insert(sym);
  }

  constraints.insert(sym);
}

box heap_impl(string &preheap, string &loc, string &prop, string &value) {

  map<string,int>::iterator it = heappre_index.find(preheap);
  if (it != heappre_index.end()) {
    int idx = it->second;
    // %%% Assert consistency.
    return mem[idx];
  }

  string postheap = newval("H");
  string obj = newval("o");

  box b;
  b.kind = PROPSET;
  b.pre = preheap;
  b.loc = loc;
  b.prop = prop;
  b.value = value;
  b.post = postheap;
  b.obj = obj;

  int idx = mem.size();
  mem.push_back(b);
  heappre_index[preheap] = idx;
  heapobj_index[obj] = idx;
  heappost_index[postheap] = idx;
  loc_index[loc].push_back(idx);

  return b;
}

box del_impl(string &preheap, string &loc, string &prop) {

  map<string,int>::iterator it = delpre_index.find(preheap);
  if (it != delpre_index.end()) {
    int idx = it->second;
    // %%% Assert consistency.
    return mem[idx];
  }

  string postheap = newval("H");
  string obj = newval("o");

  box b;
  b.kind = DELETE;
  b.pre = preheap;
  b.loc = loc;
  b.prop = prop;
  b.post = postheap;
  b.obj = obj;

  int idx = mem.size();
  mem.push_back(b);
  delpre_index[preheap] = idx;
  delobj_index[obj] = idx;
  delpost_index[postheap] = idx;
  loc_index[loc].push_back(idx);

  return b;
}

box alloc_impl(string &preheap, string &obj) {

  map<string,int>::iterator it = allocpre_index.find(preheap);
  if (it != allocpre_index.end()) {
    int idx = it->second;
    // %%% Assert consistency.
    return mem[idx];
  }

  string postheap = newval("H");
  // Make a symbolic location for symbolic objects.
  string loc;
  if (is_symbolic_impl(obj)) {
    loc = newval("s");
    symbols.insert(loc);
    ints.insert(loc);
    map_symbol_type(loc, string("Object"));
  } else {
    loc = newval("###");
  }

  box b;
  b.kind = ALLOC;
  b.pre = preheap;
  b.obj = obj;
  b.post = postheap;
  b.loc = loc;

  int idx = mem.size();
  mem.push_back(b);
  allocpre_index[preheap] = idx;
  allocobj_index[obj] = idx;
  allocpost_index[postheap] = idx;
  loc_index[loc].push_back(idx);

  return b;
}

//
// The functions below implement the XSB interface.
//

extern "C" int meta_clear(CTXTdecl) {
  meta_clear_impl();
  return TRUE;
}

extern "C" int lookupobj(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  REQ_VAR(3);

  string val1(extern_ptoc_string(1));
  string val2(extern_ptoc_string(2));

  map<string,vector<int> >::iterator found = loc_index.find(val2);
  if (found != loc_index.end()) {
    vector<int> updates = found->second;
    vector<int>::reverse_iterator it;
    for (it=updates.rbegin(); it!=updates.rend(); ++it) {
      int idx = *it;
      box got = mem[idx];
      // The passed heap should match the post-heap of the update.
      // %%% Doesn't work
      if (got.pre == val1) {
        extern_ctop_string(3, got.obj.c_str());
        return TRUE;
      }
    }
  }

  return FALSE;
}

extern "C" int heapprop(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);
  REQ_STRING_OR_LIST_OR_VAR(4);
  REQ_STRING_OR_VAR(5);
  REQ_STRING_OR_VAR(6);

  // Construct a vector that represents our partial information.
  string val1;
  bool has1 = false;
  string val2;
  bool has2 = false;
  string val3;
  bool has3 = false;
  string val4;
  bool has4 = false;
  string val5;
  bool has5 = false;
  string val6;
  bool has6 = false;
  if (!is_var(reg_term(CTXTc 1))) {
    has1 = true;
    val1 = string(extern_ptoc_string(1));
  }
  if (!is_var(reg_term(CTXTc 2))) {
    has2 = true;
    val2 = string(extern_ptoc_string(2));
  }
  if (!is_var(reg_term(CTXTc 3))) {
    has3 = true;
    val3 = string(extern_ptoc_string(3));
  }
  if (!is_var(reg_term(CTXTc 4))) {
    has4 = true;
    prolog_term p4 = reg_term(CTXTc 4);
    if (is_list(p4) || is_nil(p4)) {
      // %%% Replace this with a system for storing
      // %%% lists discretely, perhaps with a string
      // %%% pointer to another structure.
      val4 = serializeList(p4);
    } else {
      val4 = string(extern_ptoc_string(4));
    }
  }
  if (!is_var(reg_term(CTXTc 5))) {
    has5 = true;
    val5 = string(extern_ptoc_string(5));
  }
  if (!is_var(reg_term(CTXTc 6))) {
    has6 = true;
    val6 = string(extern_ptoc_string(6));
  }

  if (has1 && has2 && has3 && has4 && !has5 && !has6) {
    box b = heap_impl(val1, val2, val3, val4);

    extern_ctop_string(5, b.post.c_str());
    extern_ctop_string(6, b.obj.c_str());

    return TRUE;
  } else {

    // We are in lookup mode. Try to find a previous successful call to
    // delheapprop that matches the partial information we've been
    // passed in the actuals.

    // Search the previous invocations of this predicate.
    if (has5) {
      map<string,int>::iterator it = heappost_index.find(val5);
      if (it != heappost_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == PROPSET;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has2 || val2 == got.loc);
        ok = ok && (!has3 || val3 == got.prop);
        ok = ok && (!has4 || val4 == got.value);
        ok = ok && (!has6 || val6 == got.obj);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has2) {
            extern_ctop_string(2, got.loc.c_str());
          }
          if (!has3) {
            extern_ctop_string(3, got.prop.c_str());
          }
          if (!has4) {
            string g3 = got.value;
            if (g3.length() >= 4) {
              string gsub = g3.substr(g3.length() - 4);
              if (gsub == "&EOL") {
                deserializeList(g3, reg_term(CTXTc 4));
              } else {
                extern_ctop_string(4, g3.c_str());
              }
            } else {
              extern_ctop_string(4, g3.c_str());
            }
          }
          if (!has6) {
            extern_ctop_string(6, got.obj.c_str());
          }
          return TRUE;
        }
      }
    } else if (has6) {
      map<string,int>::iterator it = heapobj_index.find(val6);
      if (it != heapobj_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == PROPSET;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has2 || val2 == got.loc);
        ok = ok && (!has3 || val3 == got.prop);
        ok = ok && (!has4 || val4 == got.value);
        ok = ok && (!has5 || val5 == got.post);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has2) {
            extern_ctop_string(2, got.loc.c_str());
          }
          if (!has3) {
            extern_ctop_string(3, got.prop.c_str());
          }
          if (!has4) {
            string g3 = got.value;
            if (g3.length() >= 4) {
              string gsub = g3.substr(g3.length() - 4);
              if (gsub == "&EOL") {
                deserializeList(g3, reg_term(CTXTc 4));
              } else {
                extern_ctop_string(4, g3.c_str());
              }
            } else {
              extern_ctop_string(4, g3.c_str());
            }
          }
          if (!has5) {
            extern_ctop_string(5, got.post.c_str());
          }
          return TRUE;
        }
      }
    } else {
      fprintf(stderr, "Wrong type of heapprop\n");
    }
  }

  return FALSE;
}

// 1. Pre-heap
// 2. Location
// 3. Property name
// 4. Post-heap
// 5. Post-object
extern "C" int delheapprop(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);
  REQ_STRING_OR_VAR(4);
  REQ_STRING_OR_VAR(5);

  // Construct a vector that represents our partial information.
  string val1;
  bool has1 = false;
  string val2;
  bool has2 = false;
  string val3;
  bool has3 = false;
  string val4;
  bool has4 = false;
  string val5;
  bool has5 = false;
  if (!is_var(reg_term(CTXTc 1))) {
    has1 = true;
    val1 = string(extern_ptoc_string(1));
  }
  if (!is_var(reg_term(CTXTc 2))) {
    has2 = true;
    val2 = string(extern_ptoc_string(2));
  }
  if (!is_var(reg_term(CTXTc 3))) {
    has3 = true;
    val3 = string(extern_ptoc_string(3));
  }
  if (!is_var(reg_term(CTXTc 4))) {
    has4 = true;
    val4 = string(extern_ptoc_string(4));
  }
  if (!is_var(reg_term(CTXTc 5))) {
    has5 = true;
    val5 = string(extern_ptoc_string(5));
  }

  if (has1 && has2 && has3 && !has4 && !has5) {
    box b = del_impl(val1, val2, val3);

    extern_ctop_string(4, b.post.c_str());
    extern_ctop_string(5, b.obj.c_str());

    return TRUE;
  } else {

    // We are in lookup mode. Try to find a previous successful call to
    // delheapprop that matches the partial information we've been
    // passed in the actuals.

    // Search the previous invocations of this predicate.
    if (has4) {
      map<string,int>::iterator it = delpost_index.find(val4);
      if (it != delpost_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == DELETE;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has2 || val2 == got.loc);
        ok = ok && (!has3 || val3 == got.prop);
        ok = ok && (!has5 || val5 == got.obj);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has2) {
            extern_ctop_string(2, got.loc.c_str());
          }
          if (!has3) {
            extern_ctop_string(3, got.prop.c_str());
          }
          if (!has5) {
            extern_ctop_string(5, got.obj.c_str());
          }
          return TRUE;
        }
      }
    } else if (has5) {
      map<string,int>::iterator it = delobj_index.find(val5);
      if (it != delobj_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == DELETE;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has2 || val2 == got.loc);
        ok = ok && (!has3 || val3 == got.prop);
        ok = ok && (!has4 || val4 == got.post);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has2) {
            extern_ctop_string(2, got.loc.c_str());
          }
          if (!has3) {
            extern_ctop_string(3, got.prop.c_str());
          }
          if (!has4) {
            extern_ctop_string(4, got.post.c_str());
          }
          return TRUE;
        }
      }
    } else {
      fprintf(stderr, "Wrong type of delheapprop\n");
    }
  }

  return FALSE;
}

// Memory allocation
extern "C" int alloc(CTXTdecl) {
  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);
  REQ_STRING_OR_VAR(4);

  // Construct a vector that represents our partial information.
  string val1;
  bool has1 = false;
  string val2;
  bool has2 = false;
  string val3;
  bool has3 = false;
  string val4;
  bool has4 = false;
  if (!is_var(reg_term(CTXTc 1))) {
    has1 = true;
    val1 = string(extern_ptoc_string(1));
  }
  if (!is_var(reg_term(CTXTc 2))) {
    has2 = true;
    val2 = string(extern_ptoc_string(2));
  }
  if (!is_var(reg_term(CTXTc 3))) {
    has3 = true;
    val3 = string(extern_ptoc_string(3));
  }
  if (!is_var(reg_term(CTXTc 4))) {
    has4 = true;
    val4 = string(extern_ptoc_string(4));
  }

  if (has1 && has2 && !has3 && !has4) {
    box b = alloc_impl(val1, val2);

    extern_ctop_string(3, b.post.c_str());
    extern_ctop_string(4, b.loc.c_str());

    return TRUE;
  } else {

    // We are in lookup mode. Try to find a previous successful call 
    // to alloc that matches the partial information we've been passed
    // in the actuals.

    // Search the previous invocations of this predicate.
    if (has3) {
      map<string,int>::iterator it = allocpost_index.find(val3);
      if (it != allocpost_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == ALLOC;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has2 || val2 == got.obj);
        ok = ok && (!has4 || val4 == got.loc);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has2) {
            extern_ctop_string(2, got.obj.c_str());
          }
          if (!has4) {
            extern_ctop_string(4, got.loc.c_str());
          }
          return TRUE;
        }
      }
    } else if (has2) {
      map<string,int>::iterator it = allocobj_index.find(val2);
      if (it != allocobj_index.end()) {
        int idx = it->second;
        box got = mem[idx];
        bool ok = got.kind == ALLOC;
        ok = ok && (!has1 || val1 == got.pre);
        ok = ok && (!has4 || val4 == got.loc);
        if (ok) {
          // Copy the entry we found into the unbound arguments.
          if (!has1) {
            extern_ctop_string(1, got.pre.c_str());
          }
          if (!has3) {
            extern_ctop_string(3, got.post.c_str());
          }
          if (!has4) {
            extern_ctop_string(4, got.loc.c_str());
          }
          return TRUE;
        }
      }
    } else {
      fprintf(stderr, "Wrong type of alloc\n");
    }
  }

  return FALSE;
}

// new_Number(N)
// It's not correct to run the "Number" constructor because that could
// have been reassigned. Literal numbers are always constructed with the
// actual #Number constructor.
extern "C" int new_number(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);

  if(!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2))) {

    char *given1 = extern_ptoc_string(1);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(2, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(objbuf) + 3);
    sprintf(sbuf, "%s|%s", given1, objbuf);
    newnumber_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;    
  } else if(is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2))) {

    char *given2 = extern_ptoc_string(2);

    for(set<string>::iterator it = newnumber_mem.begin(); it != newnumber_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[1] == given2) {
        extern_ctop_string(1,toks[0].c_str());
        return TRUE;
      }
    }

    return FALSE;    
  }

  // %%% Do we want a case in which all components are non-variable?

  return FALSE;
}

// new_String(N)
// It's not correct to run the "String" constructor because that could
// have been reassigned. Literal strings are always constructed with the
// actual #Number constructor.
extern "C" int new_string(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);

  if(!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2))) {

    char *given1 = extern_ptoc_string(1);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(2, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(objbuf) + 3);
    // %%% This will cause problems when the string contains a "|".
    sprintf(sbuf, "%s|%s", given1, objbuf);
    newstring_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;    
  } else if(is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2))) {

    char *given2 = extern_ptoc_string(2);

    for(set<string>::iterator it = newstring_mem.begin(); it != newstring_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[1] == given2) {
        extern_ctop_string(1,toks[0].c_str());
        return TRUE;
      }
    }

    return FALSE;    
  }

  // %%% Do we want a case in which all components are non-variable?

  return FALSE;
}

// new_Boolean(N)
// It's not correct to run the "Boolean" constructor because that could
// have been reassigned. Literal numbers are always constructed with the
// actual #Boolean constructor.
extern "C" int new_boolean(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);

  if(!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2))) {

    char *given1 = extern_ptoc_string(1);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(2, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(objbuf) + 3);
    sprintf(sbuf, "%s|%s", given1, objbuf);
    newbool_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;    
  } else if(is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2))) {

    char *given2 = extern_ptoc_string(2);

    for(set<string>::iterator it = newbool_mem.begin(); it != newbool_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[1] == given2) {
        extern_ctop_string(1,toks[0].c_str());
        return TRUE;
      }
    }

    return FALSE;    
  }

  // %%% Do we want a case in which all components are non-variable?

  return FALSE;
}

// new_native_error(m,l)
extern "C" int new_native_error(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);

  if(!is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3))) {

    char *given1 = extern_ptoc_string(1);
    char *given2 = extern_ptoc_string(2);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(3, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(given2) + strlen(objbuf) + 4);
    sprintf(sbuf, "%s|%s|%s", given1, given2, objbuf);
    newerror_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;
  } else if(is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3))) {

    char *given3 = extern_ptoc_string(3);

    for(set<string>::iterator it = newerror_mem.begin(); it != newerror_mem.end(); it++) {
      vector<string> toks = split(*it,'|');
      
      if(toks[2] == given3) {
        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());
        return TRUE;
      }
    }

    return FALSE;    
  }

  // %%% Do we want a case in which all components are non-variable?

  return FALSE;
}

// Construct a new object.
extern "C" int new_object(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);

  if(!is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3))) {

    char *given1 = extern_ptoc_string(1);
    char *given2 = extern_ptoc_string(2);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(3, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(given2) + strlen(objbuf) + 4);
    sprintf(sbuf, "%s|%s|%s", given1, given2, objbuf);
    newobj_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;    
  } else if(!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3))) {

    char *given1 = extern_ptoc_string(1);
    char *given3 = extern_ptoc_string(3);

    for(set<string>::iterator it = newobj_mem.begin(); it != newobj_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[0] == given1 && toks[2] == given3) {
	
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;    

  } else if(is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3))) {

    char *given3 = extern_ptoc_string(3);

    for(set<string>::iterator it = newobj_mem.begin(); it != newobj_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[2] == given3) {

        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;    

  } else if(is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3))) {

    char *given2 = extern_ptoc_string(2);
    char *given3 = extern_ptoc_string(3);

    for(set<string>::iterator it = newobj_mem.begin(); it != newobj_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[1] == given2 && toks[2] == given3) {
	
	extern_ctop_string(1,toks[0].c_str());

	return TRUE;
      }
    }

    return FALSE;
  }
}

// Create a new activation record.
extern "C" int new_activation(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING_OR_VAR(3);
  REQ_STRING_OR_VAR(4);

  if(!is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3)) && is_var(reg_term(CTXTc 4))) {

    char *given1 = extern_ptoc_string(1);
    char *given2 = extern_ptoc_string(2);
    char *given3 = extern_ptoc_string(3);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(4, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + strlen(given2) + strlen(given3) + strlen(objbuf) + 5);
    sprintf(sbuf, "%s|%s|%s|%s", given1,given2,given3,objbuf);
    newact_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;
  } else if (is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given3 = extern_ptoc_string(3);
    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newact_mem.begin(); it != newact_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if (toks[2] == given3 && toks[3] == given4) {
	
        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;
  } else if (is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newact_mem.begin(); it != newact_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[3] == given4) {
	
        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());
        extern_ctop_string(3,toks[2].c_str());

        return TRUE;
      }
    }

    return FALSE;
  } else if (!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given1 = extern_ptoc_string(1);
    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newact_mem.begin(); it != newact_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[0] == given1 && toks[3] == given4) {
	
        extern_ctop_string(2,toks[1].c_str());
        extern_ctop_string(3,toks[2].c_str());

        return TRUE;
      }
    }

    return FALSE;
  }

  return FALSE;
}

// Generate a new arguments collection.
extern "C" int new_arguments(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_LIST_OR_VAR(2);
  REQ_STRING_OR_VAR(3);

  if(!is_var(reg_term(CTXTc 1)) && !is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3)) && is_var(reg_term(CTXTc 4))) {
    char *given1 = extern_ptoc_string(1);
    string given2 = serializeList(reg_term(CTXTc 2));
    char *given3 = extern_ptoc_string(3);

    string newobj = newval("obj");
    const char *objbuf = newobj.c_str();

    extern_ctop_string(4, objbuf);

    char *sbuf = (char *)malloc(strlen(given1) + given2.length() + strlen(given3) + strlen(objbuf) + 4);
    // %%% unsafe delimiter
    sprintf(sbuf, "%s|%s|%s|%s", given1,given2.c_str(),given3,objbuf);
    newarg_mem.insert(string(sbuf));
    free(sbuf);

    return TRUE;
  } else if(is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newarg_mem.begin(); it != newarg_mem.end(); it++) { 
      // %%% unsafe delimiter
      vector<string> toks = split(*it,'|');
      
      if(toks[3] == given4) {
	
        extern_ctop_string(1,toks[0].c_str());
        deserializeList(toks[1], reg_term(CTXTc 2));
        extern_ctop_string(3,toks[2].c_str());

        return TRUE;
      }
    }

    return FALSE;
  } else if(is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && !is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given3 = extern_ptoc_string(3);
    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newarg_mem.begin(); it != newarg_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[2] == given3 && toks[3] == given4) {
	
        extern_ctop_string(1,toks[0].c_str());
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;

  } else if(!is_var(reg_term(CTXTc 1)) && is_var(reg_term(CTXTc 2)) && is_var(reg_term(CTXTc 3)) && !is_var(reg_term(CTXTc 4))) {

    char *given1 = extern_ptoc_string(1);
    char *given4 = extern_ptoc_string(4);

    for(set<string>::iterator it = newarg_mem.begin(); it != newarg_mem.end(); it++) { 
      vector<string> toks = split(*it,'|');
      
      if(toks[0] == given1 && toks[3] == given4) {
	
        extern_ctop_string(3,toks[2].c_str());
        extern_ctop_string(2,toks[1].c_str());

        return TRUE;
      }
    }

    return FALSE;
  }
}

// Register a constraint that must be globally true.
extern "C" int constraint(CTXTdecl) {
  REQ_STRING(1);

  string fn(extern_ptoc_string(1));
  constraint_impl(fn);

  return TRUE;
}

// Determine whether the argument is a symbolic value.
extern "C" int is_symbolic(CTXTdecl) {

  REQ_STRING_OR_VAR(1);

  if (!is_var(reg_term(CTXTc 1))) {
    string val(extern_ptoc_string(1));
    return is_symbolic_impl(val) ? TRUE : FALSE; 
  }

  return FALSE;
}

extern "C" int symbolic_scope(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  REQ_VAR(3);
  REQ_VAR(4);

  string preheap(extern_ptoc_string(1));
  string id(extern_ptoc_string(2));

  string symscope;
  string postheap;
  if (scope_map.find(id) == scope_map.end()) {
    string scopeobj = newval("s");
    symbols.insert(scopeobj);
    ints.insert(scopeobj);
    typemap[scopeobj] = "Object";

    box specs = alloc_impl(preheap,scopeobj);

    postheap = specs.post;
    symscope = specs.loc;
    scope_map[id] = symscope;
  } else {
    symscope = scope_map[id];
    postheap = preheap;
  }
    
  extern_ctop_string(3, symscope.c_str());
  extern_ctop_string(4, postheap.c_str());
  return TRUE;
}

// Register a new symbolic value, with a (possibly symbolic) type.
extern "C" int symbolic(CTXTdecl) {

  REQ_STRING_OR_VAR(1);
  REQ_STRING_OR_VAR(2);

  string sym;
  if (!is_var(reg_term(CTXTc 1))) {
    // If a symbolic value was passed, it should already be logged in
    // all structures.
    char *s = extern_ptoc_string(1);
    sym = string(s);
  } else {
    // Generate a new symbolic value.
    sym = newval("s");

    symbols.insert(sym);
    ints.insert(sym);
    extern_ctop_string(1,sym.c_str());
  }

  string typ;
  if (is_var(reg_term(CTXTc 2))) {
    // Generate a symbolic type for this value.
    typ = newval("s");

    symbols.insert(typ);
    ints.insert(typ);
    extern_ctop_string(2,typ.c_str());
  } else {
    // A concrete type was specified.
    char *t = extern_ptoc_string(2);
    typ = string(t);
  }

  map_symbol_type(sym, typ);

  return TRUE;
}

// Retrieve the type of the given symbolic value.
extern "C" int type_symbolic(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING_OR_VAR(2);

  string sym(extern_ptoc_string(1));

  if (is_var(reg_term(CTXTc 2))) {
    if (bools.find(sym) != bools.end()) {
      extern_ctop_string(2, "Boolean");
    } else if (typemap.find(sym) == typemap.end()) {
      extern_ctop_string(2, "Type");
    } else {

      string typ = typemap[sym]; 

      if (symbols.find(typ) != symbols.end()) {
        // Query Yices to see if the value can have type Symbolic.
        int bufsize = strlen(typ.c_str()) + 32;
        char *buf = (char*)malloc(bufsize);
        sprintf(buf, "(= %s Symbolic)", typ.c_str());
        // If so, just return the symbolic type.
        // If not, repeatedly query to get the concrete type.
        if (!query_yices(string(buf))) {
          for(set<string>::iterator i=types.begin(); i!=types.end(); i++) {
            sprintf(buf, "(= %s %s)", typ.c_str(), i->c_str());
            if (query_yices(string(buf))) {
              typ = *i;
              break;
            }
          }
        }
        free(buf);
      }

      extern_ctop_string(2, typ.c_str());
    }
  } else {
    string typ(extern_ptoc_string(2));
    map_symbol_type(sym, typ);
    assert(symbols.find(sym) != symbols.end());
  }

  return TRUE;
}

extern "C" int trinary_fn(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  REQ_STRING(3);
  REQ_STRING(4);
  REQ_VAR(5);

  string op(extern_ptoc_string(1));
  string arg1(extern_ptoc_string(2));
  string arg2(extern_ptoc_string(3));
  string arg3(extern_ptoc_string(4));

  string alias = trinary_fn_impl(op, arg1, arg2, arg3);
  
  extern_ctop_string(5, alias.c_str());
  return TRUE;
}

// Generate a binary symbolic function and associate it with an alias.
extern "C" int binary_fn(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  REQ_STRING(3);
  REQ_VAR(4);

  string op(extern_ptoc_string(1));
  string arg1(extern_ptoc_string(2));
  string arg2(extern_ptoc_string(3));
  //fprintf(stderr, "op: %s, arg1: %s, arg2: %s\n", op.c_str(), arg1.c_str(), arg2.c_str());

  string alias = binary_fn_impl(op, arg1, arg2);
  
  extern_ctop_string(4, alias.c_str());
  return TRUE;
}

// Generate a unary symbolic function and associate it with an alias.
extern "C" int unary_fn(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  REQ_VAR(3);
 
  string op(extern_ptoc_string(1));
  string arg(extern_ptoc_string(2));

  string alias = unary_fn_impl(op, arg);

  extern_ctop_string(3, alias.c_str());
  return TRUE;
}

// Track symbolic values that were generated in
// the course of a query.
extern "C" int initmap(CTXTdecl) {

  REQ_STRING(1);
  REQ_STRING_OR_VAR(2);
  REQ_STRING(3);

  string in0(extern_ptoc_string(1));
  string mode(extern_ptoc_string(3));

  if (mode == "set") {

    string in1(extern_ptoc_string(2));

    // First check to see if this location has been seen before.
    for (vector<box_t>::iterator i=initmap_mem.begin(); i!=initmap_mem.end(); i++) {
      box_t toks = *i;

      // We found a location match
      if (toks.v[0] == in0) {
        // We've seen all the same args before, no
        // modifications necessary.
        if (toks.v[1] == in1) {
          return TRUE;
        }
        // Else we should constrain the pointed-to objects
        // to be equals.
        string alias = newval("sa");
        aliases[alias] = "(= " + toks.v[1] + " " + in1 + ")";
        constraints.insert(alias);
        // And continue on to log this mapping.
      }
    }

    // Log the values into persistent memory.
    box_t b;
    b.v.push_back(in0);
    b.v.push_back(in1);
    b.valid = true;
    initmap_mem.push_back(b);

    return TRUE;

  } else {

    if (!is_var(reg_term(CTXTc 2))) {

      string in1(extern_ptoc_string(2));

      // See if the ground relation holds.
      for (vector<box_t>::iterator i=initmap_mem.begin(); i!=initmap_mem.end(); i++) { 
        box_t toks = *i;
        
        if (toks.v[0] == in0 && toks.v[1] == in1) {	  	  
          return TRUE;
        }
      }
    } else {

      for (vector<box_t>::iterator i=initmap_mem.begin(); i!=initmap_mem.end(); i++) { 
        box_t toks = *i;

        if (toks.v[0] == in0) {
          extern_ctop_string(2, toks.v[1].c_str());
          return TRUE;
        }
      }
    }
  }

  return FALSE;
}

// Determine whether a formula is satisfiable,
// possibly by querying Yices.
extern "C" int satisfiable(CTXTdecl) {

  REQ_STRING(1);

  char *given = extern_ptoc_string(1);

  // Special shortcuts for true and false literals.
  if (!strcmp(given,"true")) return TRUE;
  if (!strcmp(given,"false")) return FALSE;

  string sym(given);
  string fmla;
  if (aliases.find(sym) != aliases.end()) {
    fmla = aliases[sym];
  } else if (ints.find(sym) != ints.end()) {
    int bufsize = strlen(given) + 10;
    char *buf = (char*)malloc(bufsize); 
    bzero(buf,bufsize);
    sprintf(buf, "(= %s True)", given);
    fmla = string(buf);
    free(buf);
  } else {
    fprintf(stderr, "Invalid symbol to test satisfiability: %s\n", given);
    return FALSE;
  }

#ifdef DEBUG
  fprintf(stderr, "TESTING SATISFIABILITY: %s\n", fmla.c_str());
#endif
  return query_yices(fmla) ? TRUE : FALSE;
}

extern "C" int set_call_return(CTXTdecl) {
  return_flag = true;
  return TRUE;
}

extern "C" int unset_call_return(CTXTdecl) {
  return_flag = false;
  return TRUE;
}

extern "C" int is_call_return(CTXTdecl) {
  if(return_flag == true)
    return TRUE;
  
  return FALSE;
}

extern "C" int set_lookup(CTXTdecl) {
  symb_lookup = true;
  return TRUE;
}

extern "C" int unset_lookup(CTXTdecl) {
  symb_lookup = false;
  return TRUE;
}

extern "C" int is_lookup(CTXTdecl) {
  if(symb_lookup == true)
    return TRUE;
  
  return FALSE;
}

extern "C" int iterateprop(CTXTdecl) {

  REQ_STRING(1);
  REQ_STRING(2);

  char *given1 = extern_ptoc_string(1);
  char *given2 = extern_ptoc_string(2);

  char *buf = (char *)malloc(strlen(given1)+strlen(given2)+2);
  bzero(buf,strlen(given1)+strlen(given2)+2);

  sprintf(buf,"%s~%s",given1,given2);
  iterate_mem.insert(string(buf));
  free(buf);

  return TRUE;
}

extern "C" int iteratedprop(CTXTdecl) {

  REQ_STRING(1);
  REQ_STRING(2);

  char *given1 = extern_ptoc_string(1);
  char *given2 = extern_ptoc_string(2);

  char *buf = (char *)malloc(strlen(given1)+strlen(given2)+2);
  bzero(buf,strlen(given1)+strlen(given2)+2);

  sprintf(buf,"%s~%s",given1,given2);
  if(iterate_mem.find(string(buf)) == iterate_mem.end()) {
    free(buf);
    return FALSE;
  } else {
    free(buf);
    return TRUE;
  }
}

// Convert a string to a number.
extern "C" int stringnumber(CTXTdecl) {
  REQ_STRING(1);

  char *given1 = extern_ptoc_string(1);
  int state = 1;
  char *begin = NULL;
  char *end = NULL;
  for (char *i = given1; *i != '\0'; ++i)
  {
    switch (state)
    {
      case 1: // expect quote
        state = *i == '"' ? 2 : 7;
        break;
      case 2: // expect spaces
        if (isspace(*i))
        {
          // do nothing
        }
        else if (isdigit(*i))
        {
          state = 3;
          begin = i;
        }
        else
        {
          state = 7;
        }
        break;
      case 3: // expect digits
        if (isdigit(*i))
        {
          // do nothing
        }
        else if (isspace(*i))
        {
          state = 4;
          end = i;
        }
        else if (*i == '"')
        {
          state = 6;
          end = i;
        }
        else
        {
          state = 7;
        }
        break;
      case 4: // expect spaces or quote
        if (isspace(*i))
        {
          // do nothing
        }
        else if (*i == '"')
        {
          state = 6;
        }
        else
        {
          state = 7;
        }
        break;
      case 6: // accept
        break;
      case 7: // reject
        break;
    }
  }
  if (state == 6)
  {
    // accepted
    *end = '\0';
    extern_ctop_string(2, begin);
  }
  else
  {
    // rejected
    extern_ctop_string(2, "#NaN");
  }
  return TRUE;
}

// Clear out some data structures between queries.
extern "C" int rbb(CTXTdecl) {
  // Clear the metadata, such as which functions have been called.
  meta_clear_impl();

  constraints.clear();
  // Clearing symbols causes problems when tabling is enabled because
  // some of the tabled predicates (e.g. aget) generate new symbolic
  // variables. If these symbols (grounded objects, in the view of XSB)
  // are grabbed out of a table, they will not be reentered into the
  // symbols vector, and therefore subsequent calls to is_symbolic/1
  // will incorrectly fail.
  symbols.clear();
  hasidx_mem.clear();
  newref_mem.clear();
  newobj_mem.clear();
  newnumber_mem.clear();
  newstring_mem.clear();
  newarg_mem.clear();
  newact_mem.clear();
  aliases.clear();
  aliases["true"] = "True";
  aliases["false"] = "False";
  initmap_mem.clear();
  iterate_mem.clear();
  
  mem.clear();
  heappre_index.clear();
  allocpre_index.clear();
  delpre_index.clear();
  heappost_index.clear();
  allocpost_index.clear();
  delpost_index.clear();
  heapobj_index.clear();
  allocobj_index.clear();
  delobj_index.clear();
  loc_index.clear();

  strings.clear();
  reverse_strings.clear();
  scope_map.clear();

  symb_lookup = false;
  clear_next_call = false;
  clear_next_assign = false;
  clear_next_read = false;
  
  return TRUE;
}

extern "C" int add_call(CTXTdecl) {
  REQ_STRING(1);
  
  if (native_mode) return TRUE;

  // Clear the asserted call targets and arguments if they are subsumed
  // by an evaluated call.
  if (clear_next_call) {
    calls.clear();
    // %%% Assumes that add_call is invoked prior to updateargs during
    // %%% evaluation.
    args.clear();
    clear_next_call = false;
  }

  string callptr(extern_ptoc_string(1));
  calls.push_back(callptr);

  return TRUE;
}

extern "C" int get_call(CTXTdecl) {
  REQ_INT(1);
  REQ_VAR(2);

  int idx = extern_ptoc_int(1);

  if (idx >= calls.size()) {
    // There haven't been that many calls.
    return FALSE;
  }

  string c = calls.at(idx);
  
  extern_ctop_string(2, c.c_str());
  return TRUE;
}

extern "C" int current_func(CTXTdecl) {
  REQ_VAR(1);

  string lastcall;
  if (calls.size() == 0) {
    lastcall = "#null";
  } else {
    lastcall = calls.back();
  }

  extern_ctop_string(1, lastcall.c_str());

  return TRUE;
}

extern "C" int add_arg(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  
  if (native_mode) return TRUE;

  string idx(extern_ptoc_string(1));
  string val(extern_ptoc_string(2));

  pair<string,string> newarg(idx, val);
  args.push_back(newarg);

  return TRUE;
}

extern "C" int get_arg(CTXTdecl) {
  REQ_STRING(1);
  REQ_VAR(2);

  string idx(extern_ptoc_string(1));

  // Collect a list of values that have been seen as arguments at the
  // specified index.
  list<string> vals;
  for(vector< pair<string,string> >::iterator it=args.begin(); it!=args.end(); it++) {
    if (it->first == idx) {
      string val(it->second);
      vals.push_back(val);
    }
  }

  // The return value will be a value, or potentially a disjunction of
  // values in case multiple arguments at the given index were recorded.
  string val;

  if (vals.empty()) {
    // If nothing was found, the argument value is undefined.
    val = "#undefined";
  } else if (vals.size() == 1) {
    // If only one value was logged at the given index, just return it.
    val = vals.front();
  } else {
    // Otherwise, create a symbolic value and assert that it equals one
    // of the logged argument values.
    val = newval("s");
    symbols.insert(val);
    ints.insert(val);

    // Generate a symbolic type for this value.
    string typ = newval("s");
    symbols.insert(typ);
    ints.insert(typ);
    map_symbol_type(val, typ);

    // Build up a constraint on the new symbolic value.
    string fn;
    int cnt = 0;
    for (list<string>::iterator it=vals.begin(); it!=vals.end(); it++) {
      string argval = *it;
      string fnpart = binary_fn_impl("=", argval, val);
      if (cnt == 0) {
        fn = fnpart;
      } else {
        fn = binary_fn_impl("or", fn, fnpart);
      }
      cnt++;
    }

    constraint_impl(fn);
  }

  extern_ctop_string(2, val.c_str());
  return TRUE;
}

extern "C" int add_assign(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  
  if (native_mode) return TRUE;

  // Clear the asserted assignment targets and arguments if they are
  // subsumed by an evaluated assignment.
  if (clear_next_assign) {
    assigns.clear();
    clear_next_assign = false;
  }

  string assobj(extern_ptoc_string(1));
  string assmemb(extern_ptoc_string(2));
  //cerr << "ASSNOBJ: " << assobj << " ASSNMEMB: " << assmemb << endl;
  pair<string,string> newass(assobj, assmemb);

  assigns.push_back(newass);
  return TRUE;
}

extern "C" int get_assign(CTXTdecl) {
  REQ_INT(1);
  REQ_VAR(2);
  REQ_VAR(3);

  int idx = extern_ptoc_int(1);

  if (idx >= assigns.size()) {
    // There haven't been that many assignments.
    return FALSE;
  }

  pair<string,string> asspair = assigns.at(idx);
  
  extern_ctop_string(2, asspair.first.c_str());
  extern_ctop_string(3, asspair.second.c_str());

  return TRUE;
}

extern "C" int add_read(CTXTdecl) {
  REQ_STRING(1);
  REQ_STRING(2);
  
  if (native_mode) return TRUE;

  // Clear the asserted read targets and arguments if they are subsumed
  // by an evaluated read.
  if (clear_next_read) {
    reads.clear();
    clear_next_read = false;
  }

  string readobj(extern_ptoc_string(1));
  string readmemb(extern_ptoc_string(2));
  pair<string,string> newread(readobj, readmemb);

  reads.push_back(newread);
  return TRUE;
}

extern "C" int get_read(CTXTdecl) {
  REQ_INT(1);
  REQ_VAR(2);
  REQ_VAR(3);

  int idx = extern_ptoc_int(1);

  if (idx >= reads.size()) {
    // There haven't been that many reads.
    return FALSE;
  }

  pair<string,string> rdpair = reads.at(idx);
  
  extern_ctop_string(2, rdpair.first.c_str());
  extern_ctop_string(3, rdpair.second.c_str());

  return TRUE;
}

extern "C" int get_policy_idx(CTXTdecl) {
  REQ_VAR(1);
  extern_ctop_int(1, policy_idx);
  return TRUE;
}

extern "C" int set_policy_idx(CTXTdecl) {
  REQ_INT(1);
  policy_idx = extern_ptoc_int(1);
  return TRUE;
}

extern "C" int add_policy_str(CTXTdecl) {
  REQ_INT(1);
  REQ_STRING(2);

  int polidx = extern_ptoc_int(1);
  string str(extern_ptoc_string(2));

  set<string> strs = policy_strs[polidx];
  strs.insert(str);
  policy_strs[polidx] = strs;

  return TRUE;
}

extern "C" int add_policy_prop(CTXTdecl) {
  REQ_INT(1);
  REQ_STRING(2);

  int polidx = extern_ptoc_int(1);
  string prop(extern_ptoc_string(2));

  set<string> props = policy_props[polidx];
  props.insert(prop);
  policy_props[polidx] = props;

  return TRUE;
}

extern "C" int init(CTXTdecl) {
  REQ_STRING(1);

  // Kill stdout because yices vomits errors to it.
  FILE *redir = freopen("/dev/null", "w", stdout);
  if (redir == NULL) {
    fprintf(stderr, "Unable to redirect stdout\n");
  }

  string line;

  string userdatpath(extern_ptoc_string(1));

  user_functions.clear();
  ifstream userdat(userdatpath.c_str(), ios::in);
  // Check for existence, access.
  if (userdat.fail()) {
    fprintf(stderr, "Unable to read user function dat file: %s\n", userdatpath.c_str());
    // Continue.
  }

  while (getline(userdat, line)) {
    user_functions.insert(line);
  }
  userdat.close();


  natives.clear();
  ifstream datfile(nativedatpath.c_str(), ios::in);

  // Check for existence, access.
  if (datfile.fail()) {
    fprintf(stderr, "Unable to read native dat file: %s\n", nativedatpath.c_str());
    return FALSE;
  }

  while (getline(datfile, line)) {
    vector<string> toks = split(line, ' ');

    // Classify the value according to Yices type.
    if (toks[1] == "Boolean") {
      bools.insert(toks[0]);
    } else {
      ints.insert(toks[0]);
    }
    map_symbol_type(toks[0], toks[1]);

    // Everything we're loading here is a native.
    natives.insert(toks[0]);

    if (toks[1] == "Type") {
      types.insert(toks[0]);
    }
  }

  datfile.close();

  return TRUE;
}

extern "C" int dump_heap(CTXTdecl) {
  printf("mem: %lu\n", mem.size());
  printf("heappre_index: %lu\n", heappre_index.size());
  printf("allocpre_index: %lu\n", allocpre_index.size());
  printf("delpre_index: %lu\n", delpre_index.size());
  printf("heappost_index: %lu\n", heappost_index.size());
  printf("allocpost_index: %lu\n", allocpost_index.size());
  printf("delpost_index: %lu\n", delpost_index.size());
  printf("heapobj_index: %lu\n", heapobj_index.size());
  printf("allocobj_index: %lu\n", allocobj_index.size());
  printf("delobj_index: %lu\n", delobj_index.size());
  printf("loc_index: %lu\n", loc_index.size());
  printf("initmap: %lu\n", initmap_mem.size());
  printf("constraints: %lu\n", constraints.size());
  printf("symbols: %lu\n", symbols.size());
  printf("bools: %lu\n", bools.size());
  printf("ints: %lu\n", ints.size());
  printf("intliterals: %lu\n", intliterals.size());
  printf("strings: %lu\n", strings.size());
  printf("reverse_strings: %lu\n", reverse_strings.size());
  printf("locations: %lu\n", locations.size());
  printf("natives: %lu\n", natives.size());
  printf("user_functions: %lu\n", user_functions.size());
  printf("aliases: %lu\n", aliases.size());
  printf("typemap: %lu\n", typemap.size());
  printf("types: %lu\n", types.size());
  printf("policy_props: %lu\n", policy_props.size());
  printf("policy_strs: %lu\n", policy_strs.size());
  printf("scope_map: %lu\n", scope_map.size());

  printf("hasidx_mem: %lu\n", hasidx_mem.size());
  printf("newref_mem: %lu\n", newref_mem.size());
  printf("newobj_mem: %lu\n", newobj_mem.size());
  printf("newnumber_mem: %lu\n", newnumber_mem.size());
  printf("newstring_mem: %lu\n", newstring_mem.size());
  printf("newbool_mem: %lu\n", newbool_mem.size());
  printf("newerror_mem: %lu\n", newerror_mem.size());
  printf("newact_mem: %lu\n", newact_mem.size());
  printf("newarg_mem: %lu\n", newarg_mem.size());
  printf("iterate_mem: %lu\n", iterate_mem.size());
    
  printf("assigns: %lu\n", assigns.size());
  printf("reads: %lu\n", reads.size());
  printf("args: %lu\n", args.size());
  printf("calls: %lu\n", calls.size());
  printf("vargen: %lu\n", vargen.size());

  return TRUE;
}

