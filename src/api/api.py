import flask
from flask import jsonify
from flask_cors import CORS

import subprocess
import sqlite3
from sqlite3 import Error

import db.init_db as db

db.init()

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

app = flask.Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config["DEBUG"] = True

def formatResponse(error, res, message="empty"):
  statusCode = 400 if error else 200
  msg = message if message != "empty" else "Error" if error else "Success"
  return jsonify(isError= error,
                    message= msg,
                    statusCode= statusCode,
                    data= res), 200

# import declared routes
import routes.experiments
import routes.directory
import routes.monitor

app.run(host='localhost', port=3001)