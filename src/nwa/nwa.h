#ifndef JAM_NWA_H
#define JAM_NWA_H

#include "opennwa/Nwa.hpp"

wali::ref_ptr<opennwa::NestedWord> findAcceptedWord(const opennwa::Nwa &nwa, const std::map<wali::Key,int> &symbolRelationMap, const std::string &relations, bool shortest=true);

#endif
