from flask import request
from __main__ import app
from codes.methods import getUserName
from codes.methods import formatResponse

import os             
import subprocess
from subprocess import Popen as new
from time import sleep

import time,threading

def command( cmd ):
  return os.system( cmd )

# retornar todos os experimentos cadastrados
@app.route('/match/run', methods=['GET'])
def startMatch():
  # mode: 1 - normal
  # mode: 2 - rápido
  mode = request.args.get('mode', default=1)
  path1 = request.args.get('path1', default=1).replace("\"","").replace(" ","\ ")
  path2 = request.args.get('path2', default=1).replace("\"","").replace(" ","\ ")

  # modo normal
  input_ = "cd && cd /home/" + getUserName() + "/log/current && rcssserver server::auto_mode = true"

  if (mode == 1):
    input_ = "cd && cd /home/" + getUserName() + "/log/current && rcssserver server::auto_mode = true server::nr_extra_halfs = 0 server::penalty_shoot_outs = false  server::synch_mode=true"


  #  iniciando servidor
  t1 = threading.Thread( target=command, args=(input_,) )

  # adicionando time 1
  print('\n')
  print(path1)
  input_ = 'cd && cd ' + str(path1) + ' && ./start.sh'
  # new(input_)
  t2 = threading.Thread( target=command, args=(input_,) )

  # adicionando time 2
  print(path2)
  print('\n')
  input_ = 'cd && cd ' + str(path2) + ' && ./start.sh'
  # var = subprocess.getoutput(input_)
  # print(var)
  t3 = threading.Thread( target=command, args=(input_,) )
  t1.start()
  sleep(2)
  t2.start()
  t3.start()

  # All threads running in parallel, now we wait
  res = t1.join()
  t2.join()
  t3.join()
  print('\n')
  print('\n')
  print(res)
  print('\n')
  print('\n')


  # falta pegar placar, ex: Score: 12 - 0

  message="partida finalizada"
  return formatResponse(False, [], message=message)