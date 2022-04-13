from __main__ import app
from flask import request
from codes.methods import formatResponse, generateHash, get_db_connection

# retornar todos os ensaios cadastrados
@app.route('/experiments/training/data', methods=['POST'])
def getTrainingData():
  data = request.get_json()
  experiment_id = data["experiment_id"]

  conn = get_db_connection()
  data = conn.execute("SELECT * FROM training WHERE idExperiment='%s'" % experiment_id).fetchall()
  conn.close()
  response = []
  for d in data:
    response.append(
        {
          "id": d["id"], 
          'idExperiment': d["idExperiment"],
          'status': d["status"],
          'createdAt': d["createdAt"],
          'episodes': d["episodes"],
          'epsilon': d["epsilon"],
          'alpha': d["alpha"],
          'gamma': d["gamma"],
        }
        )
  return formatResponse(False, response)

# cadastrar um ensaio
@app.route('/experiments/training/data/add', methods=['POST'])
def addTraining():
    data = request.get_json()
    idExperiment = data["idExperiment"]
    createdAt = data["createdAt"]
    episodes = data["episodes"]
    epsilon = data["epsilon"]
    alpha = data["alpha"]
    gamma = data["gamma"]
    id = generateHash()

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute('INSERT INTO training ('+
        'id, '+
        'idExperiment, '+
        'status, '+
        'createdAt, '+
        'episodes,'+
        'epsilon,'+
        'alpha,'+
        'gamma'+
        ') VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      (
        id, 
        idExperiment, 
        'wait',
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
@app.route('/experiments/training/data/delete', methods=['POST'])
def deleteTraining():
    data = request.get_json()
    id = data["id"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("DELETE FROM training WHERE id='%s'" % id)
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio removido")

# atualziar um ensaio
@app.route('/experiments/training/data/update', methods=['POST'])
def updateTraining():
    data = request.get_json()
    id = data["id"]
    status = data["status"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("UPDATE training SET status='%s' WHERE id='%s'" % (status, id))
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio atualizado")

# executar um ensaio
@app.route('/experiments/training/run', methods=['POST'])
def runTraining():
    data = request.get_json()
    id = data["id"]
    episodes = data["episodes"]
    idExperiment = data["idExperiment"]

    results = []
    import random
    for episode in range(episodes):
      idResult = generateHash()
      gf = random.randint(1,5)
      gs = random.randint(1,5) * random.randint(0,2)
      sg = gf - gs
      results.append({
        'idResult': idResult,
        'idExperiment': idExperiment,
        'idTraining': id,
        'orderR': episode + 1,
        'gf': gf,
        'gs': gs,
        'sg': sg,
      })

    import time
    time.sleep(5)
    
    values = ""
    for result in results:
      idResult = result["idResult"]
      idExperiment = result["idExperiment"]
      idTraining = result["idTraining"]
      orderR = result["orderR"]
      gf = result["gf"]
      gs = result["gs"]
      sg = result["sg"]
      if (values == ""): values = f"('{idResult}','{idExperiment}','{idTraining}',{orderR},{gf},{gs},{sg})"
      else: values = f"{values},('{idResult}','{idExperiment}','{idTraining}',{orderR},{gf},{gs},{sg})"

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute('INSERT INTO results ('+
        'id, '+
        'idExperiment, '+
        'idTraining, '+
        'orderR, '+
        'gf,'+
        'gs,'+
        'sg'+
        f") VALUES {values}"
    )
    connection.commit()
    connection.close()

    status = "done"
    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("UPDATE training SET status='%s' WHERE id='%s'" % (status, id))
    connection.commit()
    connection.close()

    return formatResponse(False, [], "Ensaio finalizado")