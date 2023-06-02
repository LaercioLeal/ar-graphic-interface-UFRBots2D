from flask import jsonify
import subprocess
import sqlite3
from hashlib import blake2b
from time import sleep
import time

def userName():
  input_ = "who" 
  var = subprocess.getoutput(input_)
  var = var.split()
  return var[0]

def generateHash():
  k = str(time.time()).encode('utf-8')
  h = blake2b(key=k, digest_size=16)
  return h.hexdigest()

def get_db_connection():
  try:
    conn = sqlite3.connect('./backend/db/database.db')
  except sqlite3.OperationalError:
    sleep(2)
    sqlite3.connect('./backend/db/database.db').close()
    sleep(2)
    conn = sqlite3.connect('./backend/db/database.db')

  conn.row_factory = sqlite3.Row
  return conn

def getUserName():
  input_ = "who"
  var = subprocess.getoutput(input_)
  var = var.split()
  user_name = var[0]
  return user_name

def getFullDirectory():
  return getUserName() + "/UFRBots/simulacoes"

def getTeamDirectory():
  return getFullDirectory() + "/TIMES"

def getLogDirectory():
  return getFullDirectory() + "/logs"

def formatResponse(error, res, message="empty"):
  statusCode = 400 if error else 200
  msg = message if message != "empty" else "Error" if error else "Success"
  return jsonify(isError= error,
                    message= msg,
                    statusCode= statusCode,
                    data= res), 200