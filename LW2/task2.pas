PROGRAM SarahRevere(INPUT, OUTPUT);
{Печать соответствующего сообщения, зависящего от величины
 на входе:  '...by land' для 1 и '...by sea' для 2
 иначе печать сообщения об ошибке}
USES
  DOS;
VAR
  Lanterns: STRING;
  Str: STRING;
BEGIN {PaulRevere}
  {Read Lanterns}
  Str := GetEnv('QUERY_STRING');
  IF Pos('lanterns=', Str) >= 1
  THEN
    Lanterns := COPY(Str, Pos('lanterns=', Str) + 9, Pos('lanterns=', Str) + 9);
  WRITELN('Content-Type: text/plain');
  WRITELN;
  {Issue Paul Revere's message}
  IF Lanterns = '1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Lanterns = '2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('The North Church shows only ''',Lanterns, '''.')
END. {PaulRevere}


