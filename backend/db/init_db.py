import sqlite3
import os

def init():
  os.system('cd && mkdir -p log && mkdir -p log && mkdir -p TIMES')
  myPath = 'backend/db/database.db'
  connection = sqlite3.connect(myPath)

  with open('backend/db/schema.sql') as f:
    connection.executescript(f.read())
  connection.commit()
  connection.close()