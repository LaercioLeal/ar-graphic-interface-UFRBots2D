
from __main__ import app
from flask import request
from codes.methods import formatResponse
from codes.methods import get_db_connection

# retornar todos os ensaios cadastrados
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

# cadastrar um ensaio
@app.route('/experiments/data/training/add', methods=['POST'])
def addTraining():
    data = request.get_json()
    idExperiment = data["idExperiment"]
    createdAt = data["createdAt"]
    episodes = data["episodes"]
    epsilon = data["epsilon"]
    alpha = data["alpha"]
    gamma = data["gamma"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute('INSERT INTO training ('+
        'idExperiment, '+
        'done, '+
        'createdAt, '+
        'episodes,'+
        'epsilon,'+
        'alpha,'+
        'gamma'+
        ') VALUES (?, ?, ?, ?, ?, ?, ?)',
      (
        idExperiment, 
        False,
        createdAt,
        episodes,
        epsilon,
        alpha,
        gamma
      )
    )
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio adicionado")

# remove um ensaio através do id
@app.route('/experiments/data/training/delete', methods=['POST'])
def deleteTraining():
    data = request.get_json()
    id = data["id"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("DELETE FROM training WHERE id=%d" % id)
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio removido")

# atualziar um ensaio
@app.route('/experiments/data/training/update', methods=['POST'])
def updateTraining():
    data = request.get_json()
    id = data["id"]
    done = bool(data["done"])

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("UPDATE training SET done='%s' WHERE id=%d" % (done, id))
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio atualizado")