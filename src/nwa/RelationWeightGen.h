
#ifndef JAM_NWA_RELATIONWEIGHTGEN_H
#define JAM_NWA_RELATIONWEIGHTGEB_H

#include "opennwa/WeightGen.hpp"
#include "opennwa/ClientInfo.hpp"
#include "wali/SemElem.hpp"
#include "wali/domains/binrel/BinRel.hpp"

class RelationWeightGen : public opennwa::ShortestWordGen {

private:

  wali::domains::binrel::BddContext *context;
  wali::sem_elem_t one;
  wali::sem_elem_t zero;
  //wali::domains::binrel::binrel_t id;
  int varcount;
  const std::map<wali::Key,int> *symbolRelationMap;
  std::map<int,sem_elem_t> *relations;
  //std::map<std::string,std::string> *varTranslate;

protected:

  //bdd parseBdd(std::string bddInfo) const;

  //wali::sem_elem_t parseBinRel(std::string relInfo) const;

  //wali::sem_elem_t RelationWeightGen::getRelation();
  
  void loadRelations(const std::string &rels, const std::vector< std::pair<size_t,size_t> > &toks);
  void loadContext(const std::string &rels, const std::vector< std::pair<size_t,size_t> > &toks);

public:

  RelationWeightGen(const std::map<wali::Key,int> *symRels, const std::string &rels);

  ~RelationWeightGen();

  wali::sem_elem_t getZero() const;

  wali::sem_elem_t getOne() const;

  wali::sem_elem_t getWeight(wali::Key src, opennwa::ClientInfoRefPtr srcInfo, wali::Key sym, Kind kind, wali::Key tgt, opennwa::ClientInfoRefPtr tgtInfo) const;

  wali::domains::binrel::BddContext *getContext();
};



#endif
