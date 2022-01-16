import flask
from flask import request, jsonify
from flask_cors import CORS

from tkinter import *
from tkinter import filedialog

import os
import subprocess

import sqlite3

import asyncio

threads = []

def get_db_connection():
    conn = sqlite3.connect('db/database.db')
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

def formatResponse(error, res):
  statusCode = 400 if error else 200
  message = "Error" if error else "Success"
  return jsonify(isError= error,
                    message= message,
                    statusCode= statusCode,
                    data= res), statusCode

# rota de status do servidor
@app.route('/', methods=['GET'])
def home():
  return formatResponse(False, [])

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
  return formatResponse(False, { "path": path, "teamName": teamName })

# retornar todos os experimentos cadastrados
@app.route('/experiments/<experiment_id>', methods=['GET'])
def experiments():
  querySelect= 'SELECT * FROM experiments'
  
  if (experiment_id):
    querySelect = 'SELECT * FROM experiments WHERE id=' + experiment_id

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = []
  for experiment in experiments:
      response.append(
          {
              "id": contact["id"], 
              "title": contact["title"], 
              "createdAt": contact["createdAt"]
          }
          )
  return formatResponse(False, response)

app.run(host='localhost', port=3001)