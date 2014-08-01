package edu.wisc.cs.jam;

public class JAMConfig {

	// Prevent instantiation
	private JAMConfig() {}

	// Home of the JAM implementation
	public static final String JAMPKG = System.getenv("JAMPKG");

  public static final String TRANSACTION_KEYWORD = "introspect";
  public static final String TRANSACTION_LIBRARY = "JAM";
  public static final String INTROSPECTOR_PREFIX = "p";
  public static final String COMPREHENSIVE_INTROSPECTOR = INTROSPECTOR_PREFIX + "Full";
  public static final String INTROSPECTOR_LIST = "policy";

	// File containing the instrumentation function declaration.
	//public static final String EXTERN_FILE = JAMPKG + "/lib/externs.js";

  public static final String INFO_FILENAME = "info.txt";

  // Name of some of the relevant semantics modules.
  public static final String SEMANTICS_DATA_MODULE = "persist";
  public static final String SEMANTICS_CONCRETE_MODULE = "conload";
  public static final String SEMANTICS_SYMBOLIC_MODULE = "symload";
}
