PROGRAM SarahRevere(INPUT, OUTPUT);
{������ ���������������� ���������, ���������� �� ��������
 �� �����:  '...by land' ��� 1 � '...by sea' ��� 2
 ����� ������ ��������� �� ������}
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


