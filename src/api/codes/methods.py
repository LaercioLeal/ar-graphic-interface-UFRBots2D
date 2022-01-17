from flask import jsonify
import subprocess
import sqlite3

def get_db_connection():
    conn = sqlite3.connect('src/api/db/database.db')
    conn.row_factory = sqlite3.Row
    return conn

def getUserName():
  input_ = "who"
  var = subprocess.getoutput(input_)
  var = var.split()
  user_name = var[0]
  return user_name

def formatResponse(error, res, message="empty"):
  statusCode = 400 if error else 200
  msg = message if message != "empty" else "Error" if error else "Success"
  return jsonify(isError= error,
                    message= msg,
                    statusCode= statusCode,
                    data= res), 200