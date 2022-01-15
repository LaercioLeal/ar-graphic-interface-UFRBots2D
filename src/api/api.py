import flask
from flask import request, jsonify
from flask_cors import CORS

import sqlite3

import asyncio

threads = []

def get_db_connection():
    conn = sqlite3.connect('db/database.db')
    conn.row_factory = sqlite3.Row
    return conn

app = flask.Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config["DEBUG"] = True

# rota de status do servidor
@app.route('/', methods=['GET'])
def home():
    return jsonify({ "message": "running .." })

# retornar todos os experimentos cadastrados
@app.route('/experiments', methods=['GET'])
def experiments():
    return jsonify({ "experiments": [{"title": "experiment base"}] })

app.run(host='localhost', port=3001)