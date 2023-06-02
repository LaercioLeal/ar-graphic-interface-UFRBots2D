import sqlite3
import os
from codes.methods import getLogDirectory, getTeamDirectory
 
def init():
  os.system('cd && mkdir -p ' + getLogDirectory() + ' && mkdir -p ' + getTeamDirectory())

  with open('backend/db/schema.sql') as f:
    myPath = 'backend/db/database.db'
    connection = sqlite3.connect(myPath)
    connection.executescript(f.read())
    connection.commit()
    connection.close()