from __main__ import app
from flask import request
from codes.methods import formatResponse, generateHash, get_db_connection

# retornar todos os ensaios cadastrados
@app.route('/experiments/training/result/data', methods=['POST'])
def getResults():
  data = request.get_json()
  idTraining = data["idTraining"]

  conn = get_db_connection()
  data = conn.execute('''SELECT r.*, (
        SELECT 
          title
        FROM experiments e
        WHERE e.id = r.idExperiment
      ) as experimentTitle''' + " FROM results r WHERE idTraining='%s'" % idTraining).fetchall()
  conn.close()
  response = []
  for d in data:
    response.append(
      {
        "id": d["id"], 
        'experiment': {"title": d["experimentTitle"]},
        'idExperiment': d["idExperiment"],
        'idTraining': d["idTraining"],
        'order': d["numResult"],
        'gf': d["gf"],
        'gs': d["gs"],
        'sg': d["sg"],
      }
    )
  return formatResponse(False, response)
