
#ifndef JAM_NWA_SHORTESTPATH_H
#define JAM_NWA_SHORTESTPATH_H

#include <utility>
#include <ostream>
#include <list>

#include "wali/SemElem.hpp"
#include "wali/witness/Witness.hpp"
#include "wali/witness/CalculatingVisitor.hpp"
#include "wali/ShortestPathSemiring.hpp"

/*
 * A visitor that performs calculations over a DAG with
 * ShortestPath weights.
 */

class ShortestPathRelationVisitor : public wali::witness::CalculatingVisitor<wali::sem_elem_t>{

public:

  // Multiplies the child relation matrices.
  wali::sem_elem_t calculateExtend(wali::witness::WitnessExtend *w, wali::sem_elem_t &lval, wali::sem_elem_t &rval);

  // Calculates the pointwise minimum of the children.
  wali::sem_elem_t calculateCombine(wali::witness::WitnessCombine *w, std::list<wali::sem_elem_t> &childrenValues);

  // Merge is a noop.
  wali::sem_elem_t calculateMerge(wali::witness::WitnessMerge *w, wali::sem_elem_t &callerValue, wali::sem_elem_t &ruleValue, wali::sem_elem_t &calleeValue);

  // Return the relation for the rule paired with a unit distance.
  wali::sem_elem_t calculateRule(wali::witness::WitnessRule *w);

  // Return the one semiring element for leaf transitions.
  wali::sem_elem_t calculateTrans(wali::witness::WitnessTrans *w);

};

#endif
