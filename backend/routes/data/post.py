from __main__ import app
from flask import request
from codes.methods import formatResponse
from codes.methods import get_db_connection

# cadastrar um ensaio
@app.route('/experiments/data/training/add', methods=['POST'])
def addExperiment():
    data = request.get_json()
    idExperiment = data["idExperiment"]
    createdAt = data["createdAt"]
    episodes = data["episodes"]
    epsilon = data["epsilon"]
    alpha = data["alpha"]
    gamma = data["gamma"]

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute('''
      INSERT INTO experiments (
        idExperiment, 
        done, 
        createdAt, 
        episodes,
        epsilon,
        alpha,
        gamma
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ''',
      (
        idExperiment, 
        'false',
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