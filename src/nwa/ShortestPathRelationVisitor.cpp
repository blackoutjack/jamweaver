
#include "ShortestPathRelationVisitor.h"
#include "ShortestPathRelation.h"

#include "strings.h"
#include "wali/domains/binrel/BinRel.hpp"

using namespace std;
using namespace wali;
using namespace wali::domains::binrel;

/*
 * Class ShortestPathRelationVisitor
 */



// Extend just adds the accumulated distances.
sem_elem_t ShortestPathRelationVisitor::calculateExtend(witness::WitnessExtend *w, sem_elem_t &lval, sem_elem_t &rval) {
  (void) w;
  return lval->extend(rval.get_ptr());
}

// Combine returns the minimum distance of the children.
sem_elem_t ShortestPathRelationVisitor::calculateCombine(
  witness::WitnessCombine *w, list<sem_elem_t> &childrenValues) {
  (void) w;
  //cerr << "combine" << endl;
  assert(childrenValues.size() == 2);

  sem_elem_t lval = childrenValues.front();
  sem_elem_t rval = childrenValues.back();

  return lval->combine(rval);
}

// Merge is a noop.
sem_elem_t ShortestPathRelationVisitor::calculateMerge(witness::WitnessMerge *w, sem_elem_t &callerValue, sem_elem_t &ruleValue, sem_elem_t &calleeValue) {
  (void) w;
  assert(0 && "Merge not implemented!");
  return ruleValue;
}

sem_elem_t ShortestPathRelationVisitor::calculateRule(witness::WitnessRule *w) {
  binrel_t rel(dynamic_cast<BinRel*>(w->weight().get_ptr()));
  return new ShortestPathRelation(rel, w);
}

sem_elem_t ShortestPathRelationVisitor::calculateTrans(witness::WitnessTrans *w) {
  binrel_t rel(dynamic_cast<BinRel*>(w->weight().get_ptr()));
  return new ShortestPathRelation(rel, w);
}
