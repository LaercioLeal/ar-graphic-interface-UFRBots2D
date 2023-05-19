import sqlite3
import os

def init():
  os.system('cd && mkdir -p UFRBots/simulacao/log && mkdir -p UFRBots/simulacao/log && mkdir -p UFRBots/simulacao/TIMES')

  with open('backend/db/schema.sql') as f:
    myPath = 'backend/db/database.db'
    connection = sqlite3.connect(myPath)
    connection.executescript(f.read())
    connection.commit()
    connection.close()