PROGRAM Hello(INPUT, OUTPUT);
USES
  DOS;
  // http://localhost:4001/cgi-bin/task3.cgi/?name=Michail
VAR
  NAME: STRING;
  INDEX: INTEGER;
BEGIN {Hello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  NAME := GetEnv('QUERY_STRING');
  IF POS('name', NAME) >= 1
  THEN
    BEGIN
      INDEX := POS('=', NAME);
      NAME := COPY(NAME, INDEX + 1, Length(NAME) - INDEX + 1);
      IF Length(NAME) < 1
      THEN
        WRITELN('Hello Anonymous!')
      ELSE
        WRITELN('Hello dear, ', NAME, ' !')
    END
    ELSE
      WRITELN('Not found name!')
END. {Hello}
