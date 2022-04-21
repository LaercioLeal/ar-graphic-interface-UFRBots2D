from __main__ import app
from flask import request
from codes.methods import formatResponse, userName

import os, glob

# retornar arquivos .rcg para listagem
@app.route('/logplayer/logs', methods=['GET'])
def getLogs():
  dir = request.args.get('dir', default=1)
  logs = []
  if (dir == 'default'): 
    dir = f"/home/{userName()}/log"

  try:
    os.chdir(dir)
    for file in glob.glob("*.rcg"):
      parts = file.replace(".rcg","").split('-')

      createdAt = f"{parts[0][0:4]}/{parts[0][4:6]}/{parts[0][6:8]}"

      placar1 = parts[1].split('_')
      time1 = placar1[0]

      placar1 = placar1[len(placar1)-1]

      placar2 = parts[3].split('_')
      time2 = placar2[0]
      placar2 = placar2[len(placar2)-1]

      logs.append({
        "file": file,
        "path": dir,
        "placar1": placar1,
        "placar2": placar2,
        "time1": time1,
        "time2": time2,
        "createdAt": createdAt
      })
    return formatResponse(False, { "logs": logs })
  except:
    return formatResponse(True, { "logs": [], "message": "diretório não encontrado!" })

# selecionar diretório de time
@app.route('/logplayer/start', methods=['POST'])
def startLogPlayer():
  data = request.get_json()
  path = data["path"]
  os.system(f"cd && rcssmonitor {path}")
  return formatResponse(False, { "message": "Sucesso" })
