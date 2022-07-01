import logging
import http.server as server
import socketserver
import getpass

class MyHTTPHandler(server.SimpleHTTPRequestHandler):
    def  log_message(self, format, *args) -> None:
        logging.info("%s - - [%s] %s\n"% (
            self.client_address[0],
            self.log_date_time_string(),
            format%args
        ))