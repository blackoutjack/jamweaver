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

import edu.wisc.cs.jam.env.WebkitIDLLexer;
import edu.wisc.cs.jam.env.WebkitIDLParser;

import edu.wisc.cs.jam.env.WebkitIDLParser.SpecificationContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.DefinitionContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Interface_or_forward_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Interface_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Interface_bodyContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Interface_headerContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.ExportContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Const_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Except_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Op_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Attr_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Type_id_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Type_prefix_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Type_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Context_exprContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Op_attributeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Raises_exprContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Op_type_specContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.String_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Scoped_nameContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Wide_string_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Base_type_specContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Parameter_declsContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Param_declContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Param_attributeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Param_type_specContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Simple_declaratorContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Value_base_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Object_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Char_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Floating_pt_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Any_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Boolean_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Octet_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Wide_char_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Integer_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Signed_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Unsigned_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Signed_longlong_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Signed_long_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Signed_short_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Unsigned_short_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Unsigned_long_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Unsigned_longlong_intContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Readonly_attr_specContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Readonly_attr_declaratorContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Attr_specContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Attr_declaratorContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Attr_raises_exprContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.ModifiersContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.ModifierContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Compound_modifierContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Const_expContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.Const_typeContext;
import edu.wisc.cs.jam.env.WebkitIDLParser.IdContext;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.env.Prototype;
import edu.wisc.cs.jam.env.Method;
import edu.wisc.cs.jam.env.Field;
import edu.wisc.cs.jam.env.Const;
import edu.wisc.cs.jam.env.Param;
import edu.wisc.cs.jam.env.chrome.ChromePrototype;

public class WebkitGenerator extends NativeGenerator implements Utility {

  private static Opts options;

  public WebkitGenerator(Opts opts) {
    options = opts;
  }

  protected String getTypeName(Integer_typeContext inttype) {
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
    return null;
  }

  protected String getTypeName(Const_typeContext ctype) {
    if (ctype == null) return "void";

    String_typeContext strtype = ctype.string_type();
    if (strtype != null) {
      return strtype.KW_STRING().getText();
    }

    Wide_string_typeContext widetype = ctype.wide_string_type();
    if (widetype != null) {
      return widetype.KW_WSTRING().getText();
    }

    Char_typeContext chartype = ctype.char_type();
    if (chartype != null) {
      return "CHAR";
    }

    Floating_pt_typeContext fptype = ctype.floating_pt_type();
    if (fptype != null) {
      return "FLOAT";
    }

    Boolean_typeContext booltype = ctype.boolean_type();
    if (booltype != null) {
      return booltype.KW_BOOLEAN().getText();
    }

    Octet_typeContext octtype = ctype.octet_type();
    if (octtype != null) {
      return "OCTET";
    }

    Wide_char_typeContext wctype = ctype.wide_char_type();
    if (wctype != null) {
      return "WIDECHAR";
    }

    Integer_typeContext inttype = ctype.integer_type();
    if (inttype != null) {
      return getTypeName(inttype);
    }

    return null;
  }

  protected String getTypeName(Param_type_specContext ptype) {
    if (ptype == null) return "void";

    String_typeContext strtype = ptype.string_type();
    if (strtype != null) {
      return strtype.KW_STRING().getText();
    }
    Scoped_nameContext scopetype = ptype.scoped_name();
    if (scopetype != null) {
      List<IdContext> toks = scopetype.id();
      String ret = "";
      for (IdContext tok : toks) {
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
        return booltype.KW_BOOLEAN().getText();
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
        return getTypeName(inttype);
      }
    }
    return null;
  }

  protected Method loadMethod(Op_declContext op) {
    String opname = op.simple_declarator().id().getText();

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

    List<String> ms = new ArrayList<String>();
    Map<String,String> cms = new LinkedHashMap<String,String>();
    ModifiersContext mods = op.modifiers();
    loadModifiers(mods, ms, cms);

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

      List<String> pms = new ArrayList<String>();
      Map<String,String> pcms = new LinkedHashMap<String,String>();
      ModifiersContext mcs = param.modifiers();
      loadModifiers(mcs, pms, pcms);

      Param_type_specContext partype = param.param_type_spec();
      String paramtype = getTypeName(partype);

      Simple_declaratorContext simpdecl = param.simple_declarator();
      String pname = null;
      if (simpdecl != null) {
        IdContext simpid = simpdecl.id();
        assert simpid != null : "No text for simple id: " + simpdecl.getText();
        pname = simpid.getText();
      }

      ps.add(new Param(pname, paramtype, pattrs, pms, pcms));
    }

    Method m = new Method(opname, mtype, ps, ms, cms);
    return m;
  }

  protected Field loadField(Attr_declContext attr) {
    String aname = null;
    String atype = null;
    boolean ro = false;

    List<String> ms = new ArrayList<String>();
    Map<String,String> cms = new LinkedHashMap<String,String>();
    ModifiersContext mods = attr.modifiers();
    loadModifiers(mods, ms, cms);

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
            aname = simpdecl.id().getText();
          } else {
            aname += "," + simpdecl.id().getText();
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
            aname = simpdecl.id().getText();
          } else {
            aname += "," + simpdecl.id().getText();
          }
        }
      }

      Param_type_specContext attrtype = attrspec.param_type_spec();
      atype = getTypeName(attrtype);
    }

    Field f = new Field(aname, atype, ro, ms, cms);
    return f;
  }

  protected Const loadConst(Const_declContext con) {
    String cname = con.id().getText();
    String ctype = null;
    String cvalue = null;

    // The two cases should be mutually exclusive.
		Const_typeContext ct = con.const_type();
    if (ct != null) {
      ctype = getTypeName(ct);
    }

		Const_expContext ce = con.const_exp();
    if (ce != null) {
      // %%% Could go deeper in parse tree.
      cvalue = ce.getText();
    }

    Const c = new Const(cname, ctype, cvalue);
    return c;
  }

  protected void loadModifiers(ModifiersContext imods, List<String> mods, Map<String,String> compmods) {
    if (imods == null) return;
    for (ModifierContext imod : imods.modifier()) {
      IdContext modtxt = imod.id();
      if (modtxt != null) {
        mods.add(modtxt.getText());
      }
      Compound_modifierContext cmod = imod.compound_modifier();
      if (cmod != null) {
        String modkey = cmod.id().getText();
        String modvalue = cmod.modifier_extension().getText();
        compmods.put(modkey, modvalue);
      }
    }
  }

  protected void generateModel(SpecificationContext tree) {
    for (DefinitionContext def : tree.definition()) {
      Interface_or_forward_declContext maybeIface = 
        def.interface_or_forward_decl();
      if (maybeIface != null) {
        Interface_declContext iface = maybeIface.interface_decl();
        if (iface != null) {
          Interface_headerContext iheader = iface.interface_header();
          if (iheader == null) {
            Dbg.err("Null interface header: " + iheader);
            continue;
          }
          String iname = iheader.id().getText();

          // Load modifiers.
          List<String> mods = new ArrayList<String>();
          Map<String,String> compmods = new LinkedHashMap<String,String>();
          ModifiersContext imods = iface.modifiers();
          loadModifiers(imods, mods, compmods);

          Prototype p = new ChromePrototype(iname, mods, compmods);

          List<Method> meths = new ArrayList<Method>();
          List<Field> fields = new ArrayList<Field>();
          Interface_bodyContext body = iface.interface_body();
          for (ExportContext export : body.export()) {
            Const_declContext con = export.const_decl();
            if (con != null) {
              p.addConst(loadConst(con));
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

          //System.out.println(p.toString());
          //System.out.println();
          System.out.println(p.toModel());
        }
      }
    }
  }

  protected SpecificationContext parse(Lexer lexer, Parser parser, InputStream is, Reader r) throws IOException, IllegalAccessException, PrintException {
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

    SpecificationContext tree = ((WebkitIDLParser)parser).specification();

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

    Lexer lexer = new WebkitIDLLexer((CharStream)null);
    Parser parser = new WebkitIDLParser((TokenStream)null);

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

  @Override
  public void run() {
    for (String file : options.files) {
      File fl = new File(file);
      if (!fl.exists()) {
        Dbg.err("Unable to access input: " + fl.getAbsolutePath());
      }
      
      List<File> idlfls = null;
      if (fl.isDirectory()) {
        // Load IDL files from a directory.
        idlfls = scanDir(fl);
      } else {
        // Load a single given IDL file.
        idlfls = new ArrayList<File>();
        idlfls.add(fl);
      }

      for (File idlfl : idlfls) {
        // Get the parsed root "specification" found in the IDL file.
        Dbg.out("Parsing file: " + idlfl.getAbsolutePath(), 1);
        SpecificationContext idl = parseIDLFile(idlfl, options.encoding);
        if (idl != null) {
          // Create native models from the parse tree.
          Dbg.out("Generating model: " + idlfl.getAbsolutePath(), 1);
          generateModel(idl);
        }
      }
    }
  }

}

