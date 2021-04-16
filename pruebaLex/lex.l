NAME              [a-zA-Z_][a-zA-Z0-9_-]*
BR                \r\n|\n|\r

%%

{NAME}                          return 'NAME';
"|"                             return '|';
"("                             return '(';
")"                             return ')';
"+"                             return '+';
"*"                             return '*';
"?"                             return '?';
"^"                             return '^';
","                             return ',';
"<<EOF>>"                       return '$';
"/!"                            return '/!';
"/"                             return '/';
"\\"([0-7]{1,3}|[rfntvsSbBwWdD\\*+()${}|[\]\/.^?]|"c"[A-Z]|"x"[0-9A-F]{2}|"u"[a-fA-F0-9]{4})      return 'ESCAPE_CHAR';
"\\".                           yytext = yytext.replace(/^\\/g,''); return 'ESCAPE_CHAR';
"$"                             return '$';
"."                             return '.';
"{"\d+(","\s?\d+|",")?"}"       return 'RANGE_REGEX';
"{"{NAME}"}"                    return 'NAME_BRACE';
"{"                             return '{';
"}"                             return '}';
.                               /* ignore bad characters */
<*><<EOF>>                      return 'EOF';
(.|{BR})+                 return 'CODE';
%%
