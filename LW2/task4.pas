PROGRAM Hello(INPUT, OUTPUT);
USES
  DOS;
  // http://localhost:4001/cgi-bin/task4.cgi/?first_name=Michail&last_name=Popov&age=18

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Str, Parameter: STRING;
  Index: INTEGER;
BEGIN
  Str := GetEnv('QUERY_STRING');
  Index := POS(Key + '=', Str);
  IF Index < 1
  THEN
    Parameter := 'Null'
  ELSE
    BEGIN
      Str := Copy(Str, Index + length(Key) + 1, Length(Str));
      IF POS('&', Str) < 1
      THEN
        Parameter := COPY(Str, 1, Length(Str))
      ELSE
        Parameter := COPY(Str, 1, POS('&', Str) - 1)
    END;
  GetQueryStringParameter := Parameter
END;

BEGIN {Hello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {Hello}
