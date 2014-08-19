# vim: noexpandtab

BINDIR?=../bin

# Java compiler
JAVAC=javac
# Java compilation flags
JFLAGS=-g# -Xlint

JAVABDDVERSION=1.0b2
COMMONSVERSION=3-3.1

# Java classpath for compilation
JCLASSPATH=-classpath ".:../closure/build/compiler.jar:../JavaBDD/javabdd-$(JAVABDDVERSION).jar:../commons-lang$(COMMONSVERSION)/commons-lang$(COMMONSVERSION).jar" #:../closure/lib/junit.jar:../wala2.jar"

# Relative Java source directories
MAINDIR=edu/wisc/cs/jam
AUTDIR=edu/wisc/cs/automaton
JSDIR=$(MAINDIR)/js
XSBDIR=$(MAINDIR)/xsb
BDDDIR=$(MAINDIR)/bdd
NWADIR=$(MAINDIR)/opennwa
TXDIR=$(MAINDIR)/tx
UTLDIR=$(MAINDIR)/util
COMDIR=com/google/javascript/jscomp

# Java classes in the edu.wisc.cs.jam package
MAINBASE=JAM JAMAnalysis BackwardAnalysis BranchSymbol Clause CartesianAutomaton ControlAutomaton ControlStructure CounterExample DataState EvaluationAutomaton FileUtil FocusAutomaton FunctionEntrySymbol JAMConfig ExpSymbol OptionParser Options Policy PolicyPath Predicate PredicateValue PredicateLearner PredicateSymbol ProgramModel Relation RelationDomain ReturnSymbol Semantics SourceFile DataTransition SeedPredicates CleverCache RelationAutomaton Dbg DisjointAutomaton IncrementalAnalysis CheckManager RuntimeCheck Transform Tree SyntaxTree Exp PolicyLanguage Language #BooleanAutomaton MultiAnalysis ForkCheckManager ForkCheck
MAINSRC=$(MAINBASE:%=$(MAINDIR)/%.java)
MAINCLS=$(MAINSRC:%.java=%.class)

# Java classes in the edu.wisc.cs.jam.js package.
JSBASE=JavaScript JSFile JSSemantics JSTransform JSStatementTransform JSIndirectionTransform JSCollapseTransform JSControlStructure JSInterproceduralControlStructure JSExp JSPredicateLearner JSPolicyLanguage FunctionFacts NodeUtil TypeFacts
JSSRC=$(JSBASE:%=$(JSDIR)/%.java)
JSCLS=$(JSSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.xsb package.
XSBBASE=XSBInterface XSBSingleInterface XSBMultiInterface XSBProcess QueryCache
XSBSRC=$(XSBBASE:%=$(XSBDIR)/%.java)
XSBCLS=$(XSBSRC:.java=.class)

# Java classes in the edu.wisc.cs.automaton package
AUTBASE=Automaton ComboState ComboSymbol State Symbol
AUTSRC=$(AUTBASE:%=$(AUTDIR)/%.java)
AUTCLS=$(AUTSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.bdd package
BDDBASE=BDDRelation BDDRelationDomain
BDDSRC=$(BDDBASE:%=$(BDDDIR)/%.java)
BDDCLS=$(BDDSRC:.java=.class)

# Java classes in the com.google.javascript.jscomp package
COMBASE=JAMControlFlowGraph JAMPassConfig ClosureUtil
COMSRC=$(COMBASE:%=$(COMDIR)/%.java)
COMCLS=$(COMSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.opennwa package
NWABASE=OpenNWAInterface OpenNWALibrary OpenNWAProcess
NWASRC=$(NWABASE:%=$(NWADIR)/%.java)
NWACLS=$(NWASRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.tx package
TXBASE=Evaluator EvaluatorNode Introspector PolicyTransition Transaction TransactionCheck TxManager TxUtil
TXSRC=$(TXBASE:%=$(TXDIR)/%.java)
TXCLS=$(TXSRC:.java=.class)

# Java utility classes
UTLBASE=Main NativeIdentifier ASTPrint BDDClient Utility
#WalaClient 
UTLSRC=$(UTLBASE:%=$(UTLDIR)/%.java)
UTLCLS=$(UTLSRC:.java=.class)

# The JAM jar file
JAMJAR=$(BINDIR)/jam.jar
UTILJAR=$(BINDIR)/util.jar

.SUFFIXES: .java .class

jar: $(JAMJAR)

$(JAMJAR): $(JSCLS) $(AUTCLS) $(XSBCLS) $(BDDCLS) $(NWACLS) $(TXCLS) $(COMCLS) $(MAINCLS)
	mkdir -p ../bin
	jar cfm $@ MANIFEST.MF $(MAINDIR)/*.class $(COMDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class

jamutil: $(UTILJAR)

$(UTILJAR): $(JAMJAR) $(UTLCLS)
	jar cfm $@ MANIFEST-UTIL.MF $(UTLDIR)/*.class

clean:
	rm -f $(COMDIR)/*.class $(MAINDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(TSTDIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class

.java.class:
	$(JAVAC) $(JCLASSPATH) $(JFLAGS) $*.java

