from flask import request
from __main__ import app
from __main__ import formatResponse
import os              

# retornar todos os experimentos cadastrados
@app.route('/monitor/open', methods=['GET'])
def openMonitor():
  mode = request.args.get('mode', default=1)
  input_ = "cd && rcssmonitor --auto-reconnect-mode on"
  message = 'Success - monitor com auto reconectividade'
  if (mode == 1):
    input_ = "cd && rcssmonitor"
    message = 'Success - monitor ligado para a partida atual'
  os.system(input_)
  return formatResponse(False, [], message=message)