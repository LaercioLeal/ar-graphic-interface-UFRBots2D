from __main__ import app
from flask import request
from codes.methods import formatResponse, generateHash, get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/experiments', methods=['GET'])
def getExperiments():
  
  querySelect= '''
    SELECT 
      id, title, createdAt, 
      ifnull((
        SELECT 
          sum(t.status = 'done')
        FROM training t
        WHERE t.idExperiment = e.id
      ),0) as done,
      (
        SELECT 
          count(*)
        FROM training t
        WHERE t.idExperiment = e.id
      ) as total
    FROM experiments e
  '''

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = []
  for experiment in experiments:
    response.append(
        {
            "id": experiment["id"], 
            "done": experiment["done"], 
            "total": experiment["total"], 
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
    id = generateHash()

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("INSERT INTO experiments (id, title, createdAt) VALUES (?, ?, ?)",(id, title, createdAt))
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Experimento adicionado")

# remove um experimento através do id
@app.route('/experiments/delete', methods=['POST'])
def deleteExperiment():
    data = request.get_json()
    id = data["id"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("DELETE FROM experiments WHERE id='%s'" % id)
    cur.execute("DELETE FROM training WHERE idExperiment='%s'" % id)
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Experimento removido")

# atualziar um experimento
@app.route('/experiments/update', methods=['POST'])
def updateExperiment():
    data = request.get_json()
    id = data["id"]
    title = data["title"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute("UPDATE experiments SET title='%s' WHERE id='%s';" % (title, id))
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Experimento atualizado")