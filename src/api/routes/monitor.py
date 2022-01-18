from flask import request
from __main__ import app
from codes.methods import formatResponse
import os             
import threading 

def command( cmd ):
  os.system( cmd )

# retornar todos os experimentos cadastrados
@app.route('/monitor/open', methods=['GET'])
def openMonitor():
  mode = request.args.get('mode', default=1)
  input_ = "cd && rcssmonitor --auto-reconnect-mode on"
  message = 'Success - monitor com auto reconectividade'
  if (mode == 1):
    input_ = "cd && rcssmonitor"
    message = 'Success - monitor ligado para a partida atual'
  t1 = threading.Thread( target=command, args=(input_,) )
  t1.start()
  return formatResponse(False, [], message=message)