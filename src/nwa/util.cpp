
#include "util.h"

#include <sys/resource.h>

#include "wali/domains/binrel/BinRel.hpp"

using namespace std;
using namespace wali;
using namespace opennwa;

void limitMemory(unsigned long limit) {
  rlimit lim;
  getrlimit(RLIMIT_AS, &lim);
  const unsigned long max = limit;
  const unsigned long cur = max;
  if (lim.rlim_cur > cur) {
    lim.rlim_cur = cur;
  }
  if (lim.rlim_max > max) {
    lim.rlim_max = max;
  }
  setrlimit(RLIMIT_AS, &lim);
}

void printStatus(const string &title) {
  ifstream fin("/proc/self/status");
  string stat;
  fileToString(&fin, &stat);
  fin.close();
  cerr << title << ":\n" << stat;
}

void printBddStats() {
  cerr << endl << "BDD STATS" << endl;

  bddStat s;
  bdd_stats(&s);

  cerr << "produced: " << s.produced << endl;
  cerr << "nodenum: " << s.nodenum << endl;
  cerr << "maxnodenum: " << s.maxnodenum << endl;
  cerr << "freenodes: " << s.freenodes << endl;
  cerr << "minfreenodes: " << s.minfreenodes << endl;
  cerr << "varnum: " << s.varnum << endl;
  cerr << "cachesize: " << s.cachesize << endl;
  cerr << "gbcnum: " << s.gbcnum << endl;

  bdd_fprintstat(stderr);
}

void recordStart(double *tm, long *mem) {
  struct rusage usage;
  getrusage(RUSAGE_SELF, &usage);
  *tm = (((double)usage.ru_utime.tv_sec) * 1000000 + ((double)usage.ru_utime.tv_usec)) / 1000;
  *mem = usage.ru_maxrss;
}

void printFinish(const string &title, double *startTime, long *startMem) {
  struct rusage usage;
  getrusage(RUSAGE_SELF, &usage);
  double endTime = (((double)usage.ru_utime.tv_sec) * 1000000 +
    ((double)usage.ru_utime.tv_usec)) / 1000;
  double endMem = usage.ru_maxrss;
  cerr << title << " time: " << (endTime - *startTime) << endl;
  //cerr << title << " mem. increase: " << (*endMem - startMem) << endl;
  //cerr << endl;

  // Update the values so they can be reused for another segment.
  *startTime = endTime;
  *startMem = endMem;
}

// Split a string on the given delimiter.
void tokenize(const string &input, const string &delims, vector<string> *tokens) {
  string::size_type lastPos = input.find_first_not_of(delims, 0);
  string::size_type pos = input.find_first_of(delims, lastPos);

  while (string::npos != pos || string::npos != lastPos) {
    tokens->push_back(input.substr(lastPos, pos - lastPos));
    lastPos = input.find_first_not_of(delims, pos);
    pos = input.find_first_of(delims, lastPos);
  }
}

void tokenize(const string &input, const string &delims, vector< pair<size_t,size_t> > *tokens) {
  string::size_type lastPos = input.find_first_not_of(delims, 0);
  string::size_type pos = input.find_first_of(delims, lastPos);

  while (string::npos != pos || string::npos != lastPos) {
    tokens->push_back(make_pair(lastPos, pos - lastPos));
    lastPos = input.find_first_not_of(delims, pos);
    pos = input.find_first_of(delims, lastPos);
  }
}

void stdinToString(string *out) {
  char part[4096];
  while (cin.good()) {
    cin.get(part, 4096, '\0');
    out->append(part);
  }  
}

// Load the contents of a file into a string.
void fileToString(ifstream *fl, string *out) {
  char part[4096];
  while (fl->good()) {
    fl->get(part, 4096, '\0');
    out->append(part);
  }
  fl->close();
}

void automatonToDotFile(const Nwa& aut, const string &filename, const string &title) {
  ofstream dout(filename.c_str());
  aut.print_dot(dout, title);
  dout.close();
}

// Print an automaton to the specified file.
void automatonToFile(const Nwa &nwa, const string &filename) {
  ofstream fout(filename.c_str());
  nwa.print(fout);
  fout.close();
}

void automatonToDot(const Nwa &nwa, const string &filename) {
  ofstream fout(filename.c_str());
  nwa.print_dot(fout, filename);
  fout.close();
}

void printNestedWord(const NestedWord &nw) {
  // Collect the symbols in a list.
  for (NestedWord::const_iterator i=nw.begin(); i!=nw.end(); i++) {
    cout << key2str(i->symbol) << endl;
  }
}

// Convert the input to a WALi NWA.
// The caller is responsible for deleting the returned Nwa.
Nwa *parseAutomaton(const string &input, map<Key,int> *relationMap) {
  map<string,Key> states;

  Key epsilon = WALI_EPSILON;
  Nwa *myNWA = new Nwa();
  myNWA->clear();

  int mode = 0;
  vector<string> lines;
  tokenize(input, "\n", &lines);
  for (int i=0; i<lines.size(); i++) {
    string tok = lines[i];
    if (!tok.compare("STATES:")) {
      mode = 1;
      continue;
    } else if (!tok.compare("EDGES:")) {
      mode = 2;
      continue;
    }
    /*
    else if (!tok.compare("CALLSITES|CALLRETURNS:")) {
      mode = 3;
      continue;
    } else if (!tok.compare("ENTRY|EXITS:")) {
      mode = 4;
      continue;
    }
    */
    
    map<Key,Key> callStates;

    if (mode == 1) {
      if (tok.find("*",0) != string::npos) {
        // Add an initial state.
        tok.replace(tok.find("*"), 1, "");
        states.insert(make_pair(tok,getKey(tok)));
        myNWA->addInitialState(states[tok]);
      } else if (tok.find("%",0) != string::npos) {
        // Add a final state.
        tok.replace(tok.find("%"), 1, "");
        states.insert(make_pair(tok,getKey(tok)));
        myNWA->addFinalState(states[tok]);
      } else {
        // Add a normal (non-final, non-initial) state.
        states.insert(make_pair(tok,getKey(tok)));
        myNWA->addState(states[tok]);
      }
    } else if (mode == 2) {
      // Split the line on the delimeter.
      vector<string> edgetoks;
      tokenize(tok, "|", &edgetoks);
      int cnt = edgetoks.size();
      // All edges should have a source state, a destination state and
      // a symbol, and return edges will have call source.
      // The last component is the relation.
      assert(cnt == 4 || cnt == 5);
      string src = edgetoks[0];
      string dest = edgetoks[cnt - 3];
      string sym = edgetoks[cnt - 2];
      int relId = atoi(edgetoks[cnt - 1].c_str());
      //assert (rel[rel.size() - 1] == '>');

      // Establish the key for the edge symbol.
      Key symkey = getKey(sym);
      myNWA->addSymbol(symkey);
    
      // Make sure a symbol isn't associated with more than 1 relation.
      assert (relationMap->find(symkey) == relationMap->end() || (*relationMap)[symkey] == relId);
      (*relationMap)[symkey] = relId;
      //cerr << "sym: " << sym << " relId: " << relId << endl;

      if (src[0] == '@') {
        // Remove the call edge indicator from the beginning of the line.
        src = src.substr(1);

        // Add a call edge.
        myNWA->addCallTrans(getKey(src), symkey, getKey(dest));
      } else if (src[0] == '&') {
        // Remove the return edge indicator from the beginning of the line.
        src = src.substr(1);
        // Get the matching callsite state.
        string callsrc = edgetoks[1];

        myNWA->addReturnTrans(getKey(src), getKey(callsrc), symkey, getKey(dest));
      } else {
        // Add an internal edge.
        myNWA->addInternalTrans(getKey(src), symkey, getKey(dest));
      }
    }
    /*
    else if (mode == 3) {
      // Split the line on the delimeter.
      vector<string> statetoks;
      tokenize(tok, "|", &statetoks);
      int cnt = statetoks.size();
      // All callsites should have a callsite and a returnsite.
      assert(cnt == 2);

      Key call = getKey(statetoks[0]);
      Key ret = getKey(statetoks[1]);

      callStates.insert(make_pair(call, ret));
    } else if (mode == 4) {
      // Split the line on the delimeter.
      vector<string> statetoks;
      tokenize(tok, "|", &statetoks);
      int cnt = statetoks.size();
      // All callsites should have a callsite and a returnsite.
      assert(cnt == 2);

      Key call = getKey(statetoks[0]);
      vector<string> rettoks;
      tokenize(statetoks[1], ",", &rettoks);
      
      for (unsigned i=0; i<rettoks.size(); i++) {
        // Add a call edge.
        myNWA->addCallTrans(getKey(src), symkey, getKey(dest));
        myNWA->addReturnTrans(getKey(src), getKey(callsrc), symkey, getKey(dest));
        
      }
    }
    */
  }

  return myNWA;
}


