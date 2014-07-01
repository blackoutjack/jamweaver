
#ifndef JAM_NWA_SHORTESTPATHRELATION_H
#define JAM_NWA_SHORTESTPATHRELATION_H

#include <utility>
#include <ostream>
#include <list>

#include "wali/SemElem.hpp"
#include "wali/domains/binrel/BinRel.hpp"
#include "wali/witness/Witness.hpp"
#include "wali/witness/CalculatingVisitor.hpp"


class ShortestPathRelation : public wali::SemElem {

public:
    static void init(const wali::domains::binrel::BddContext *c);

    //ShortestPathRelation();

    // Initialize a relation matrix with all edges having unit distance.
    ShortestPathRelation(wali::domains::binrel::binrel_t relation, wali::sem_elem_t wit);

    // Copy constructor
    ShortestPathRelation(const ShortestPathRelation& other);

    ShortestPathRelation& operator=(const ShortestPathRelation& rhs);

    ~ShortestPathRelation();

    // Performs matrix multiplication (with ShortestPathSemiring
    // operations: (x): +, (+): minimum) to determine the resulting 
    // distances. The extension of the SemElem components is also taken,
    // and the element paired with the minimum resulting distance is
    // propagated.
    // %%% Would be possibly simpler if we actually use
    // ShortestPathSemiring elements instead of ints.
    wali::sem_elem_t extend(wali::SemElem *se);

    // Performs a pointwise minimum to create the resulting matrix.
    // SemElems that are paired with the minimum distance are propagated.
    wali::sem_elem_t combine(wali::SemElem *se);

    // Prints only the distances in a multiline matrix form.
    // %%% Columns aren't necessarily aligned.
    std::ostream& print(std::ostream &o) const;

    // The one matrix is a diagonal matrix with distance 1 paired with
    // the one SemElem on the diagonal.
    wali::sem_elem_t one() const;

    // The zero matrix has all infinite distances paired with the zero
    // SemElem.
    wali::sem_elem_t zero() const;

    // Checks whether the matrices of the two ShortestPathRelation semiring
    // elements contain all the same corresponding elements. The equal
    // method of the sem_elem_t component is invoked to determine equality.
    bool equal(wali::SemElem *se) const;

    wali::sem_elem_t getWitness();

    // Find the shortest path from an initial to a final state,
    // and return the corresponding witness.
    wali::sem_elem_t getShortestWitness();

    // Find the shortest path from an initial to a final state, and
    // return the corresponding witness.
    // The idx parameter allows for returning the idx'th shortest path.
    //wali::sem_elem_t getShortestWitness(int idx);

protected:
  typedef std::pair<wali::sem_elem_t,int> element;

  // Create a new ShortestPathRelation from a generated matrix.
  ShortestPathRelation(element* m);

  // Access the stored matrix.
  element *getMatrix() const;

  ShortestPathRelation *makeOne() const;
  ShortestPathRelation *makeZero() const;

private:

  element *matrix;

  // Be able to represent paths of length 4096.
  static const int ADD_BITS = 12;
  static const int INF = INT_MAX;
  static const wali::domains::binrel::BddContext *context;
  static int dim;
  static int varCnt;
  static bdd *preStates;
  static bdd *postStates;

#ifdef JAMDEBUG
  static int combineCnt;
  static int extendCnt;
#endif
};

#endif
