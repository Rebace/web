PROGRAM SarahRevere(INPUT, OUTPUT);
  {ѕечать сообщени€ о том как идут британцы,
   в зависимости от того,первым во входе встречаетс€
  'land' или 'sea'.}
USES
  DOS;
VAR
  W1, W2, W3, W4, Looking: CHAR;
  Str: STRING;
  I: INTEGER;
BEGIN {SarahRevere}
  {инициализаци€ W1,W2,W3,W4,Looking}
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
      { ƒвигать окно,провер€ть конец данных}
      W1 := W2;
      W2 := W3;
      W3 := W4;
      W4 := Str[I];
      I := I + 1;
      IF W4 = '&'
      THEN { онец данных}
        Looking := 'N';
      { ѕроверка окна дл€  'land'}
      IF (W1 = 'l') AND (W2 = 'a') AND (W3 = 'n') AND (W4 = 'd')
      THEN{'land' найдено}
        Looking := 'L';
      { ѕроверка окна дл€ 'sea'}
      IF (W2 = 's') AND (W3 = 'e') AND (W4 = 'a')
      THEN{'sea' найдено}
        Looking := 'S'
    END;
  {создать сообщение Sarah}
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



