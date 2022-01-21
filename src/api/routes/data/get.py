
from __main__ import app
from flask import request
from codes.methods import formatResponse
from codes.methods import get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/experiments/data/training', methods=['POST'])
def getTrainingData():
  data = request.get_json()
  experiment_id = data["experiment_id"]

  conn = get_db_connection()
  data = conn.execute("SELECT * FROM training WHERE idExperiment=%d" % int(experiment_id)).fetchall()
  conn.close()
  response = []
  for d in data:
    response.append(
        {
          "id": d["id"], 
          'idExperiment': d["idExperiment"],
          'done': d["done"],
          'createdAt': d["createdAt"],
          'epsilon': d["epsilon"],
          'alpha': d["alpha"],
          'gamma': d["gamma"],
        }
        )
  return formatResponse(False, response)