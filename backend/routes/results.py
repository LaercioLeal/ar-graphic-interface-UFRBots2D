from __main__ import app
from flask import request
from codes.methods import formatResponse, generateHash, get_db_connection

# cadastrar um resultado
@app.route('/experiments/training/result/add', methods=['POST'])
def addResult():
    data = request.get_json()
    results = data["results"]

    connection = get_db_connection()
    cur = connection.cursor()

    for result in results:
      id = generateHash()
      idExperiment = result.idExperiment
      idTraining = result.idTraining
      numResult = result.numResult
      gf = result.gf
      gs = result.gs
      sg = result.sg

      cur.execute('INSERT INTO results ('+
          'id, '+
          'idExperiment, '+
          'idTraining, '+
          'numResult, '+
          'gf,'+
          'gs,'+
          'sg'+
          ') VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        (
          id, 
          idExperiment, 
          idTraining,
          numResult,
          gf,
          gs,
          sg,
        )
      )

    connection.commit()
    connection.close()
    return formatResponse(False, [], "Ensaio adicionado")
