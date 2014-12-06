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
import java.util.HashMap;
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

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.env.idl.IDLLexer;
import edu.wisc.cs.jam.env.idl.IDLParser;

import edu.wisc.cs.jam.env.idl.IDLParser.SpecificationContext;
import edu.wisc.cs.jam.env.idl.IDLParser.DefinitionContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Interface_or_forward_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Interface_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Interface_bodyContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Interface_headerContext;
import edu.wisc.cs.jam.env.idl.IDLParser.ExportContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Const_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Except_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Op_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Attr_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Type_id_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Type_prefix_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Type_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Context_exprContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Op_attributeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Raises_exprContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Op_type_specContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.idl.IDLParser.String_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Scoped_nameContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Wide_string_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Base_type_specContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Param_declContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Param_attributeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Param_type_specContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Simple_declaratorContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Value_base_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Object_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Char_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Floating_pt_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Any_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Boolean_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Octet_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Wide_char_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Integer_typeContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Signed_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Unsigned_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Signed_longlong_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Signed_long_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Signed_short_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Unsigned_short_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Unsigned_long_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Unsigned_longlong_intContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Readonly_attr_specContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Readonly_attr_declaratorContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Attr_specContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Attr_declaratorContext;
import edu.wisc.cs.jam.env.idl.IDLParser.Attr_raises_exprContext;

public class NativeGenerator implements Utility {

  private static Opts options;

  public NativeGenerator(Opts opts) {
    options = opts;
  }

  protected static Map<String,String> interfaceToNative;
  static {
    interfaceToNative = new HashMap<String,String>();
    interfaceToNative.put("nsIZipEntry", "#ZipEntry#prototype");
    interfaceToNative.put("nsIZipReader", "#ZipReader#prototype");
    interfaceToNative.put("nsIZipReaderCache", "#ZipReaderCache#prototype");
  }

  public static String translateNativeName(String in) {
    String nat = interfaceToNative.get(in);
    if (nat == null) {
      Dbg.warn("Native translation not found: " + in);
      // %%% Heuristic translation
      if (in.startsWith("ns")) {
        in = in.substring(2);
        if (in.startsWith("I")) {
          in = in.substring(1);
        }
      }
      return "#" + in;
    }
    return nat;
  }

  public static class Prototype {
    private String in;
    private String n;
    private List<Method> ms;
    private List<Field> fs;

    public Prototype(String ifacename) {
      in = ifacename;
      n = translateNativeName(in);
      ms = new ArrayList<Method>();
      fs = new ArrayList<Field>();
    }

    public void addMethod(Method m) {
      m.setPrototype(this);
      ms.add(m);
    }

    public void addField(Field f) {
      f.setPrototype(this);
      fs.add(f);
    }

    public String getNativeName() {
      return n;
    }

    public String toModel() {
      StringBuilder sb = new StringBuilder();

      sb.append("% Prototype ");
      sb.append(n);
      sb.append(" generated from ");
      sb.append(in);
      sb.append("\n\n");
      for (Field f : fs) {
        sb.append(f.toModel());
        sb.append("\n");
      }
      for (Method m : ms) {
        sb.append(m.toModel());
        sb.append("\n");
      }

      return sb.toString();
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append("Interface: ");
      sb.append(in);
      sb.append("\nNative: ");
      sb.append(n);
      sb.append("\n");
      for (Field f : fs) {
        sb.append(f.toString());
        sb.append("\n");
      }
      for (Method m : ms) {
        sb.append(m.toString());
        sb.append("\n");
      }

      return sb.toString();
    }
  }

  public static class Method {
    private List<Param> ps;
    private String n;
    private String rt;
    private Prototype p;

    public Method(String name, String returnType, List<Param> params) {
      n = name;
      rt = returnType;
      ps = params;
    }

    public void setPrototype(Prototype proto) {
      p = proto;
    }

    public String getNativeName() {
      return p.getNativeName() + "#" + n;
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append(rt);
      sb.append(" ");
      sb.append(n);
      sb.append("(");
      boolean first = true;
      for (Param p : ps) {
        if (first) { first = false; } else { sb.append(", "); }
        sb.append(p.toString());
      }
      sb.append(")");
      return sb.toString();
    }

    public String toModel() {
      StringBuilder sb = new StringBuilder();
      sb.append("% Method ");
      sb.append(n);
      sb.append("\n");
      sb.append("aexe(H,L,'");
      sb.append(getNativeName());
      sb.append("',This,Args,HP,EP) :-\n");
      // %%% Be smarter.
      sb.append("  always(L),always(This),always(Args),\n");
      sb.append("  HP=H,\n");
      sb.append("  symbolic(EP,_).\n");

      return sb.toString();
    }
  }

  public static class Field {
    private String n;
    private String t;
    private Prototype p;
    private boolean ro;

    public Field(String name, String type, boolean readonly) {
      n = name;
      t = type;
      ro = readonly;
    }

    public String getNativeName() {
      return p.getNativeName() + "#" + n;
    }

    public void setPrototype(Prototype proto) {
      p = proto;
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append(t);
      sb.append(" ");
      sb.append(n);
      return sb.toString();
    }

    public String toModel() {
      StringBuilder sb = new StringBuilder();
      sb.append("% Field ");
      sb.append(n);
      sb.append("\n");
      sb.append("aexe(H,L,'");
      sb.append(getNativeName());
      sb.append("#get");
      sb.append("',This,_,HP,EP) :-\n");
      // %%% Be smarter.
      sb.append("  always(L),always(This),always(Args),\n");
      sb.append("  HP=H,\n");
      sb.append("  symbolic(EP,_).\n");

      if (!ro) {
        sb.append("aexe(H,L,'");
        sb.append(getNativeName());
        sb.append("#set");
        sb.append("',This,Args,HP,EP) :-\n");
        // %%% Be smarter.
        sb.append("  always(L),always(This),always(Args),\n");
        sb.append("  HP=H,\n");
        sb.append("  symbolic(EP,_).\n");
      }

      return sb.toString();
    }
  }

  public static class Param {
    private String n;
    private String t;
    private List<String> as;

    public Param(String type, String name, List<String> attrs) {
      n = name;
      t = type;
      as = attrs;
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      for (String a : as) {
        sb.append(a);
        sb.append(" ");
      }
      sb.append(t);
      sb.append(" ");
      sb.append(n);
      return sb.toString();
    }
  }

  protected class IDLFilter implements FilenameFilter {
    public boolean accept(File dir, String name) {
      return name.endsWith(".idl");
    }
  }

  protected String getTypeName(Param_type_specContext ptype) {
    if (ptype == null) return "void";

    String_typeContext strtype = ptype.string_type();
    if (strtype != null) {
      return strtype.KW_STRING().getText();
    }
    Scoped_nameContext scopetype = ptype.scoped_name();
    if (scopetype != null) {
      List<TerminalNode> toks = scopetype.ID();
      String ret = "";
      for (TerminalNode tok : toks) {
        if (ret.length() > 0) ret += ",";
        ret += tok.getText();
      }
      return ret;
    }
    Wide_string_typeContext widetype = ptype.wide_string_type();
    if (widetype != null) {
      return widetype.KW_WSTRING().getText();
    }
    Base_type_specContext btype = ptype.base_type_spec();
    if (btype != null) {
      Value_base_typeContext vbtype = btype.value_base_type();
      if (vbtype != null) {
        return "VALUE";
      }
      Object_typeContext otype = btype.object_type();
      if (otype != null) {
        return otype.KW_OBJECT().getText();
      }
      Char_typeContext ctype = btype.char_type();
      if (ctype != null) {
        return "CHAR";
      }
      Floating_pt_typeContext fptype = btype.floating_pt_type();
      if (fptype != null) {
        return "FLOAT";
      }
      Any_typeContext anytype = btype.any_type();
      if (anytype != null) {
        return "ANY";
      }
      Boolean_typeContext booltype = btype.boolean_type();
      if (booltype != null) {
        return "BOOL";
      }
      Octet_typeContext octtype = btype.octet_type();
      if (octtype != null) {
        return "OCTET";
      }
      Wide_char_typeContext wctype = btype.wide_char_type();
      if (wctype != null) {
        return "WIDECHAR";
      }
      Integer_typeContext inttype = btype.integer_type();
      if (inttype != null) {
        Signed_intContext sint = inttype.signed_int();
        if (sint != null) {
          Signed_longlong_intContext sllinttype = sint.signed_longlong_int();
          if (sllinttype != null) {
            return "long long";
          }
          Signed_long_intContext slinttype = sint.signed_long_int();
          if (slinttype != null) {
            return slinttype.KW_LONG().getText();
          }
          Signed_short_intContext ssinttype = sint.signed_short_int();
          if (ssinttype != null) {
            return ssinttype.KW_SHORT().getText();
          }
        }
        Unsigned_intContext uint = inttype.unsigned_int();
        if (uint != null) {
          Unsigned_short_intContext usinttype = uint.unsigned_short_int();
          if (usinttype != null) {
            return "unsigned short";
          }
          Unsigned_long_intContext ulinttype = uint.unsigned_long_int();
          if (ulinttype != null) {
            return "unsigned long";
          }
          Unsigned_longlong_intContext ullinttype = uint.unsigned_longlong_int();
          if (ullinttype != null) {
            return "unsigned long long";
          }
        }
      }
    }
    return null;
  }

  protected Method loadMethod(Op_declContext op) {
    String opname = op.ID().getText();

    Context_exprContext ctxt = op.context_expr();
    if (ctxt != null) {
      Dbg.dbg("CTXT: " + ctxt.toStringTree());
    }
    Op_attributeContext attr = op.op_attribute();
    if (attr != null) {
      Dbg.dbg("OPATTR: " + attr.toStringTree());
    }
    Raises_exprContext raise = op.raises_expr();
    if (raise != null) {
      Dbg.dbg("RAISE: " + raise.toStringTree());
    }

    Op_type_specContext otype = op.op_type_spec();
    Param_type_specContext ptype = otype.param_type_spec();
    String mtype = getTypeName(ptype);

    List<Param> ps = new ArrayList<Param>();
    Parameter_declsContext params = op.parameter_decls();
    for (Param_declContext param : params.param_decl()) {
      List<String> pattrs = new ArrayList<String>();
      Param_attributeContext parattr = param.param_attribute();
      if (parattr != null) {
        TerminalNode kwout = parattr.KW_OUT();
        if (kwout != null) {
          pattrs.add(kwout.getText());
        }
        TerminalNode kwin = parattr.KW_IN();
        if (kwin != null) {
          pattrs.add(kwin.getText());
        }
        TerminalNode kwinout = parattr.KW_INOUT();
        if (kwinout != null) {
          pattrs.add(kwinout.getText());
        }
      }

      Param_type_specContext partype = param.param_type_spec();
      String paramtype = getTypeName(partype);

      Simple_declaratorContext simpdecl = param.simple_declarator();
      String pname = null;
      if (simpdecl != null) {
        pname = simpdecl.ID().getText();
      }

      ps.add(new Param(pname, paramtype, pattrs));
    }

    Method m = new Method(opname, mtype, ps);
    return m;
  }

  protected Field loadField(Attr_declContext attr) {
    String aname = null;
    String atype = null;
    boolean ro = false;

    // The two cases should be mutually exclusive.
		Readonly_attr_specContext rospec = attr.readonly_attr_spec();
    if (rospec != null) {
      Readonly_attr_declaratorContext rodecl = rospec.readonly_attr_declarator();
      if (rodecl != null) {
        ro = true;
        Raises_exprContext roraises = rodecl.raises_expr();
        if (roraises != null) {
          Dbg.dbg("RORAISE: " + roraises.toStringTree());
        }
        List<Simple_declaratorContext> simpdecls = rodecl.simple_declarator();
        for (Simple_declaratorContext simpdecl : simpdecls) {
          if (aname == null) {
            aname = simpdecl.ID().getText();
          } else {
            aname += "," + simpdecl.ID().getText();
          }
        }
      }

      Param_type_specContext rotype = rospec.param_type_spec();
      atype = getTypeName(rotype);
    }

		Attr_specContext attrspec = attr.attr_spec();
    if (attrspec != null) {
      assert !ro;
      Attr_declaratorContext attrdecl = attrspec.attr_declarator();
      if (attrdecl != null) {
        Attr_raises_exprContext attrraises = attrdecl.attr_raises_expr();
        if (attrraises != null) {
          Dbg.dbg("ATTRRAISE: " + attrraises.toStringTree());
        }
        List<Simple_declaratorContext> simpdecls = attrdecl.simple_declarator();
        for (Simple_declaratorContext simpdecl : simpdecls) {
          if (aname == null) {
            aname = simpdecl.ID().getText();
          } else {
            aname += "," + simpdecl.ID().getText();
          }
        }
      }

      Param_type_specContext attrtype = attrspec.param_type_spec();
      atype = getTypeName(attrtype);
    }

    Field f = new Field(aname, atype, ro);
    return f;
  }

  protected void generateModel(SpecificationContext tree) {
    for (DefinitionContext def : tree.definition()) {
      //Dbg.dbg("DEF: " + def.toStringTree() + "\n");
      Interface_or_forward_declContext maybeIface = 
        def.interface_or_forward_decl();
      if (maybeIface != null) {
        Interface_declContext iface = maybeIface.interface_decl();
        if (iface != null) {
          Interface_headerContext header = iface.interface_header();
          String iname = header.ID().getText();
          Prototype p = new Prototype(iname);

          List<Method> meths = new ArrayList<Method>();
          List<Field> fields = new ArrayList<Field>();
          Interface_bodyContext body = iface.interface_body();
          for (ExportContext export : body.export()) {
            Const_declContext con = export.const_decl();
            if (con != null) {
              Dbg.dbg("CONST: " + con.toStringTree());
            }
            Except_declContext exc = export.except_decl();
            if (exc != null) {
              Dbg.dbg("EXCEPT: " + exc.toStringTree());
            }
            Op_declContext op = export.op_decl();
            if (op != null) {
              p.addMethod(loadMethod(op));
            }
            Attr_declContext attr = export.attr_decl();
            if (attr != null) {
              p.addField(loadField(attr));
            }
            Type_id_declContext tid = export.type_id_decl();
            if (tid != null) {
              Dbg.dbg("TID: " + tid.toStringTree());
            }
            Type_prefix_declContext tp = export.type_prefix_decl();        
            if (tp != null) {
              Dbg.dbg("TP: " + tp.toStringTree());
            }
            Type_declContext td = export.type_decl();
            if (td != null) {
              Dbg.dbg("TD: " + td.toStringTree());
            }
          }

          System.out.println(p.toString());
          System.out.println();
          System.out.println(p.toModel());
        }
      }
    }
  }

  protected SpecificationContext parse(IDLLexer lexer, IDLParser parser, InputStream is, Reader r) throws IOException, IllegalAccessException, PrintException {
    ANTLRInputStream input = new ANTLRInputStream(r);
    lexer.setInputStream(input);
    CommonTokenStream tokens = new CommonTokenStream(lexer);

    tokens.fill();

    if (options.showTokens) {
      for (Object tok : tokens.getTokens()) {
        System.out.println(tok);
      }
    }

    if (options.diagnostics) {
      parser.addErrorListener(new DiagnosticErrorListener());
      parser.getInterpreter().setPredictionMode(PredictionMode.LL_EXACT_AMBIG_DETECTION);
    }

    parser.setBuildParseTree(true);

    // SLL overrides diagnostics
    // %%% Not sure what it really is though.
    if (options.sll) {
      parser.getInterpreter().setPredictionMode(PredictionMode.SLL);
    }

    parser.setTokenStream(tokens);
    parser.setTrace(options.trace);

    SpecificationContext tree = (SpecificationContext)parser.specification();

    if (options.printTree) {
      System.out.println(tree.toStringTree(parser));
    }
    if (options.gui) {
      tree.inspect(parser);
    }
    if (options.psFile != null) {
      tree.save(parser, options.psFile); // Generate postscript
    }

    return tree;
  }

  public SpecificationContext parseIDLFile(File idl, String encoding) {

    IDLLexer lexer = new IDLLexer((CharStream)null);
    IDLParser parser = new IDLParser((TokenStream)null);

    FileInputStream fis = null;
    try {
      fis = new FileInputStream(idl);
    } catch (IOException ex) {
      Dbg.err("Unable to create input stream from " + idl.getAbsolutePath() + ": " + ex.getMessage());
      return null;
    }

    Reader r;
    if (encoding != null) {
      try {
        r = new InputStreamReader(fis, encoding);
      } catch (UnsupportedEncodingException ex) {
        Dbg.err("Unsupported encoding: " + encoding);
        return null;
      }
    } else {
      r = new InputStreamReader(fis);
    }

    SpecificationContext ret = null;
    try {
      ret = parse(lexer, parser, fis, r);
    } catch (Exception ex) {
      Dbg.err("Error while parsing " + idl.getAbsolutePath());
    }  

    try {
      if (r != null) r.close();
    } catch (IOException ex) {
      Dbg.err("Unable to close reader: " + ex.getMessage());
    }
    try {
      if (fis != null) fis.close();
    } catch (IOException ex) {
      Dbg.err("Unable to close stream: " + ex.getMessage());
    }

    return ret;
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

  @Override
  public void run() {
    for (String file : options.files) {
      File fl = new File(file);
      if (!fl.exists()) {
        Dbg.err("Unable to access input: " + fl.getAbsolutePath());
      }
      
      List<File> idlfls = null;
      if (fl.isDirectory()) {
        idlfls = scanDir(fl);
      } else {
        idlfls = new ArrayList<File>();
        idlfls.add(fl);
      }

      for (File idlfl : idlfls) {
        SpecificationContext idl = parseIDLFile(idlfl, options.encoding);
        if (idl != null) {
          generateModel(idl);
        }
      }
    }
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

