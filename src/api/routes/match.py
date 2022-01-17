from flask import request
from __main__ import app
from codes.methods import formatResponse
import subprocess              

# retornar todos os experimentos cadastrados
@app.route('/match/run', methods=['GET'])
def startMatch():
  # mode: 1 - normal
  # mode: 2 - rápido
  mode = request.args.get('mode', default=1)

  # modo normal
  input_ = "cd log/current && rcssserver server::auto_mode = true"

  if (mode == 1):
    input_ = "cd log/current && rcssserver server::auto_mode = true server::nr_extra_halfs = 0 server::penalty_shoot_outs = false  server::synch_mode=true"

  var = subprocess.getoutput(input_)
  message="partida finalizada"
  return formatResponse(False, [], message=message)