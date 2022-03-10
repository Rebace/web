PROGRAM Hello(INPUT, OUTPUT);
USES
  DOS;
  // http://localhost:4001/cgi-bin/task3.cgi/?name=Michail
VAR
  Name, Str: STRING;
  Index, I: INTEGER;
BEGIN {Hello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Str := GetEnv('QUERY_STRING');
  Index := POS('name=', Str);
  IF Index >= 1
  THEN
    FOR I := Index + 5 TO LENGTH(Str)
    DO
      IF Str[i] <> '&'
      THEN
        Name := Name + Str[i]
      ELSE
        BREAK;
  IF Name = ''
  THEN
    WRITELN('Hello Anonymous!')
  ELSE
    WRITELN('Hello dear, ', Name, ' !')
END. {Hello}
