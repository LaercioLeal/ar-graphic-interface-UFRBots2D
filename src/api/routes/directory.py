from __main__ import app
from __main__ import getUserName
from __main__ import formatResponse


import os
from tkinter import *
from tkinter import filedialog

# selecionar diretório de time
@app.route('/directory', methods=['GET'])
def getDirectory():
  gui = Tk()
  gui.geometry("400x300")
  gui.withdraw()
  gui.directory = filedialog.askdirectory(
            initialdir = "/home/" + getUserName() + "/Documents/",
            title = "Acesse diretório do time"
        )
  path = gui.directory
  paths = path.split('/')
  teamName = paths[len(paths) - 1]
  gui.destroy()
  gui.quit()

  # verificando se a pasta é de um time agent2d ou uva
  
  isExists = (os.path.exists(path + '/start.sh') or  os.path.exists(path + 'src/start.sh'))

  if ( isExists ):
    return formatResponse(False, { "path": path, "teamName": teamName })
  else:
    return formatResponse(True, { "path": path, "teamName": teamName }, " Diretório de time inválido!")
