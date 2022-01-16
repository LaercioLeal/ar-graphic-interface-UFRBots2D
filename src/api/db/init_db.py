import sqlite3

def init():
  myPath = 'src/api/db/database.db'
  connection = sqlite3.connect(myPath)

  with open('src/api/db/schema.sql') as f:
    connection.executescript(f.read())
  connection.commit()
  connection.close()