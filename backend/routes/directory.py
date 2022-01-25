from __main__ import app
from codes.methods import getUserName
from codes.methods import formatResponse


import os
from tkinter import *
from tkinter import filedialog

# selecionar diretório de time
@app.route('/directory', methods=['GET'])
def getDirectory():
  gui = Tk()
  gui.geometry('')
  gui.withdraw()
  gui.directory = filedialog.askdirectory(
            initialdir = "/home/" + getUserName() + '/TIMES',
            title = "Acesse diretório do time",
        )
  path = gui.directory
  paths = path
  teamName = path
  gui.destroy()
  gui.quit()
  if (path != ()):
    paths = path.split('/')
    teamName = paths[len(paths) - 1]
  else:
    return formatResponse(False, { "path": '', "teamName": '' })

  # verificando se a pasta é de um time agent2d ou uva
  isExists = (os.path.exists(path + '/start.sh') or  os.path.exists(path + 'src/start.sh'))

  if ( isExists ):
    return formatResponse(False, { "path": path, "teamName": teamName })
  else:
    return formatResponse(True, { "path": path, "teamName": teamName }, " Diretório de time inválido!")
