PROGRAM PrintInfo(INPUT, OUTPUT);
USES
  DOS;
BEGIN
  // http://localhost:4001/cgi-bin/task1.cgi/?name=ivan
  WRITELN(â€Content-Type: text/plainâ€);
  WRITELN;
  WRITELN(â€REQUEST_METHOD : â€, GetEnv(â€REQUEST_METHODâ€));
  WRITELN(â€QUERY_STRING   : â€, GetEnv(â€QUERY_STRINGâ€));
  WRITELN(â€CONTENT_LENGTH : â€, GetEnv(â€CONTENT_LENGTHâ€));
  WRITELN(â€HTTP_USER_AGENT: â€, GetEnv(â€HTTP_USER_AGENTâ€));
  WRITELN(â€HTTP_HOST      : â€, GetEnv(â€HTTP_HOSTâ€));
END.
