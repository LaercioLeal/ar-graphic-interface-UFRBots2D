import sqlite3
import os

def init():
  os.system('mkdir log && mkdir log/current && mkdir log/all')
  myPath = 'src/api/db/database.db'
  connection = sqlite3.connect(myPath)

  with open('src/api/db/schema.sql') as f:
    connection.executescript(f.read())
  connection.commit()
  connection.close()