from flask import request
from __main__ import app
from codes.methods import formatResponse
from codes.methods import get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/experiments', methods=['GET'])
def getExperiments():
  querySelect= 'SELECT * FROM experiments'

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = []
  for experiment in experiments:
      response.append(
          {
              "id": experiment["id"], 
              "title": experiment["title"], 
              "createdAt": experiment["createdAt"]
          }
          )
  return formatResponse(False, response)

# cadastrar um experimento
@app.route('/experiments/add', methods=['POST'])
def addExperiment():
    data = request.get_json()
    title = data["title"]
    createdAt = data["createdAt"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("INSERT INTO experiments (title, createdAt) VALUES (?, ?)",(title, createdAt))
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Experimento adicionado")

# retornar os detalhes de um experimento
@app.route('/experiments/detail/<experiment_id>', methods=['GET'])
def getExperimentDetail():
  experiment_id = request.args.get('experiment_id')
  querySelect = 'SELECT * FROM experiments WHERE id=' + experiment_id

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = {
    "id": experiments[0]["id"], 
    "title": experiments[0]["title"], 
    "createdAt": experiments[0]["createdAt"]
  }
  return formatResponse(False, response)