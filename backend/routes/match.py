from flask import request
from __main__ import app
from codes.methods import getUserName, formatResponse, generateHash, userName

import os             
import subprocess
from time import sleep
import io

import threading

RESULT_COMAND_SERVER = ''

def command( cmd, type=2 ):
  global RESULT_COMAND_SERVER
  if ( type == 1 ): 
    buffer = subprocess.getoutput( cmd )
    RESULT_COMAND_SERVER = str(buffer)
  else:
    os.system( cmd )

# retornar todos os experimentos cadastrados
@app.route('/match/run', methods=['GET'])
def startMatch(local=False, mode=2, path1='',path2=''):
  global RESULT_COMAND_SERVER
  # mode: 1 - normal
  # mode: 2 - rápido
  if (not local):
    mode = request.args.get('mode', default=1)
    training = request.args.get('training', default=1).replace("\"","").replace(" ","\ ")
    path1 = request.args.get('path1', default='1').replace("\"","").replace(" ","\ ")
    path2 = request.args.get('path2', default='1').replace("\"","").replace(" ","\ ")
  if (training == "training"):
    path1=f"/home/{userName()}/TIMES/AR_System"
    path2=f"/home/{userName()}/TIMES/AR_System_Reserva"

  # modo normal
  input_ = "cd && cd /home/" + getUserName() + "/log && rcssserver server::auto_mode = true"

  if (int(mode) == 2):
    input_ = "cd && cd /home/" + getUserName() + "/log && rcssserver server::auto_mode = true server::nr_extra_halfs = 0 server::penalty_shoot_outs = false  server::synch_mode=true"


  #  iniciando servidor
  t1 = threading.Thread( target=command, args=(input_,1) )

  # adicionando time 1
  input_ = 'cd && cd ' + str(path1) + ' && ./start.sh'
  t2 = threading.Thread( target=command, args=(input_,2) )

  # adicionando time 2
  input_ = 'cd && cd ' + str(path2) + ' && ./start.sh'
  t3 = threading.Thread( target=command, args=(input_,2) )

  t1.start()
  sleep(3)
  t2.start()
  sleep(1)
  t3.start()

  # All threads running in parallel, now we wait
  t1.join()
  t2.join()
  t3.join()

  # obtendo placar
  scores = ['0', '0']
  buf = io.StringIO(RESULT_COMAND_SERVER)
  limit = 10000
  while True:
    line = buf.readline()
    limit = limit - 1
    if (limit == 0):
      break
    if "Score" in line:
      scores = line.replace(" ","").replace("Score:","").replace("\n","").replace("\t","").split('-')
      break

  message="Partida finalizada"
  if (local):
    return tuple([int(scores[0]),int(scores[1])])
  if (training == "training"):
    import time
    time.sleep(5)
  return formatResponse(False, {'scores': {'team1': scores[0], 'team2': scores[1]}}, message=message)