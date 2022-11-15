import sqlite3
import os

def init():
  os.system('cd && mkdir -p log && mkdir -p log && mkdir -p TIMES')

  with open('backend/db/schema.sql') as f:
    myPath = 'backend/db/database.db'
    connection = sqlite3.connect(myPath)
    connection.executescript(f.read())
    connection.commit()
    connection.close()