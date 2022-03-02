PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  DOS;
VAR
  Lanterns: STRING;
  Str: STRING;
BEGIN {PaulRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Str := GetEnv('QUERY_STRING');
  //Str := 'lanterns=1';
  {Issue Paul Revere's message}
  IF Pos('lanterns=1', Str) >= 1
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Pos('lanterns=2', Str) >= 1
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('The North Church shows only.')
END. {PaulRevere}


