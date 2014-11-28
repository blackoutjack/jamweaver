# vim: noexpandtab

BINDIR?=../bin

# Java compiler
JAVAC=javac
# Java compilation flags
JFLAGS=-g #-Xlint

# The JAM jar file
JAMJAR=$(BINDIR)/jam.jar
# The utility jar file
UTILJAR=$(BINDIR)/util.jar
WALAJAR=$(BINDIR)/wala.jar

JAVABDDVERSION=1.0b2
COMMONSVERSION=3-3.1

# Java classpath for compilation
WALAVERSION=1.3.4-SNAPSHOT
COMMONSIOVERSION=2.4
JERICHOVERSION=3.2
RHINOVERSION=1.7R3
WALACLASSPATH=../commons-io-$(COMMONSIOVERSION)/commons-io-$(COMMONSIOVERSION).jar:../wala/com.ibm.wala.cast.js/lib/jericho-html-$(JERICHOVERSION).jar:../wala/com.ibm.wala.core/target/com.ibm.wala.core-$(WALAVERSION).jar:../wala/com.ibm.wala.shrike/target/com.ibm.wala.shrike-$(WALAVERSION).jar:../wala/com.ibm.wala.cast/target/com.ibm.wala.cast-$(WALAVERSION).jar:../wala/com.ibm.wala.cast.js/target/com.ibm.wala.cast.js-$(WALAVERSION).jar:../wala/com.ibm.wala.cast.js.rhino/target/com.ibm.wala.cast.js.rhino-$(WALAVERSION).jar:../wala/com.ibm.wala.util/target/com.ibm.wala.util-$(WALAVERSION).jar:../wala/com.ibm.wala.cast.js.rhino/lib/rhino-$(RHINOVERSION).jar
JCLASSPATH=".:../closure/build/compiler.jar:../JavaBDD/javabdd-$(JAVABDDVERSION).jar:../commons-lang$(COMMONSVERSION)/commons-lang$(COMMONSVERSION).jar:../closure/lib/junit.jar:$(WALACLASSPATH):../JavaBDD/jdd.jar"
  

# Relative Java source directories
MAINDIR=edu/wisc/cs/jam
AUTDIR=edu/wisc/cs/automaton
JSDIR=$(MAINDIR)/js
ENVDIR=$(MAINDIR)/env
XSBDIR=$(MAINDIR)/xsb
BDDDIR=$(MAINDIR)/bdd
NWADIR=$(MAINDIR)/opennwa
TXDIR=$(MAINDIR)/tx
INTDIR=$(MAINDIR)/interpret
UTLDIR=$(MAINDIR)/util
WALADIR=$(MAINDIR)/wala
HTMLDIR=$(MAINDIR)/html
COMDIR=com/google/javascript/jscomp

# Java classes in the edu.wisc.cs.jam package
MAINBASE=JAM JAMAnalysis BackwardAnalysis BranchSymbol Clause CartesianAutomaton ControlAutomaton ControlStructure CounterExample DataState EvaluationAutomaton FileUtil FocusAutomaton FunctionEntrySymbol JAMConfig ExpSymbol OptionParser Options Policy PolicyLanguage PolicyPath Predicate PredicateLearner PredicateSymbol PredicateType PredicateValue ProgramModel Relation RelationDomain ReturnSymbol Semantics SourceManager Source StringUtil DataTransition SeedPredicates CleverCache RelationAutomaton Dbg DisjointAutomaton IncrementalAnalysis CheckManager RuntimeCheck Transform CallGraph Exp Language #BooleanAutomaton MultiAnalysis ForkCheckManager ForkCheck
MAINSRC=$(MAINBASE:%=$(MAINDIR)/%.java)
MAINCLS=$(MAINSRC:%.java=%.class)

# Java classes in the edu.wisc.cs.jam.js package.
JSBASE=JavaScript JSSourceManager JSSource JSSemantics JSTransform JSStatementTransform JSIndirectionTransform JSCollapseTransform JSControlStructure JSInterproceduralControlStructure JSExp JSPredicateLearner JSPolicyLanguage FunctionFacts ExpUtil TypeFacts JSCallGraph JSSyntaxAnalysis
JSSRC=$(JSBASE:%=$(JSDIR)/%.java)
JSCLS=$(JSSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.env package.
ENVBASE=NativeUtil
ENVSRC=$(ENVBASE:%=$(ENVDIR)/%.java)
ENVCLS=$(ENVSRC:.java=.class)

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

# Java classes in the edu.wisc.cs.jam.interpret package
INTBASE=SpiderMonkey
INTSRC=$(INTBASE:%=$(INTDIR)/%.java)
INTCLS=$(INTSRC:.java=.class)

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

# Java classes in the edu.wisc.cs.jam.html package
HTMLBASE=HTMLSource
HTMLSRC=$(HTMLBASE:%=$(HTMLDIR)/%.java)
HTMLCLS=$(HTMLSRC:.java=.class)

# Java utility classes
UTLBASE=Main NativeIdentifier ASTPrint BDDClient Utility
UTLSRC=$(UTLBASE:%=$(UTLDIR)/%.java)
UTLCLS=$(UTLSRC:.java=.class)

WALABASE=WalaClient
WALASRC=$(WALABASE:%=$(WALADIR)/%.java)
WALACLS=$(WALASRC:.java=.class)

.SUFFIXES: .java .class

jam: $(JAMJAR)

$(JAMJAR): $(JSCLS) $(ENVCLS) $(AUTCLS) $(XSBCLS) $(BDDCLS) $(INTCLS) $(NWACLS) $(TXCLS) $(HTMLCLS) $(COMCLS) $(MAINCLS)
	mkdir -p ../bin
	jar cfm $@ MANIFEST.MF $(MAINDIR)/*.class $(COMDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(ENVDIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class $(HTMLDIR)/*.class $(INTDIR)/*.class

util: $(UTILJAR)

wala: $(WALAJAR)

$(WALAJAR): $(JAMJAR) $(WALACLS)
	jar cfm $@ MANIFEST-WALA.MF $(WALADIR)/*.class

$(UTILJAR): $(JAMJAR) $(UTLCLS)
	jar cfm $@ MANIFEST-UTIL.MF $(UTLDIR)/*.class

utilclean:
	rm -f $(UTLDIR)/*.class $(UTILJAR)

walaclean:
	rm -f $(WALADIR)/*.class $(WALAJAR)

clean: utilclean walaclean
	rm -f $(COMDIR)/*.class $(MAINDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(TSTDIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class $(HTMLDIR)/*.class $(ENVDIR)/*.class

.java.class:
	$(JAVAC) -classpath $(JCLASSPATH) $(JFLAGS) $*.java

