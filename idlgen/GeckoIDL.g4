grammar GeckoIDL;
import IDL;

definition
    :   type_decl SEMICOLON
    |   const_decl SEMICOLON
    |   except_decl SEMICOLON
    |   interface_or_forward_decl SEMICOLON
    |   module SEMICOLON
    |   value SEMICOLON
    |   type_id_decl SEMICOLON
    |   type_prefix_decl SEMICOLON
    |   event SEMICOLON
    |   component SEMICOLON
    |   home_decl SEMICOLON
    |   include_decl
    |   dictionary_decl SEMICOLON
    ;

interface_decl
    :   modifiers? interface_header LEFT_BRACE interface_body RIGHT_BRACE
    ;

forward_decl
    :   ( KW_ABSTRACT | KW_LOCAL )? KW_INTERFACE id
    ;

interface_header
    :   ( KW_ABSTRACT | KW_LOCAL )? KW_INTERFACE id ( interface_inheritance_spec )?
    ;

scoped_name
    :   ( DOUBLE_COLON )? id ( DOUBLE_COLON id )*
    ;

const_decl
    :   KW_CONST const_type id EQUAL const_exp
    ;

native_declarator
    :   simple_declarator (LEFT_BRACKET native_type_spec RIGHT_BRACKET)?
    ;

native_type_spec
    :   KW_VOID STAR*
    |   KW_CONST? (KW_UNION | KW_STRUCT)? type_spec STAR* KW_CONST? STAR*
    |   simple_declarator LEFT_ANG_BRACKET native_type_spec (COMA native_type_spec)* RIGHT_ANG_BRACKET STAR*
    ;

type_decl
    :   KW_TYPEDEF type_declarator
    |   struct_type
    |   union_type
    |   enum_type
    |   modifiers? KW_NATIVE native_declarator
    |   constr_forward_decl
    ;

simple_declarator
    :   id
    ;

char_type
    :   KW_CHAR
    |   unsigned_char_type
    ;

unsigned_char_type
    :   KW_UNSIGNED KW_CHAR
    ;

attr_decl
    :   modifiers? readonly_attr_spec
    |   modifiers? attr_spec
    ;

modifiers
    :   LEFT_SQUARE_BRACKET modifier ( COMA modifier )* RIGHT_SQUARE_BRACKET
    ;

modifier
    :   id
    |   compound_modifier
    ;

compound_modifier
    :   id LEFT_BRACKET modifier_value RIGHT_BRACKET
    ;

modifier_value
    :   UUID | id | literal
    ;

op_decl
    :   modifiers? ( op_attribute )? op_type_spec simple_declarator parameter_decls ( raises_expr )? ( context_expr )?
    ;

op_type_spec
    :   modifiers? param_type_spec
    |   KW_VOID
    ;

param_decl
    :   modifiers? param_attribute param_type_spec
        simple_declarator
    ;

include_decl
    :   KW_INCLUDE STRING_LITERAL
    ;

dictionary_decl
    :   KW_DICTIONARY scoped_name (COLON scoped_name)? LEFT_BRACE dictionary_body RIGHT_BRACE
    ;

dictionary_body
    :   dictionary_item*
    ;

dictionary_item
    :   type_spec '?'? declarators (EQUAL const_exp)? SEMICOLON
    ;

/* An ID that allows keywords. */
id
    :   ID
    |   KW_SETRAISES | KW_OUT | KW_EMITS | KW_STRING | KW_SWITCH
    |   KW_PUBLISHES | KW_TYPEDEF | KW_USES | KW_PRIMARYKEY | KW_CUSTOM
    |   KW_OCTET | KW_SEQUENCE | KW_IMPORT | KW_STRUCT | KW_NATIVE
    |   KW_READONLY | KW_FINDER | KW_RAISES | KW_VOID | KW_PRIVATE
    |   KW_EVENTTYPE | KW_WCHAR | KW_IN | KW_DEFAULT | KW_PUBLIC
    |   KW_SHORT | KW_LONG | KW_ENUM | KW_WSTRING | KW_CONTEXT | KW_HOME
    |   KW_FACTORY | KW_EXCEPTION | KW_GETRAISES | KW_CONST
    |   KW_VALUEBASE | KW_VALUETYPE | KW_SUPPORTS | KW_MODULE
    |   KW_OBJECT | KW_TRUNCATABLE | KW_UNSIGNED | KW_FIXED | KW_UNION
    |   KW_ONEWAY | KW_ANY | KW_CHAR | KW_CASE | KW_FLOAT | KW_BOOLEAN
    |   KW_MULTIPLE | KW_ABSTRACT | KW_INOUT | KW_PROVIDES | KW_CONSUMES
    |   KW_DOUBLE | KW_TYPEPREFIX | KW_TYPEID | KW_ATTRIBUTE | KW_LOCAL
    |   KW_MANAGES | KW_INTERFACE | KW_COMPONENT | KW_DICTIONARY
    ;

INTEGER_LITERAL : ('0' | '1'..'9' '0'..'9'*) INTEGER_TYPE_SUFFIX? ;

OCTAL_LITERAL : '0' ('0'..'7')+ INTEGER_TYPE_SUFFIX? ;

HEX_LITERAL : '0' ('x' | 'X') HEX_DIGIT+ INTEGER_TYPE_SUFFIX? ;

fragment
HEX_DIGIT : ( '0'..'9' | 'a'..'f' | 'A'..'F' ) ;

fragment
INTEGER_TYPE_SUFFIX : ('l' | 'L') ;

FLOATING_PT_LITERAL
    :   ('0'..'9')+ '.' ('0'..'9')* EXPONENT? FLOAT_TYPE_SUFFIX?
    |   '.' ('0'..'9')+ EXPONENT? FLOAT_TYPE_SUFFIX?
    |   ('0'..'9')+ EXPONENT FLOAT_TYPE_SUFFIX?
    |   ('0'..'9')+ EXPONENT? FLOAT_TYPE_SUFFIX
    ;

FIXED_PT_LITERAL
    :   FLOATING_PT_LITERAL
    ;

fragment
EXPONENT : ('e' | 'E') (PLUS|MINUS)? ('0'..'9')+ ;

fragment
FLOAT_TYPE_SUFFIX : ('f' | 'F' | 'd' | 'D') ;

WIDE_CHARACTER_LITERAL
    :   'L' CHARACTER_LITERAL
    ;

CHARACTER_LITERAL
    :   '\'' ( ESCAPE_SEQUENCE | ~('\'' | '\\') ) '\''
    ;

WIDE_STRING_LITERAL
    :   'L' STRING_LITERAL
    ;

STRING_LITERAL
    :   '"' ( ESCAPE_SEQUENCE | ~('\\' | '"') )* '"'
    ;

BOOLEAN_LITERAL
    :   'TRUE'
    |   'FALSE'
    ;

fragment
ESCAPE_SEQUENCE
    :   '\\' ('b' | 't' | 'n' | 'f' | 'r' | '\"' | '\'' | '\\')
    |   UNICODE_ESCAPE
    |   OCTAL_ESCAPE
    ;

fragment
OCTAL_ESCAPE
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UNICODE_ESCAPE
    :   '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;

fragment
LETTER
    :   '\u0024'
    |   '\u0041'..'\u005a'
    |   '\u005f'
    |   '\u0061'..'\u007a'
    |   '\u00c0'..'\u00d6'
    |   '\u00d8'..'\u00f6'
    |   '\u00f8'..'\u00ff'
    |   '\u0100'..'\u1fff'
    |   '\u3040'..'\u318f'
    |   '\u3300'..'\u337f'
    |   '\u3400'..'\u3d2d'
    |   '\u4e00'..'\u9fff'
    |   '\uf900'..'\ufaff'
    ;

fragment
ID_DIGIT
    :   '\u0030'..'\u0039'
    |   '\u0660'..'\u0669'
    |   '\u06f0'..'\u06f9'
    |   '\u0966'..'\u096f'
    |   '\u09e6'..'\u09ef'
    |   '\u0a66'..'\u0a6f'
    |   '\u0ae6'..'\u0aef'
    |   '\u0b66'..'\u0b6f'
    |   '\u0be7'..'\u0bef'
    |   '\u0c66'..'\u0c6f'
    |   '\u0ce6'..'\u0cef'
    |   '\u0d66'..'\u0d6f'
    |   '\u0e50'..'\u0e59'
    |   '\u0ed0'..'\u0ed9'
    |   '\u1040'..'\u1049'
    ;

SEMICOLON:              ';';
COLON:                  ':';
COMA:                   ',';
LEFT_BRACE:             '{';
RIGHT_BRACE:            '}';
LEFT_BRACKET:           '(';
RIGHT_BRACKET:          ')';
LEFT_SQUARE_BRACKET:    '[';
RIGHT_SQUARE_BRACKET:   ']';
TILDE:                  '~';
SLASH:                  '/';
LEFT_ANG_BRACKET:       '<';
RIGHT_ANG_BRACKET:      '>';
STAR:                   '*';
PLUS:                   '+';
MINUS:                  '-';
CARET:                  '^';
AMPERSAND:              '&';
PIPE:                   '|';
EQUAL:                  '=';
PERCENT:                '%';

DOUBLE_COLON:           '::';
RIGHT_SHIFT:            '>>';
LEFT_SHIFT:             '<<';

KW_SETRAISES:           'setraises';
KW_OUT:                 'out';
KW_EMITS:               'emits';
KW_STRING:              'string';
KW_SWITCH:              'switch';
KW_PUBLISHES:           'publishes';
KW_TYPEDEF:             'typedef';
KW_USES:                'uses';
KW_PRIMARYKEY:          'primarykey';
KW_CUSTOM:              'custom';
KW_OCTET:               'octet';
KW_SEQUENCE:            'sequence';
KW_IMPORT:              'import';
KW_STRUCT:              'struct';
KW_NATIVE:              'native';
KW_READONLY:            'readonly';
KW_FINDER:              'finder';
KW_RAISES:              'raises';
KW_VOID:                'void';
KW_PRIVATE:             'private';
KW_EVENTTYPE:           'eventtype';
KW_WCHAR:               'wchar';
KW_IN:                  'in';
KW_DEFAULT:             'default';
KW_PUBLIC:              'public';
KW_SHORT:               'short';
KW_LONG:                'long';
KW_ENUM:                'enum';
KW_WSTRING:             'wstring';
KW_CONTEXT:             'context';
KW_HOME:                'home';
KW_FACTORY:             'factory';
KW_EXCEPTION:           'exception';
KW_GETRAISES:           'getraises';
KW_CONST:               'const';
KW_VALUEBASE:           'ValueBase';
KW_VALUETYPE:           'valuetype';
KW_SUPPORTS:            'supports';
KW_MODULE:              'module';
KW_OBJECT:              'Object';
KW_TRUNCATABLE:         'truncatable';
KW_UNSIGNED:            'unsigned';
KW_FIXED:               'fixed';
KW_UNION:               'union';
KW_ONEWAY:              'oneway';
KW_ANY:                 'any';
KW_CHAR:                'char';
KW_CASE:                'case';
KW_FLOAT:               'float';
KW_BOOLEAN:             'boolean';
KW_MULTIPLE:            'multiple';
KW_ABSTRACT:            'abstract';
KW_INOUT:               'inout';
KW_PROVIDES:            'provides';
KW_CONSUMES:            'consumes';
KW_DOUBLE:              'double';
KW_TYPEPREFIX:          'typeprefix';
KW_TYPEID:              'typeid';
KW_ATTRIBUTE:           'attribute';
KW_LOCAL:               'local';
KW_MANAGES:             'manages';
KW_INTERFACE:           'interface';
KW_COMPONENT:           'component';
KW_DICTIONARY:          'dictionary';
KW_INCLUDE:             '#include';

ID  
    :   LETTER (LETTER|ID_DIGIT)*
    ;

UUID
    :   (ID_DIGIT | LETTER) ( ID_DIGIT | LETTER | MINUS )*
    ;

CPPBLOCK
    :   '%{' WS* 'C++' .*? '%}' -> channel(HIDDEN)
    ;

// [EOF] GeckoIDL.g4
