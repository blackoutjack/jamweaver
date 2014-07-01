
#include <string>
#include <limits>
#include <vector>
#include <map>
#include <iostream>
#include <fstream>
#include <sstream>
#include <sys/time.h>
#include <sys/resource.h>
#include <gperftools/tcmalloc.h>
#include <gperftools/profiler.h>

// %%% Remove when refactoring
#include "wali/SemElem.hpp"

#include "util.h"
#include "nwa.h"

using namespace std;
using namespace wali;
using namespace opennwa;

string parseAppname(const string &autin) {
	int dash1 = autin.find('-') + 1;
	string end = autin.substr(dash1);
	int slash1 = end.find('/');
	end[slash1] = '-';
	int slash2 = end.find('/');
	return end.substr(0, slash2);
}

string parseAppdir(const string &autin) {
	int lastslash = autin.rfind('/');
	return autin.substr(0, lastslash);
}

void usage() {
	fprintf(stderr, "./nwa file.aut\n");
}

int main(int argc, char *argv[]) {
  //HeapProfilerSetAllocationInterval(1024*1024*100);

	if (argc < 2) {
		usage();
		exit(1);
	}
  
  char *autflname = argv[1];

  string autstr;
  if (strcmp("-", autflname)) {
    ifstream autfl(autflname);
    if (autfl.fail()) {
      cerr << "Unable to open automaton file: " << autflname << endl;
      return 1;
    }
    fileToString(&autfl, &autstr);
  } else {
    stdinToString(&autstr);
  }

  // Optionally use the ShortestPathRelation reinterpretation.
  bool shortest = false;
  if (argc > 3 && !strcmp(argv[2], "-s")) {
    shortest = true;
  }

  //limitMemory(1024UL * 1024UL * 1024UL * 6UL);
  
  /*
  int cexidx = 0;
  if (argc > 3) {
    cexidx = atoi(argv[3]);
  }
  */

  // %%% Temporary, ugly and inefficient string op.
  int statesStart = autstr.find("STATES:");
  string relstr = autstr.substr(0, statesStart);
  autstr = autstr.substr(statesStart);

  //cerr << "relstr:\n" << relstr << endl;
  //cerr << "autstr:\n" << autstr << endl;

  // Construct the policy automaton from the string representation.
  map<Key,int> symRels;
  // %%% Parse directly from stream.
  Nwa *nwa = parseAutomaton(autstr, &symRels);

#ifdef JAMDEBUG
  string appname = parseAppname(autflname);
  string dirname = parseAppdir(autflname);

  // This is to prefix the statistics output generated
  // within getSomeAcceptedWord.cpp.
  cerr << appname << endl;
  cerr << "NWA STATES: " << nwa->sizeStates() << endl;
  cerr << "NWA TRANSITIONS: " << nwa->sizeTrans() << endl;

  // Collect the WALi formatted automaton.
  string autfl = dirname + "/wali.aut";
  automatonToFile(*nwa, autfl);
#endif

#ifdef JAMDOT
  string dottitle = parseAppname(autflname);
  string dotdirname = parseAppdir(autflname);
  string dotfl = dotdirname + "/wali.dot";
  automatonToDotFile(*nwa, dotfl, dottitle);
#endif

  ref_ptr<NestedWord> nw = findAcceptedWord(*nwa, symRels, relstr, shortest);

  if (nw.is_valid()) {
    printNestedWord(*nw.get_ptr());
  } else {
    cout << "no counterexamples" << endl;
  }

  delete nwa;

	return 0;
}
