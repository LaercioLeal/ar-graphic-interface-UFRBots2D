from __main__ import app
from flask import request
from codes.methods import formatResponse

import os


# selecionar diretório de time
@app.route('/logplayer/start', methods=['POST'])
def startLogPlayer():
  data = request.get_json()
  path = data["path"]
  os.system(f"cd && rcssmonitor {path}")
  return formatResponse(False, { "message": "Sucesso" })
