/*
 * sentinel.cpp
 * author: Rich Joiner <joiner@cs.wisc.edu>
 * date: 8/15/2012
 *
 * This file defines XSB routines (predicates that always return TRUE)
 * that print a sentinel type (e.g. functionentry) and the provided
 * arguments. These values are used to learn new predicates by the
 * PredicateLearner class in the main JAM framework.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "cinterf.h"

#define REQ_STRINGS(n) for (int i=1; i<=n; i++) {\
  if (!is_string(reg_term(CTXTc i)))\
  {\
    return FALSE;\
  }\
} while (0)

// Proposes a refinement predicate for a function entry.
// The first argument is the function symbol contained in the path.
// The second is the actual function being entered. 
extern "C" int functionentrysentinel(CTXTdecl) {

  REQ_STRINGS(3);

  char *psymb = extern_ptoc_string(1);
  char *fsymb = extern_ptoc_string(2);
  char *sn = extern_ptoc_string(3);

  fprintf(stderr, "functionentry : %s : %s : %s\n", psymb, fsymb, sn);
  
  return TRUE;
}

extern "C" int returnsentinel(CTXTdecl) {
  REQ_STRINGS(2);

  char *rhs = extern_ptoc_string(1);
  char *sn = extern_ptoc_string(2);

  fprintf(stderr, "return : %s : %s\n", rhs, sn);

  return TRUE;
}

extern "C" int propvaluesentinel(CTXTdecl) {
  REQ_STRINGS(5);

  char *obj = extern_ptoc_string(1);
  char *prop = extern_ptoc_string(2);
  char *oval = extern_ptoc_string(3);
  char *pval = extern_ptoc_string(4);
  char *sn = extern_ptoc_string(5);

  fprintf(stderr, "propvalue : %s : %s : %s : %s : %s\n", obj, prop, oval, pval, sn);

  return TRUE;
}

extern "C" int valuesentinel(CTXTdecl) {
  REQ_STRINGS(3);

  char *lhs = extern_ptoc_string(1);
  char *rhs = extern_ptoc_string(2);
  char *sn = extern_ptoc_string(3);

  fprintf(stderr, "value : %s : %s : %s\n", lhs, rhs, sn);

  return TRUE;
}

extern "C" int conditionsentinel(CTXTdecl) {

  REQ_STRINGS(2);

  char *dat = extern_ptoc_string(1);
  char *sn = extern_ptoc_string(2);

  fprintf(stderr, "condition : %s : %s\n", dat, sn);

  return TRUE;
}

extern "C" int sentinelpred(CTXTdecl) {

  REQ_STRINGS(2);

  char *dat = extern_ptoc_string(1);
  char *sn = extern_ptoc_string(2);

  fprintf(stderr, "%s : %s\n", dat, sn);

  return TRUE;
}

extern "C" int constructorsentinel(CTXTdecl) {

  REQ_STRINGS(3);

  char *base = extern_ptoc_string(1);
  char *prot = extern_ptoc_string(2);
  char *sn = extern_ptoc_string(3);

  fprintf(stderr, "constructor : %s : %s : %s\n", base, prot, sn);

  return TRUE;
}
