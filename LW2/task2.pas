PROGRAM SarahRevere(INPUT, OUTPUT);
  {������ ��������� � ��� ��� ���� ��������,
   � ����������� �� ����,������ �� ����� �����������
  'land' ��� 'sea'.}
USES
  DOS;
VAR
  W1, W2, W3, W4, Looking: CHAR;
  Str: STRING;
  I: INTEGER;
BEGIN {SarahRevere}
  {������������� W1,W2,W3,W4,Looking}
  Str := GetEnv('QUERY_STRING');
  WRITELN('Content-Type: text/plain');
  WRITELN;
  W1 := ' ';
  W2 := ' ';
  W3 := ' ';
  W4 := ' ';
  I := 1;
  Looking := 'Y';
  WHILE Looking = 'Y'
  DO
    BEGIN
      { ������� ����,��������� ����� ������}
      W1 := W2;
      W2 := W3;
      W3 := W4;
      W4 := Str[I];
      I := I + 1;
      IF W4 = '&'
      THEN {����� ������}
        Looking := 'N';
      { �������� ���� ���  'land'}
      IF (W1 = 'l') AND (W2 = 'a') AND (W3 = 'n') AND (W4 = 'd')
      THEN{'land' �������}
        Looking := 'L';
      { �������� ���� ��� 'sea'}
      IF (W2 = 's') AND (W3 = 'e') AND (W4 = 'a')
      THEN{'sea' �������}
        Looking := 'S'
    END;
  {������� ��������� Sarah}
  IF Looking = 'L'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Looking = 'S'
    THEN
      WRITELN('The British coming by sea.')
    ELSE
      WRITELN('Sarah didn''t say')
END. {Sarah revere}



