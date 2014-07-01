
#include <cmath>

#include "strings.h"

#include "ShortestPathRelation.h"
#include "RelationWeightGen.h"

using namespace std;
using namespace wali;
using namespace wali::domains::binrel;

// Static variables
const BddContext *ShortestPathRelation::context;
int ShortestPathRelation::dim;
int ShortestPathRelation::varCnt;
bdd *ShortestPathRelation::preStates;
bdd *ShortestPathRelation::postStates;
#ifdef JAMDEBUG
int ShortestPathRelation::extendCnt;
int ShortestPathRelation::combineCnt;
#endif

void ShortestPathRelation::init(const BddContext *c) {
  context = c;

  varCnt = context->size();

  // Record the number of relation states.
  dim = 1 << varCnt;

  size_t statesSize = sizeof(bdd) * dim;
  preStates = (bdd*)malloc(statesSize);
  bzero(preStates, statesSize);
  postStates = (bdd*)malloc(statesSize);
  bzero(postStates, statesSize);

  // Nothing further to build if there are no relation variables.
  if (dim == 1) {
    preStates[0] = bddtrue;
    postStates[0] = bddtrue;
    return;
  }

  // Load all the BDD variables that we're interested in.
  size_t varsSize = sizeof(bdd) * varCnt;
  bdd *prevars = (bdd*)malloc(varsSize);
  bzero(prevars, varsSize);
  bdd *postvars = (bdd*)malloc(varsSize);
  bzero(postvars, varsSize);
  for (int i=0; i<varCnt; i++) {
    // %%% Might be faster if we iterate rather than find.
    char istr[32];
    sprintf(istr, "%d", i);
    bddinfo_t iinfo = context->find(istr)->second;

    bdd prevar = bdd_ithvar(iinfo->baseLhs);
    prevars[i] = prevar;

    bdd postvar = bdd_ithvar(iinfo->baseRhs);
    postvars[i] = postvar;
  }

  for (int i=0; i<dim; i++) {
    bdd prestate = bddtrue;
    bdd poststate = bddtrue;
    for (int m=0; m<varCnt; m++) {
      bdd prevar = prevars[m];
      bdd postvar = postvars[m];
      if ((i & (1 << m)) == 0) {
        prestate = prestate & bdd_not(prevar);
        poststate = poststate & bdd_not(postvar);
      } else {
        prestate = prestate & prevar;
        poststate = poststate & postvar;
      }
    }
    preStates[i] = prestate;
    postStates[i] = poststate;
  }

  free(prevars);
  free(postvars);
}

// Initialize a relation matrix with all edges having unit distance.
ShortestPathRelation::ShortestPathRelation(binrel_t relation, sem_elem_t wit) {

  // We'll be working with a square matrix with a row for each
  // pre-state, and a column for each post-state.
  matrix = new element[dim * dim];
  if (dim == 1) {
    // If we have no predicates, the single matrix value just counts
    // the transitions.
    matrix[0].first = wit;
    matrix[0].second = 1;
  } else {
    bdd b = relation->getBdd();

#ifdef JAMDEBUG
    std::cerr << "NEW SHORTESTPATHRELATION: " << b << std::endl;
#endif

    for (unsigned i=0; i<dim; i++) {
      bdd prestate = preStates[i]; 
#ifdef JAMDEBUG
      std::cerr << "PRESTATE: " << prestate << std::endl;
#endif

      for (unsigned j=0; j<dim; j++) {
        bdd poststate = postStates[j];
#ifdef JAMDEBUG
        std::cerr << "POSTSTATE: " << poststate << std::endl;
#endif

        bdd test = prestate & poststate;
        bdd isect = b & test;

#ifdef JAMDEBUG
        std::cerr << "B: " << b << std::endl;
        std::cerr << "TEST: " << test << std::endl;
        std::cerr << "ISECT: " << isect << std::endl;
#endif

        int dist;
        if (isect == test) {
          dist = 1;
        } else {
          dist = INF;
        }

        int idx = i * dim + j;
        // %%% Use raw pointer here?
        matrix[idx].first = sem_elem_t(wit);
        matrix[idx].second = dist;
      }
    }
#ifdef JAMDEBUG
    this->print(std::cerr);
#endif
  }
}

// Copy constructor
ShortestPathRelation::ShortestPathRelation(const ShortestPathRelation& other) {

  //add = other.add;
  //witnesses = other.witnesses;

  // Deep copy the matrix since it will be destroyed.
  element *m = other.getMatrix();
  matrix = new element[dim * dim];
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      matrix[idx].first = m[idx].first;
      matrix[idx].second = m[idx].second;
    }
  }
}

ShortestPathRelation& ShortestPathRelation::operator=(const ShortestPathRelation& rhs) {

  //add = rhs.add;
  //witnesses = rhs.witnesses;

  // Deep copy the matrix since it will be destroyed.
  element *m = rhs.getMatrix();
  if (matrix != NULL) {
    delete[] matrix;
  }
  matrix = new element[dim * dim];
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      matrix[idx].first = m[idx].first;
      matrix[idx].second = m[idx].second;
    }
  }

  return *this;
}

ShortestPathRelation::~ShortestPathRelation() {
  //witnesses.clear();
  delete[] matrix;
}

// Performs matrix multiplication (with ShortestPathSemiring
// operations: (x): +, (+): minimum) to determine the shortest 
// distances. The extension of the relation components is also taken,
// and the element paired with the minimum resulting distance is
// propagated.
// %%% Would be possibly simpler if we actually use
// ShortestPathSemiring elements instead of ints.
sem_elem_t ShortestPathRelation::extend(SemElem *se) {
  ShortestPathRelation *that = dynamic_cast<ShortestPathRelation*>(se);
  assert(0 != that);

  element *thatmatrix = that->getMatrix();
  element *newmatrix = new element[dim * dim];
  sem_elem_t zerowit = matrix[0].first->zero();
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int tot = INF;
      sem_elem_t finalwit = zerowit;

      for (int k=0; k<dim; k++) {
        int idx1 = i * dim + k;
        int idx2 = j + k * dim;

        int vthis = matrix[idx1].second;
        int vthat = thatmatrix[idx2].second;

        int v;
        if (vthis == INF || vthat == INF) {
          v = INF;
        } else {
          v = vthis + vthat;
        }

        if (v < tot) {
          tot = v;
          sem_elem_t thiswit = matrix[idx1].first;
          sem_elem_t thatwit = thatmatrix[idx2].first;
          finalwit = thiswit->extend(thatwit);
        }
      }
      int idx0 = i * dim + j;
      newmatrix[idx0].first = finalwit;
      newmatrix[idx0].second = tot;
    }
  }

  ShortestPathRelation *ret = new ShortestPathRelation(newmatrix);

#ifdef JAMDEBUG
  std::cerr << "EXTEND" << std::endl;
  this->print(std::cerr);
  std::cerr << "x" << std::endl;
  that->print(std::cerr);
  std::cerr << "==" << std::endl;
  ret->print(std::cerr);

  ++extendCnt;
#endif

  return ret;
}

// Performs a pointwise minimum to create the resulting matrix.
// SemElems that are paired with the minimum distance are propagated.
sem_elem_t ShortestPathRelation::combine(SemElem *se) {
  ShortestPathRelation *that = dynamic_cast<ShortestPathRelation*>(se);
  assert(0 != that);

  element *thatmatrix = that->getMatrix();
  element *newmatrix = new element[dim * dim];
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      int vthis = matrix[idx].second;
      int vthat = thatmatrix[idx].second;

      if (vthat < vthis) {
        newmatrix[idx].first = thatmatrix[idx].first;
        newmatrix[idx].second = vthat;
      } else {
        newmatrix[idx].first = matrix[idx].first;
        newmatrix[idx].second = vthis;
      }
    }
  }

  ShortestPathRelation *ret = new ShortestPathRelation(newmatrix);

#ifdef JAMDEBUG
  ++combineCnt;
#endif
  return ret;
}

// Prints only the distances in a multiline matrix form.
// %%% Columns aren't necessarily aligned.
ostream& ShortestPathRelation::print(ostream &o) const {
  
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      o << matrix[i*dim+j].second;
      o << " ";
    }
    o << endl;
  }
  return o;
}

// The one matrix is a diagonal matrix with distance 1 paired with
// the one SemElem on the diagonal.
sem_elem_t ShortestPathRelation::one() const {
  static sem_elem_t o = makeOne();
  return o;
}

// The zero matrix has all infinite distances paired with the zero
// SemElem.
sem_elem_t ShortestPathRelation::zero() const {
  static sem_elem_t z = makeZero();
  return z;
}

// Checks whether the matrices of the two ShortestPathRelation semiring
// elements contain all the same corresponding elements. The equal
// method of the sem_elem_t component is invoked to determine equality.
bool ShortestPathRelation::equal(SemElem *se) const {
  ShortestPathRelation *that = dynamic_cast<ShortestPathRelation*>(se);
  if (0 == that) return false;

  element *thatmatrix = that->getMatrix();

  bool same = true;
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      if (matrix[idx].second != thatmatrix[idx].second) {
        same = false;
        break;
      }
      /*
      // %%% Don't compare witnesses?
      if (!matrix[idx].first->equal(thatmatrix[idx].first)) {
        same = false;
        break;
      }
      */
    }
    if (!same) break;
  }

  return same;
}

sem_elem_t ShortestPathRelation::getWitness() {

  sem_elem_t shortwit;
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      int dist = matrix[idx].second;
      if (dist < INF) {
        return matrix[idx].first;
      }
    }
  }

  assert(false && "No path to final state found");
}

// Find the shortest path from an initial to a final state,
// and return the corresponding witness.
sem_elem_t ShortestPathRelation::getShortestWitness() {
  //std::cerr << "SHORTEST PATH CANDIDATES: " << std::endl;
  //this->print(std::cerr);
  
  int shortdist = INF;
  sem_elem_t shortwit;
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      int dist = matrix[idx].second;
      if (dist < shortdist) {
        shortdist = dist;
        shortwit = matrix[idx].first;
        //cerr << "shortdist: " << shortdist << endl;
      }
    }
  }

  assert(shortdist != INF && "No path to final state found");

  return shortwit;
}

// Find the shortest path from an initial to a final state, and
// return the corresponding witness.
// The idx parameter allows for returning the idx'th shortest path.
/*
sem_elem_t ShortestPathRelation::getShortestWitness(int idx) {
  // %%%% ADD
  size_t s = sizeof(element*) * (idx + 1);
  element** shortwits = (element**)malloc(s);
  bzero(shortwits, s);

  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int midx = i * dim + j;
      int dist = matrix[midx].second;
      for (int k=0; k<=idx; k++) {
        int shortdist = shortwits[k] == NULL ? INF : shortwits[k]->second;
        if (dist < shortdist) {
          // Shift the already-collected elements.
          for (int l=idx-1; l>=k; l--) {
            shortwits[l+1] = shortwits[l];
          }
          shortwits[k] = &matrix[midx];
          break;
        }
      }
    }
  }

  // This may be NULL if there are not idx different witnesses.
  element* shortwit = shortwits[idx];
  if (shortwit == NULL) return NULL;
  return shortwit->first;
}
*/

// Protected methods

ShortestPathRelation *ShortestPathRelation::makeZero() const {

  sem_elem_t zero = matrix[0].first->zero();
  element *newmatrix = new element[dim * dim];
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      newmatrix[idx].first = zero;
      newmatrix[idx].second = INF;
    }
  }

  ShortestPathRelation *ret = new ShortestPathRelation(newmatrix);

  return ret;
}

ShortestPathRelation *ShortestPathRelation::makeOne() const {

  sem_elem_t zerowit = matrix[0].first->zero();
  sem_elem_t onewit = matrix[0].first->one();
  element *m = new element[dim * dim];
  for (int i=0; i<dim; i++) {
    for (int j=0; j<dim; j++) {
      int idx = i * dim + j;
      if (i == j) {
        m[idx].first = onewit;
        m[idx].second = 1;
      } else {
        m[idx].first = zerowit;
        m[idx].second = INF;
      }
    }
  }

  ShortestPathRelation *ret = new ShortestPathRelation(matrix);

  return ret;
}

// Create a new ShortestPathRelation from a generated matrix.
ShortestPathRelation::ShortestPathRelation(element* m) {
  // We take the matrix directly, as opposed to copying, to save time.
  // This is managable since this constructor is protected.
  matrix = m;
}
/*
ShortestPathRelation::ShortestPathRelation(bdd a, map<int,sem_elem_t> wits) {
  add = a;
  witnesses = wits;
}
*/

// Access the stored matrix.
ShortestPathRelation::element *ShortestPathRelation::getMatrix() const {
  return this->matrix;
}

