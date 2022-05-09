from __main__ import app
from codes.methods import formatResponse, generateHash, get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/dashboard', methods=['GET'])
def getResumeDashboard():
  
  querySelect= '''
    SELECT count(t.id) as training, sum(t.episodes) as episodes,
      (
        SELECT count(e.id)
        FROM experiments e
      ) as experiments,
      (
        SELECT sum(qr.totalScore)/count(qr.id)
        FROM quizResponses qr
      ) as quiz
    FROM training t 
  '''

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = []
  for experiment in experiments:
    response.append({
      "quiz": experiment["quiz"], 
      "training": experiment["training"], 
      "episodes": experiment["episodes"], 
      "experiments": experiment["experiments"], 
    })
  return formatResponse(False, response)