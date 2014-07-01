
// Standard library headers
#include <string>
#include <limits>
#include <vector>
#include <map>
#include <iostream>
#include <fstream>
#include <sstream>
#include <sys/time.h>
#ifdef JAMDEBUG
#include <sys/resource.h>
#endif

// WALi/OpenNWA headers
#include "opennwa/NwaFwd.hpp"
#include "opennwa/query/language.hpp"

// Local headers
#include "util.h"
#include "nwa.h"
#include "RelationWeightGen.h"
//#include "ShortestPathRelation.h"
//#include "ShortestPathRelationVisitor.h"

using namespace std;
using namespace wali;
using namespace opennwa;

// %%% NEEDS REFACTORING
ref_ptr<NestedWord> findAcceptedWord(const Nwa &nwa, const map<Key,int> &symbolRelationMap, const string &relations, bool shortest) {

#ifdef JAMPROFILE
  double startTime;
  long startMem;
  //printStatus("Before RelationWeightGen construction");
  recordStart(&startTime, &startMem);
#endif

  // Generate an accepting word in the automaton. It carries with it
  // the accepting path through the NWA which can be mapped back to
  // the states of the policy automaton.
  RelationWeightGen rwg(&symbolRelationMap, relations);


#ifdef JAMPROFILE
  printFinish("RelationWeightGen construction", &startTime, &startMem);
  printBddStats();
#endif
  
  if (false && shortest) {
  /*

    sem_elem_t se = query::getWitnessForSomeAcceptedWordWithWeights(*nwa, *rwg);
    if (se.is_empty()) return ref_ptr<NestedWord>();

#ifdef JAMDEBUG
    cerr << "##### WITNESS" << endl;
    se->print(cerr);    
#endif

    witness::Witness *wit = dynamic_cast<witness::Witness*>(se.get_ptr());
    assert (wit &&
      "Invalid witness returned from getWitnessForSomeAcceptedWord");

    if (wit->equal(wit->zero().get_ptr())) return ref_ptr<NestedWord>();

    ShortestPathRelation::init(rwg->getContext());
    ShortestPathRelationVisitor sprv;
    wit->accept(sprv);

    sem_elem_t ans = sprv.answer();

#ifdef JAMDEBUG
    cerr << "##### PATH WITNESS" << endl;
    se->print(cerr);    
#endif

    ShortestPathRelation *spr = dynamic_cast<ShortestPathRelation*>(ans.get_ptr());
    assert (spr && "Empty shortest path relation");

    witness::Witness *pathWit = dynamic_cast<witness::Witness*>(spr->getShortestWitness().get_ptr());

    query::details::PathVisitor pv(*nwa);
    pathWit->accept(pv);

    delete rwg;

    return pv.answer();
  */  
  } else {
    // Call to the OpenNWA word finding functionality.
    NestedWordRefPtr nw = query::getSomeAcceptedWordWithWeights(nwa, rwg);

#ifdef JAMPROFILE
    //printStatus("After getSomeAcceptedWordWithWeights");
    printFinish("getSomeAcceptedWordWithWeights", &startTime, &startMem);
    printBddStats();
#endif

    return nw;
  }
}



