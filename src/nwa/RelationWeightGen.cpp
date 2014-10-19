#include <cmath>

#include "wali/witness/Witness.hpp"
#include "RelationWeightGen.h"
#include "util.h"

using namespace std;
using namespace opennwa;
using namespace wali;
using namespace wali::domains::binrel;


RelationWeightGen::RelationWeightGen(const map<Key,int> *symRels, const string &rels) {
  symbolRelationMap = symRels;

  vector< pair<size_t,size_t> > toks;
  tokenize(rels, "@", &toks);

  loadContext(rels, toks);
  //loadIdRelation();
  loadRelations(rels, toks);
}

RelationWeightGen::~RelationWeightGen() {
  delete relations;
  delete context;
  //delete varTranslate;
}

BddContext *RelationWeightGen::getContext() {
  return context;
}

/*
void RelationWeightGen::loadIdRelation() {
  //BinRel *br = new BinRel(context, bddtrue);
  //zero = br->zero();
  //one = br->one();

  // Create the id relation.
  id = binrel_t(br);
  for (int i=0; i<varcnt; i++) {
    sprintf(buf, "%d", i);
    bddinfo_t info = context->find(buf)->second;
    BinRel *edge = new BinRel(context, bdd_biimp(fdd_ithvar(info->baseLhs, 0), fdd_ithvar(info->baseRhs, 0)));
    id = id->Intersect(edge);
  }
  //id->print(cerr);
}
*/

// Output garbage collection information to stderr rather than stdout.
void bddGbcStderr(int pre, bddGbcStat *s) {
  if (pre) {
    fprintf(stderr, "Garbage collection #%d", s->num);
  } else {
    fprintf(stderr, ": %d nodes / %d free",
      s->nodes, s->freenodes);
    fprintf(stderr, " / %.1fs / %.1fs total\n",
      (float)s->time/(float)(CLOCKS_PER_SEC),
      (float)s->sumtime/(float)CLOCKS_PER_SEC);
  }
}


void RelationWeightGen::loadContext(const string &rels, const vector< pair<size_t,size_t> > &toks) {

  varcount = 0;

  int toksSize = toks.size();
  // Skip the first token, which is just the prefix/header.
  for (int i=1; i<toksSize; i++) {
    string tok = rels.substr(toks[i].first, toks[i].second);

    size_t lnIdx = tok.find("\n");
    string idStr = tok.substr(0, lnIdx);
    int relId = atoi(idStr.c_str());
    
    string relStr = tok.substr(lnIdx + 1);
    //cerr << "relId: " << relId << "\n" << relStr << endl;

    // Unable to glean the variable count for these. If there are only
    // the 1 and 0 relations, we don't have (or need) any variables.
    if (relId == 1 || relId == 0) continue;
      
    vector< pair<size_t,size_t> > subtoks;
    tokenize(relStr, "\n", &subtoks);

    string subtok;
    for (int j=0; j<subtoks.size(); j++) {
      subtok = relStr.substr(subtoks[0].first, subtoks[0].second);
      // Allow blank lines and comments.
      if (subtok.size() == 0 || subtok[0] == '#') continue;
      // Otherwise we have our info.
      break;
    }

    //cerr << "subtok: " << subtok << "~" << endl;
    vector< pair<size_t,size_t> > numtoks;
    tokenize(subtok, " ", &numtoks);

    // This line is of the following form: 
    // #nodes #vars
    assert(numtoks.size() == 2);
    string vtok = subtok.substr(numtoks[1].first, numtoks[1].second);
    //cerr << "vtok: " << vtok << "~" << endl;
    int v = atoi(vtok.c_str());

    // The BDD representation lists total number of variables, whereas
    // we want BinRel to create half that many relation variables, since
    // each will have a pre- and post-state form.
    varcount = v / 2;
#ifdef JAMDEBUG
    cerr << "RELATION SIZE: " << varcount << endl;
    break;
#endif
  }

  // Heuristic BDD node table and cache sizes
  int m2 = (varcount + 1) * (log(varcount + 2)) * 300000;
  // Cap the node table here.
  int m1 = 1024 * 1024 * 20;
  int memsize = min(m1, m2);
  // Cache half the nodes seems pretty good.
  int cachesize = memsize / 2;

#ifdef JAMDEBUG
  cerr << "BDD memory size: " << memsize << endl;
  cerr << "BDD cache size: " << cachesize << endl;
#endif

  context = new BddContext(memsize, cachesize);

  // Set up the bdd context with the prescribed number of vars.
  //varTranslate = new map<string,string>();
  char buf[32];
  for (int i=0; i<varcount; i++) {
    sprintf(buf, "%d", i);
    context->addBoolVar(buf);
  }

  bdd_gbc_hook(bddGbcStderr);
}

void RelationWeightGen::loadRelations(const string &rels, const vector< pair<size_t,size_t> > &toks) {

  relations = new map<int,sem_elem_t>();
  
  int toksSize = toks.size();
  // Skip the first token, which is just the prefix/header.
  for (int i=1; i<toksSize; i++) {
    string tok = rels.substr(toks[i].first, toks[i].second);

    size_t lnIdx = tok.find("\n");
    string idStr = tok.substr(0, lnIdx);
    int relId = atoi(idStr.c_str());
    
    string relStr = tok.substr(lnIdx + 1);
    //cerr << "relId: " << relId << "\n" << relStr << endl;

    //sem_elem_t se;
    BinRel *rel;
    if (relId == 1) {
      rel = new BinRel(context, bddtrue);
      /*
      binrel_t br(new BinRel(context, bddtrue));
      //se = br.one();
      sem_elem_t wit = witness::witness_t(new witness::Witness(br->one()));
      se = sem_elem_t(new ShortestPathRelation(br, wit));
      */
    } else if (relId == 0) {
      rel = new BinRel(context, bddfalse);
      //BinRel br(context, bddtrue);
      //se = br.zero();
    } else {
      char buf[32];
      /* %%% Debug
      sprintf(buf, "/tmp/bddorig-%d", i);
      ofstream bddorig(buf);
      bddorig << relStr;
      bddorig.close();
      */

      sprintf(buf, "/tmp/bddin-%d", i);

      ofstream bddin(buf);
      
      vector< pair<size_t,size_t> > subtoks;
      tokenize(relStr, "\n", &subtoks);

      int v = 0;
      for (int j=0; j<subtoks.size(); j++) {
        string subtok = relStr.substr(subtoks[j].first, subtoks[j].second);
        // Allow blank lines and comments.
        if (subtok.size() == 0 || subtok[0] == '#') continue;
        //cerr << "subtok: " << subtok << "~" << endl;
        vector< pair<size_t,size_t> > numtoks;
        tokenize(subtok, " ", &numtoks);
        if (j == 0) {
          // This line is of the following form: 
          // #nodes #vars
          assert(numtoks.size() == 2);
          string ntok = subtok.substr(numtoks[0].first, numtoks[0].second);
          //cerr << "ntok: " << ntok << "~" << endl;
          string vtok = subtok.substr(numtoks[1].first, numtoks[1].second);
          //cerr << "vtok: " << vtok << "~" << endl;
          v = atoi(vtok.c_str());
          v = (v / 2) * 9;
          bddin << ntok << " " << v << endl;
        } else if (j == 1) {
          // The second line (j == 1) displays the variable ordering.
          for (int k=0; k<v; k++) {
            bddin << k << " ";
          }
          bddin << endl;
        } else {
          // The rest of the lines display one bdd node each.
          for (int k=0; k<numtoks.size(); k++) {
            string strval = subtok.substr(numtoks[k].first, numtoks[k].second);
            //cerr << "strval: " << strval << "~" << endl;
            int origval = atoi(strval.c_str());
            //cerr << "origval: " << origval << "~" << endl;
            int base = origval / 2;
            //cerr << "base: " << base << "~" << endl;
            int post = origval % 2;
            //cerr << "post: " << post << "~" << endl;
            int val = base * 9 + post;
            //cerr << "val: " << val << "~" << endl;
            bddin << val << " ";
          }
          bddin << endl;
        }
      }

      bddin.close();

      bdd b;
      bdd_fnload(buf, b);

      rel = new BinRel(context, b);
      //sem_elem_t wit = witness::witness_t(new witness::Witness(br->one()));
      //se = sem_elem_t(new ShortestPathRelation(br, wit));

      /*
      sprintf(buf, "/tmp/bddout-%d", i);
      bdd_fnsave(buf, b); 
      */
    }

    pair<int,sem_elem_t> entry;
    entry.first = relId;
    entry.second = binrel_t(rel);
    relations->insert(entry);
  }
}

/*
sem_elem_t RelationWeightGen::getZero() const {
  static const binrel_t br = binrel_t(new BinRel(context, bddfalse));
  static const sem_elem_t wit = witness::witness_t(new witness::Witness(br->one()));
  static const ShortestPathRelation *spr = new ShortestPathRelation(br, wit);
  return spr->zero();
}
*/

sem_elem_t RelationWeightGen::getZero() const {
  static const binrel_t br = binrel_t(new BinRel(context, bddfalse));
  return br;
}

/*
sem_elem_t RelationWeightGen::getOne() const {
  static const binrel_t br = binrel_t(new BinRel(context, bddtrue));
  static const sem_elem_t wit = witness::witness_t(new witness::Witness(br->one()));
  static const ShortestPathRelation spr(br, wit);
  return spr.one();
}
*/

sem_elem_t RelationWeightGen::getOne() const {
  static bdd b = bddtrue;
  if (b == bddtrue) {
    for (int i=0; i<varcount; i++) {
      char buf[32];
      sprintf(buf, "%d", i);
      bddinfo_t info = context->find(buf)->second;
      b = b & bdd_biimp(fdd_ithvar(info->baseLhs, 1), fdd_ithvar(info->baseRhs, 1));
    }
  }
  
  static const binrel_t br = binrel_t(new BinRel(context, b));

  return br;
}

sem_elem_t RelationWeightGen::getWeight(Key src, ClientInfoRefPtr srcInfo, Key sym, Kind kind, Key tgt, ClientInfoRefPtr tgtInfo) const {
  // %%% Kludge for zero variable case
  if (varcount == 0) return getOne();

  //cerr << "SYMKEY: " << sym << " SYM: " << key2str(sym);

  map<Key,int>::const_iterator it = symbolRelationMap->find(sym);
  assert (it != symbolRelationMap->end());

  int relId = it->second;
  //cerr << "RELID: " << relId << endl;

  map<int,sem_elem_t>::const_iterator rit = relations->find(relId);
  assert (rit != relations->end());

  //rit->second->print(cerr);

  return rit->second;
}

/*
sem_elem_t RelationWeightGen::parseHexBinRel() {
  int hexlen = hexrel.size();
  int charidx = 0;
  int bitidx = 0;
  char hexdig[2];
  hexdig[0] = hexrel[0];
  hexdig[1] = '\0';

  binrel_t br(new BinRel(context, bddfalse));

  bool done = false;
  for (int i=0; i<varcount && !done; i++) {
    for (int j=0; j<varcount; j++) {
      // Check if we need to progress to the next hex digit.
      if (bitidx == 4) {
        charidx++;

        // Trailing zeros are omitted, so we might be able to cut out
        // early.
        if (charidx >= hexlen) {
          done = true;
          break;
        }

        bitidx = 0;
        hexdig[0] = hexrel[charidx];
      }

      int decdig = (int)strtoul(hexdig, NULL, 16);

      int mask = 1 << (3 - bitidx);
      if ((mask & decdig) != 0) {
        //cerr << "HEXDIG: " << hexdig << " DECDIG: " << decdig << " MASK: " << mask << " i: " << i << " j: " << j << endl;
        bddinfo_t info = context.find("0")->second;
        BinRel *brel = new BinRel(context, fdd_ithvar(info->baseLhs, i) & fdd_ithvar(info->baseRhs, j));
        br = br->Union(brel);
      }

      bitidx++;
    }
  }

  return br;
}
*/

/*
bdd RelationWeightGen::parseBdd(string bddInfo) const {
  //cerr << "rel: " << bddInfo << endl;
  vector<pair<size_t, size_t> > toks;
  tokenize(bddInfo, toks, "<");

  bdd rel = bdd_false();

  int toksSize = toks.size();
  for (int i=0; i<toksSize; i++) {
    bdd branch = bdd_true();

    string tok = bddInfo.substr(toks[i].first, toks[i].second);
    int last = tok.size() - 1;
    if (tok[last] == ',')
      tok = tok.substr(0, last--);
    if (tok[last] == '>')
      tok = tok.substr(0, last--);
    //cerr << "tok: " << tok << endl;
    
    vector<string> parts;
    tokenize(tok, parts, " ,");
    int partsSize = parts.size();
    for (int j=0; j<partsSize; j++) {
      string part = parts[j];
      vector<string> subs;
      tokenize(part, subs, ":");
      int subSize = subs.size();
      assert(subSize == 2);
      string varId = subs[0];
      string valId = subs[1];

      // A trailing apostrophe indicates a post-state.
      bool isPost = varId.at(varId.size() - 1) == '\'';
      if (isPost) {
        varId = varId.substr(0, varId.size() - 1);
      }

      int varorig = atoi(varId.c_str()); 
      int val = atoi(valId.c_str());

      map<string,string>::iterator varTransIter = varTranslate->find(varId);
      if (varTransIter == varTranslate->end()) {
        int nextVar = 0;
        map<string,string>::reverse_iterator nextIter = varTranslate->rbegin();
        if (nextIter != varTranslate->rend()) {
          nextVar = atoi(nextIter->second.c_str()) + 1;
        }
        char varbuf[32];
        sprintf(varbuf, "%d", nextVar);
        (*varTranslate)[varId] = varbuf;
        nextVar++;
        varTransIter = varTranslate->find(varId);
      }
      string varTrans = varTransIter->second;
      //cerr << "varId: " << varId << " varTrans: " << varTrans << endl;

      bddinfo_t info = context.find(varTrans.c_str())->second;
      
      bdd varBdd;
      //cerr << "vartest: " << vartest << endl;
      if (isPost) {
        //cerr << "pre" << endl;
        varBdd = fdd_ithvar(info->baseRhs, val);
      } else {
        //cerr << "post" << endl;
        varBdd = fdd_ithvar(info->baseLhs, val);
      }
       
      //if (val == "0") 
      //  varBdd = bdd_not(varBdd);
      branch = branch & varBdd;
    }
    rel = rel | branch;
  }
  
  return rel;
}
*/

/*
sem_elem_t RelationWeightGen::parseBinRel(string relInfo) const {
  if (relInfo == "1") return getOne();
  if (relInfo == "0") return getZero();
  bdd rel = bdd_false();
  if (relInfo.substr(0, 2) == "id") {
    rel = id->getBdd();

    if (relInfo.size() > 2) {
      // We have deltas to apply.
      size_t minusIdx = relInfo.find('-');
      size_t plusIdx = relInfo.find('+');
      //cerr << "minusIdx: " << minusIdx << " plusIdx: " << plusIdx << endl;

      if (minusIdx != string::npos) {
        size_t minusEnd = plusIdx == string::npos ? string::npos : plusIdx - minusIdx - 1;
        bdd minusBdd = parseBdd(relInfo.substr(minusIdx + 1, minusEnd));
        rel = rel & !minusBdd;
      }

      if (plusIdx != string::npos) {
        bdd plusBdd = parseBdd(relInfo.substr(plusIdx + 1));
        rel = rel | plusBdd;
      }
    }
  } else {
    rel = parseBdd(relInfo);
  }

  return binrel_t(new BinRel(context, rel));
}
*/
