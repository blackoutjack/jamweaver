# vim: noexpandtab

BINDIR?=../bin

# Java compiler
JAVAC=javac
# Java compilation flags
JFLAGS=-g #-Xlint

# Jar file to run JAM as a process
JAMPROCJAR=$(BINDIR)/jam.jar
# Jar file to run JAM as a service
JAMSVCJAR=$(BINDIR)/jamsvc.jar
# Common JAM jar
JAMCOMMONJAR=$(BINDIR)/jamcommon.jar

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
JCLASSPATH=".:../closure/build/compiler.jar:../JavaBDD/javabdd-$(JAVABDDVERSION).jar:../httpcomponents-core-4.4/lib/httpcore-4.4.jar:../commons-lang$(COMMONSVERSION)/commons-lang$(COMMONSVERSION).jar:../closure/lib/junit.jar:$(WALACLASSPATH):../JavaBDD/jdd.jar:../idlgen/antlr-4.4-complete.jar:../idlgen/geckoidl.jar:../idlgen/webkitidl.jar:../idlgen/webidl.jar"
  

# Relative Java source directories
MAINDIR=edu/wisc/cs/jam
PROCDIR=$(MAINDIR)/proc
SVCDIR=$(MAINDIR)/svc
COMMONDIR=$(MAINDIR)
AUTDIR=edu/wisc/cs/automaton
JSDIR=$(MAINDIR)/js
ENVDIR=$(MAINDIR)/env
WEBKITDIR=$(ENVDIR)/webkit
GECKODIR=$(ENVDIR)/gecko
XSBDIR=$(MAINDIR)/xsb
BDDDIR=$(MAINDIR)/bdd
NWADIR=$(MAINDIR)/opennwa
TXDIR=$(MAINDIR)/tx
INTDIR=$(MAINDIR)/interpret
UTLDIR=$(MAINDIR)/util
WALADIR=$(MAINDIR)/wala
HTMLDIR=$(MAINDIR)/html
FORKDIR=$(MAINDIR)/forkcheck
CLOSUREDIR=com/google/javascript/jscomp

# Class that runs JAM as a once-off process
PROCBASE=JAMProcess
PROCSRC=$(PROCBASE:%=$(PROCDIR)/%.java)
PROCCLS=$(PROCSRC:%.java=%.class)

# Class that runs JAM as a service
SVCBASE=JAMService JAMStdinService JAMSocketService
SVCSRC=$(SVCBASE:%=$(SVCDIR)/%.java)
SVCCLS=$(SVCSRC:%.java=%.class)

# Common JAM classes in the edu.wisc.cs.jam package
COMMONBASE=JAM JAMAnalysis BackwardAnalysis BranchSymbol Clause CartesianAutomaton ControlAutomaton ControlStructure CounterExample DataState EvaluationAutomaton FatalJAMException FileUtil FocusAutomaton FunctionEntrySymbol JAMOpts JAMConfig ExpSymbol OptionParser Options Policy PolicyLanguage PolicyPath Predicate PredicateLearner PredicateSymbol PredicateType PredicateValue ProgramModel Relation RelationDomain ReturnSymbol Semantics SourceManager Source StringUtil DataTransition SeedPredicates CleverCache RelationAutomaton Dbg DisjointAutomaton IncrementalAnalysis CheckManager RuntimeCheck Scope Transform Traversal CallGraph Exp Language #BooleanAutomaton MultiAnalysis
COMMONSRC=$(COMMONBASE:%=$(COMMONDIR)/%.java)
COMMONCLS=$(COMMONSRC:%.java=%.class)

# Java classes in the edu.wisc.cs.jam.js package.
JSBASE=JavaScript JSSourceManager JSSource JSSemantics JSTransform JSStatementTransform JSIndirectionTransform JSCollapseTransform JSControlStructure JSInterproceduralControlStructure JSExp JSPredicateLearner JSPolicyLanguage FunctionFacts ExpUtil TypeFacts JSCallGraph JSSyntaxAnalysis
JSSRC=$(JSBASE:%=$(JSDIR)/%.java)
JSCLS=$(JSSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.env package.
ENVBASE=NativeUtil Prototype Method Field Const Param
ENVSRC=$(ENVBASE:%=$(ENVDIR)/%.java)
ENVCLS=$(ENVSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.env package.
WEBKITBASE=WebkitPrototype
WEBKITSRC=$(WEBKITBASE:%=$(WEBKITDIR)/%.java)
WEBKITCLS=$(WEBKITSRC:.java=.class)

# Java classes in the edu.wisc.cs.jam.env package.
GECKOBASE=GeckoPrototype GeckoMethod
GECKOSRC=$(GECKOBASE:%=$(GECKODIR)/%.java)
GECKOCLS=$(GECKOSRC:.java=.class)

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
CLOSUREBASE=JAMControlFlowGraph JAMPassConfig ClosureUtil
CLOSURESRC=$(CLOSUREBASE:%=$(CLOSUREDIR)/%.java)
CLOSURECLS=$(CLOSURESRC:.java=.class)

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

# Java classes in the edu.wisc.cs.jam.html package
FORKBASE=ForkCheckManager ForkCheck
FORKSRC=$(FORKBASE:%=$(FORKDIR)/%.java)
FORKCLS=$(FORKSRC:.java=.class)

# Java utility classes
UTLBASE=Main WebkitGenerator GeckoGenerator NativeGenerator NativeIdentifier ASTPrint BDDClient Utility
UTLSRC=$(UTLBASE:%=$(UTLDIR)/%.java)
UTLCLS=$(UTLSRC:.java=.class)

WALABASE=WalaClient
WALASRC=$(WALABASE:%=$(WALADIR)/%.java)
WALACLS=$(WALASRC:.java=.class)

.SUFFIXES: .java .class

jam: $(JAMCOMMONJAR) $(JAMPROCJAR) $(JAMSVCJAR)

$(JAMPROCJAR): $(PROCCLS)
	mkdir -p ../bin
	jar cfm $@ MANIFEST-PROC.MF $(PROCDIR)/*.class

$(JAMSVCJAR): $(SVCCLS)
	mkdir -p ../bin
	jar cfm $@ MANIFEST-SVC.MF $(SVCDIR)/*.class

$(JAMCOMMONJAR): $(COMMONCLS) $(JSCLS) $(ENVCLS) $(AUTCLS) $(XSBCLS) $(BDDCLS) $(INTCLS) $(NWACLS) $(TXCLS) $(HTMLCLS) $(FORKCLS) $(COMCLS)
	mkdir -p ../bin
	jar cfm $@ MANIFEST-COMMON.MF $(COMMONDIR)/*.class $(CLOSUREDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(ENVDIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class $(HTMLDIR)/*.class $(FORKDIR)/*.class $(INTDIR)/*.class

util: $(UTILJAR)

wala: $(WALAJAR)

$(WALAJAR): $(JAMCOMMONJAR) $(WALACLS)
	jar cfm $@ MANIFEST-WALA.MF $(WALADIR)/*.class

$(UTILJAR): $(JAMCOMMONJAR) $(UTLCLS) $(WEBKITCLS) $(GECKOCLS)
	jar cfm $@ MANIFEST-UTIL.MF $(UTLDIR)/*.class $(WEBKITDIR)/*.class $(GECKODIR)/*.class

utilclean:
	rm -f $(UTLDIR)/*.class $(WEBKITDIR)/*.class $(GECKODIR)/*.class $(UTILJAR)

walaclean:
	rm -f $(WALADIR)/*.class $(WALAJAR)

clean: utilclean walaclean
	rm -f $(CLOSUREDIR)/*.class $(PROCDIR)/*.class $(SVCDIR)/*.class $(COMMONDIR)/*.class $(AUTDIR)/*.class $(BDDDIR)/*.class $(NWADIR)/*.class $(TSTDIR)/*.class $(TXDIR)/*.class $(JSDIR)/*.class $(XSBDIR)/*.class $(HTMLDIR)/*.class $(FORKDIR)/*.class $(ENVDIR)/*.class

.java.class:
	$(JAVAC) -classpath $(JCLASSPATH) $(JFLAGS) $*.java

