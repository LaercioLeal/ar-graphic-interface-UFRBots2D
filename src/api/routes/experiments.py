from flask import request
from __main__ import app
from __main__ import formatResponse
from __main__ import get_db_connection

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