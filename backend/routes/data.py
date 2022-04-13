from __main__ import app
from flask import request
from codes.methods import formatResponse, generateHash, get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/experiments/general/data', methods=['POST'])
def getDataByExperimentId():
    data = request.get_json()
    id = data["id"]

    # pegar todos os ensaios
    # para cada ensaio pegar todos os resultados
    # agrupar por combinação
    # para cada combinação [SOMA][MÉDIA](gs, gf, sg)

    querySelect= f'''
      SELECT
        t.id, t.status, t.episodes,
        t.epsilon, t.gamma, t.alpha,
        SUM(r.gf) as sum_gf,
        SUM(r.gs) as sum_gs,
        SUM(r.sg) as sum_sg,
        AVG(r.gf) as avg_gf,
        AVG(r.gs) as avg_gs,
        AVG(r.sg) as avg_sg
      FROM 
        training t, results r
      WHERE 
        t.idExperiment='{id}' AND
        t.status like 'done' AND
        r.idTraining=t.id
      GROUP BY t.epsilon, t.gamma, t.alpha
    '''

    conn = get_db_connection()
    rows = conn.execute(querySelect).fetchall()
    conn.close()
    trainings = []

    for row in rows:
      trainings.append([x for x in row]) # or simply data.append(list(row))

    return formatResponse(False, 
      {
        "id": id, 
        "trainings": trainings
      }
    )