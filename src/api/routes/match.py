from flask import request
from __main__ import app
from codes.methods import formatResponse

import os             
import subprocess
from time import sleep

# retornar todos os experimentos cadastrados
@app.route('/match/run', methods=['GET'])
def startMatch():
  # mode: 1 - normal
  # mode: 2 - rápido
  mode = request.args.get('mode', default=1)
  path1 = request.args.get('path1', default=1).replace("\"","")
  path2 = request.args.get('path2', default=1).replace("\"","")

  # modo normal
  input_ = "cd log/current && rcssserver server::auto_mode = true"

  if (mode == 1):
    input_ = "cd log/current && rcssserver server::auto_mode = true server::nr_extra_halfs = 0 server::penalty_shoot_outs = false  server::synch_mode=true"

  print('\n')
  print(path1, path2)
  print('\n')
  os.system(input_)
  sleep(1)
  input_ = 'cd && cd ' + path1 + ' && ./start.sh'
  os.system(input_)
  input_ = 'cd && cd ' + path2 + ' && ./start.sh'
  var = subprocess.getoutput(input_)
  print(var)
  message="partida finalizada"
  return formatResponse(False, [], message=message)