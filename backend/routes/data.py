from __main__ import app
from flask import request
from codes.methods import formatResponse, get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/experiments/general/data', methods=['GET'])
def getDataByExperimentId():
    id = request.args.get('id', default=1)

    querySelect= f'''
      SELECT
        t.id, t.episodes,
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

    combinacaoId = 0
    for row in rows:
      combinacaoId = combinacaoId + 1
      trainings.append({
          "id": row["id"],
          "combinacao": combinacaoId,
          "episodes": row["episodes"],
          "epsilon": row["epsilon"],
          "gamma": row["gamma"],
          "alpha": row["alpha"],
          "sum": {
            "gf": row["sum_gf"],
            "gs": row["sum_gs"],
            "sg": row["sum_sg"],
          },
          "avg": {
            "gf": row["avg_gf"],
            "gs": row["avg_gs"],
            "sg": row["avg_sg"],
          },
      })

    return formatResponse(False, 
      {
        "id": id, 
        "trainings": trainings
      }
    )