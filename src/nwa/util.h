#ifndef JAM_NWA_UTIL_H
#define JAM_NWA_UTIL_H

#include <string>
#include <limits>
#include <vector>
#include <map>
#include <iostream>
#include <fstream>
#include <sstream>
#include <sys/resource.h>
#include <utility>

#include "opennwa/Nwa.hpp"
#include "wali/Key.hpp"
#include "opennwa/query/language.hpp"

void limitMemory(unsigned long limit);
void printStatus(const std::string title);
void printBddStats();
void recordStart(double *t, long *m);
void printFinish(const std::string &title, double *t, long *m);
void tokenize(const std::string &input, const std::string &delims, std::vector<std::string> *tokens);
void tokenize(const std::string &input, const std::string &delims, std::vector< std::pair<size_t,size_t> > *tokens);
void stdinToString(std::string *out);
void fileToString(std::ifstream *fl, std::string *out);
void automatonToDotFile(const opennwa::Nwa &aut, const std::string &filename, const std::string &title);
void automatonToFile(const opennwa::Nwa &aut, const std::string &filename);
void automatonToDot(const opennwa::Nwa &aut, const std::string &filename);
opennwa::Nwa *parseAutomaton(const std::string &input, std::map<wali::Key,int> *relationMap);
void printNestedWord(const opennwa::NestedWord &nw);

#endif
