package edu.wisc.cs.jam.util;

import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.DiagnosticErrorListener;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.Parser;
import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.antlr.v4.runtime.tree.TerminalNode;

import javax.print.PrintException;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;
import java.io.IOException;
import java.io.File;
import java.io.FilenameFilter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.FileInputStream;
import java.io.UnsupportedEncodingException;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import edu.wisc.cs.jam.env.GeckoIDLLexer;
import edu.wisc.cs.jam.env.GeckoIDLParser;

import edu.wisc.cs.jam.env.GeckoIDLParser.SpecificationContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.DefinitionContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Interface_or_forward_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Interface_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Interface_bodyContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Interface_headerContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.ExportContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Const_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Except_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Op_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Attr_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Type_id_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Type_prefix_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Type_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Context_exprContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Op_attributeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Raises_exprContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Op_type_specContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.String_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Scoped_nameContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Wide_string_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Base_type_specContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Param_declContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Param_attributeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Param_type_specContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Simple_declaratorContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Value_base_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Object_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Char_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Floating_pt_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Any_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Boolean_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Octet_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Wide_char_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Integer_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Signed_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Unsigned_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Signed_longlong_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Signed_long_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Signed_short_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Unsigned_short_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Unsigned_long_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Unsigned_longlong_intContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Readonly_attr_specContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Readonly_attr_declaratorContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Attr_specContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Attr_declaratorContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Attr_raises_exprContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.ModifiersContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.ModifierContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Compound_modifierContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Const_expContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.Const_typeContext;
import edu.wisc.cs.jam.env.GeckoIDLParser.IdContext;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.env.Prototype;
import edu.wisc.cs.jam.env.Method;
import edu.wisc.cs.jam.env.Field;
import edu.wisc.cs.jam.env.Const;
import edu.wisc.cs.jam.env.Param;

public abstract class NativeGenerator {

  protected static Opts options;

  protected class IDLFilter implements FilenameFilter {
    public boolean accept(File dir, String name) {
      return name.endsWith(".idl");
    }
  }

  protected List<File> scanDir(File dir) {
    List<File> ret = new ArrayList<File>();
    
    IDLFilter filter = new IDLFilter();
    for (String idl : dir.list(filter)) {
      File idlfl = new File(dir, idl);
      ret.add(idlfl);
    }

    return ret;
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="IDL files or directories containing IDL files", metaVar="FILE+", multiValued=true)
    public static List<String> files;

    @Option(name="-e", usage="Encoding")
    public static String encoding = "UTF-8";

    @Option(name="-s", usage="Show tokens")
    public static boolean showTokens = false;

    @Option(name="-d", usage="Diagnostics")
    public static boolean diagnostics = false;

    @Option(name="-p", usage="Print parse tree")
    public static boolean printTree = false;

    @Option(name="-g", usage="Generate GUI tree")
    public static boolean gui = false;

    @Option(name="-t", usage="Trace")
    public static boolean trace = false;

    @Option(name="-l", usage="SLL")
    public static boolean sll = false;

    @Option(name="-f", usage="Save tree to PostScript file")
    public static String psFile = null;
  }

}

