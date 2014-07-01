
#include <map>
#include "wali/Key.hpp"
#include "opennwa/NwaFwd.hpp"

#include "util.h"
#include "nwa.h"
#include "jniutil.h"
#include "nwajni.h"

using namespace std;
using namespace opennwa;
using namespace wali;

// State to maintain when searching for counterexamples
map<jint,Key> stateHashToKeyMap;
map<Key,jobject> keyToStateMap;
map<jint,Key> symbolHashToKeyMap;
map<Key,jobject> keyToSymbolMap;

// Java method ids
jclass ArrayList_class = NULL;
jmethodID ArrayList_add = NULL;
jmethodID ArrayList_construct = NULL;
jmethodID ArrayList_size = NULL;
jmethodID ArrayList_get = NULL;
jmethodID Relation_toString = NULL;
jmethodID Symbol_hashCode = NULL;
jmethodID State_hashCode = NULL;
jmethodID State_isInitial = NULL;
jmethodID State_isFinal = NULL;
jmethodID State_serialize = NULL;
jmethodID Edge_getSource = NULL;
jmethodID Edge_getDestination = NULL;
jmethodID Edge_getSymbol = NULL;
jmethodID Edge_isCallEdge = NULL;
jmethodID Edge_isReturnEdge = NULL;
jmethodID Edge_getCallSource = NULL;
jmethodID PolicyControlProduct_getRelationSize = NULL;
jmethodID PolicyControlProduct_getRelation = NULL;
jmethodID PolicyControlProduct_getEdges = NULL;
jmethodID PolicyControlProduct_serializeSymbol = NULL;


Key addSymbolToAutomaton(JNIEnv *env, Nwa *automaton, jobject aut, jobject symbol) {

  jint hash = env->CallIntMethod(symbol, Symbol_hashCode);

  if (symbolHashToKeyMap.count(hash) > 0) return symbolHashToKeyMap[hash];
    
  jstring serial = (jstring)env->CallObjectMethod(aut, PolicyControlProduct_serializeSymbol, symbol);

  Key keyval = getKey(env->GetStringUTFChars(serial, NULL));
  keyToSymbolMap[keyval] = symbol;
  symbolHashToKeyMap[hash] = keyval;
  automaton->addSymbol(keyval);

  return keyval;
}

Key addStateToAutomaton(JNIEnv *env, Nwa *automaton, jobject state) {

  jint hash = env->CallIntMethod(state, State_hashCode);

  if (stateHashToKeyMap.count(hash) > 0) return stateHashToKeyMap[hash];

  jstring serial = (jstring)env->CallObjectMethod(state, State_serialize);

  Key keyval = getKey(env->GetStringUTFChars(serial, NULL));
  stateHashToKeyMap[hash] = keyval;
  keyToStateMap[keyval] = state;

  jboolean isinit = env->CallBooleanMethod(state, State_isInitial);

  if (isinit == JNI_TRUE) {
    automaton->addInitialState(keyval);
  } else {

    jboolean isfinal = env->CallBooleanMethod(state, State_isFinal);

    if (isfinal == JNI_TRUE) {
      automaton->addFinalState(keyval);
    } else {
      automaton->addState(keyval);
    }
  }

  return keyval;
}

void addEdgeToAutomaton(JNIEnv *env, Nwa *automaton, jobject aut, jobject edge, map<Key,string> *rels) {

  // Load the source state for the edge.
  jobject source = env->CallObjectMethod(edge, Edge_getSource);
  Key sourceKey = addStateToAutomaton(env, automaton, source);

  // Load the destination state for the edge.
  jobject dest = env->CallObjectMethod(edge, Edge_getDestination);
  Key destKey = addStateToAutomaton(env, automaton, dest);
 
  // Load the symbol labeling the edge.
  jobject symbol = env->CallObjectMethod(edge, Edge_getSymbol);
  Key symKey = addSymbolToAutomaton(env, automaton, aut, symbol);

  // Map the symbol to its relation.
  jobject rel = env->CallObjectMethod(aut, PolicyControlProduct_getRelation, edge);

  jstring reljstr = (jstring)env->CallObjectMethod(rel, Relation_toString);
  string relstr(env->GetStringUTFChars(reljstr, NULL));
  (*rels)[symKey] = relstr;

  // Determine if the edge is a call edge.
  jboolean isCallEdge = env->CallBooleanMethod(edge, Edge_isCallEdge);

  if (isCallEdge == JNI_TRUE) {
    // Add a call edge.
    automaton->addCallTrans(sourceKey, symKey, destKey);
  } else {
    // Check if the edge is a return edge.
    jboolean isReturnEdge = env->CallBooleanMethod(edge, Edge_isReturnEdge);

    if (isReturnEdge == JNI_TRUE) {

      // Get the call source for the edge.
      jobject callSource = env->CallObjectMethod(edge, Edge_getCallSource);
      Key callSourceKey = addStateToAutomaton(env, automaton, callSource);

      // Create a return edge.
      automaton->addReturnTrans(sourceKey, callSourceKey, symKey, destKey);

    } else {
      // Must be an internal edge.
      automaton->addInternalTrans(sourceKey, symKey, destKey);
    }
  }
}

JNIEXPORT void JNICALL
  Java_edu_wisc_cs_jam_opennwa_OpenNWALibrary_cleanup
  (JNIEnv *env, jobject obj) {
  env->DeleteGlobalRef(ArrayList_class);
}

JNIEXPORT void JNICALL
  Java_edu_wisc_cs_jam_opennwa_OpenNWALibrary_initialize
  (JNIEnv *env, jobject obj) {

  // Load the jclass object for ArrayList. Since we need to construct an
  // ArrayList object later, we make this a global reference (such that
  // it persists across invocations. The other jclass objects are only
  // used here, and jmethodIDs persist between calls automatically.
  ArrayList_class = (jclass)env->NewGlobalRef(env->FindClass("java/util/ArrayList"));
  assert(ArrayList_class != NULL); 

  // Load the ArrayList constructor.
  ArrayList_construct = getMethodId(env, ArrayList_class, "<init>", "()V");
  assert(ArrayList_construct != NULL);

  // Get the add method of ArrayList.
  ArrayList_add = getMethodId(env, ArrayList_class, "add", "(Ljava/lang/Object;)Z");
  assert(ArrayList_add != NULL);

  ArrayList_size = getMethodId(env, ArrayList_class, "size", "()I");
  assert(ArrayList_size != NULL);

  ArrayList_get = getMethodId(env, ArrayList_class, "get", "(I)Ljava/lang/Object;");
  assert(ArrayList_get != NULL);

  jclass Relation_class = env->FindClass("edu/wisc/cs/jam/Relation");
  assert(Relation_class != NULL);

  Relation_toString = getMethodId(env, Relation_class, "toString", "()Ljava/lang/String;");
  assert(Relation_toString != NULL);

  // Load the jclass object for Symbol.
  jclass Symbol_class = env->FindClass("edu/wisc/cs/automaton/Symbol");
  assert(Symbol_class != NULL); 

  Symbol_hashCode = getMethodId(env, Symbol_class, "hashCode", "()I");
  assert(Symbol_hashCode != NULL);

  // Load the jclass object for State.
  jclass State_class = env->FindClass("edu/wisc/cs/automaton/State");
  assert(State_class != NULL); 

  State_hashCode = getMethodId(env, State_class, "hashCode", "()I");
  assert(State_hashCode != NULL);

  State_isInitial = getMethodId(env, State_class, "isInitial", "()Z");
  assert(State_isInitial != NULL);

  State_isFinal = getMethodId(env, State_class, "isFinal", "()Z");
  assert(State_isFinal != NULL);

  State_serialize = getMethodId(env, State_class, "serialize", "()Ljava/lang/String;");
  assert(State_serialize != NULL);

  // Load the jclass object for Automaton.Edge.
  jclass Edge_class = env->FindClass("edu/wisc/cs/automaton/Automaton$Edge");
  assert(Edge_class != NULL); 

  Edge_getSource = getMethodId(env, Edge_class, "getSource", "()Ledu/wisc/cs/automaton/State;");
  assert(Edge_getSource != NULL);

  Edge_getDestination = getMethodId(env, Edge_class, "getDestination", "()Ledu/wisc/cs/automaton/State;");
  assert(Edge_getDestination != NULL);

  Edge_getSymbol = getMethodId(env, Edge_class, "getSymbol", "()Ledu/wisc/cs/automaton/Symbol;");
  assert(Edge_getSymbol != NULL);

  Edge_isCallEdge = getMethodId(env, Edge_class, "isCallEdge", "()Z");
  assert(Edge_isCallEdge != NULL);

  Edge_isReturnEdge = getMethodId(env, Edge_class, "isReturnEdge", "()Z");
  assert(Edge_isReturnEdge != NULL);

  Edge_getCallSource = getMethodId(env, Edge_class, "getCallSource", "()Ledu/wisc/cs/automaton/State;");
  assert(Edge_getCallSource != NULL);

  // Load the jclass object for Automaton.Edge.
  jclass PolicyControlProduct_class = env->FindClass("edu/wisc/cs/jam/PolicyControlProduct");
  assert(PolicyControlProduct_class != NULL); 

  PolicyControlProduct_getRelationSize = getMethodId(env, PolicyControlProduct_class, "getRelationSize", "()I");
  assert(PolicyControlProduct_getRelationSize != NULL);

  PolicyControlProduct_getRelation = getMethodId(env, PolicyControlProduct_class, "getRelation", "(Ledu/wisc/cs/automaton/Automaton$Edge;)Ledu/wisc/cs/jam/Relation;");
  assert(PolicyControlProduct_getRelation != NULL);

  PolicyControlProduct_getEdges = getMethodId(env, PolicyControlProduct_class, "getEdges", "()Ljava/util/List;");
  assert(PolicyControlProduct_getEdges != NULL);

  PolicyControlProduct_serializeSymbol = getMethodId(env, PolicyControlProduct_class, "serializeSymbol", "(Ledu/wisc/cs/automaton/ComboSymbol;)Ljava/lang/String;");
  assert(PolicyControlProduct_serializeSymbol != NULL);
}

JNIEXPORT jobject JNICALL
  Java_edu_wisc_cs_jam_opennwa_OpenNWALibrary_findAcceptedWord
  (JNIEnv *env, jobject jobj, jobject aut) {

  // Get the count of relation states from the automaton.
  jint varcnt = env->CallIntMethod(aut, PolicyControlProduct_getRelationSize);

  // Get the automaton edges.
  jobject edges = env->CallObjectMethod(aut, PolicyControlProduct_getEdges);

  // Get the size of the edges list.
  jint ecnt = env->CallIntMethod(edges, ArrayList_size);

  // Initialize the Nwa object.
  Nwa *nwa = new Nwa();

  // Map symbols to relations.
  // %%% needs fixin
  map<Key,int> rels;
  // Loop through the edges and add them to the Nwa object.
  for (int i=0; i<ecnt; i++) {
    jobject edge = env->CallObjectMethod(edges, ArrayList_get, i);
    addEdgeToAutomaton(env, nwa, aut, edge, &rels);
  }

  //nwa->print(cerr);

  // Pass the automaton to the general interface.
  NestedWord *nw = findAcceptedWord(nwa, varcnt, &rels);

  // No longer need the automaton.
  delete nwa;

  jobject word = NULL;
  if (nw != NULL) {
    // Initialize a list to hold the counterexample.
    word = env->NewObject(ArrayList_class, ArrayList_construct);

    // Collect the symbols in a list.
    for (NestedWord::const_iterator i=nw->begin(); i!=nw->end(); i++) {
      jobject sym = keyToSymbolMap[i->symbol];
      jclass symcls = env->GetObjectClass(sym);
      env->CallVoidMethod(word, ArrayList_add, sym);
    }

    // Clean up after ourselves.
    delete nw;
  }

  // Check for Java exceptions at the end.
  jthrowable exc = env->ExceptionOccurred();
  if (exc) {
    // Just print a debug message for the exception.
    env->ExceptionDescribe();
    env->ExceptionClear();
  }

  // Clear data structures.
  stateHashToKeyMap.clear();
  keyToStateMap.clear();
  symbolHashToKeyMap.clear();
  keyToSymbolMap.clear();
  clearKeyspace();

  return word;
}
