from __main__ import app
from codes.methods import formatResponse, get_db_connection

# retornar todos os experimentos cadastrados
@app.route('/quiz/responses', methods=['GET'])
def getQuizResponses():
  
  querySelect= '''
    SELECT id, correctQuestions, incorrectQuestions, totalScore, createdAt
    FROM quizResponses q
  '''

  conn = get_db_connection()
  experiments = conn.execute(querySelect).fetchall()
  conn.close()
  response = []
  for experiment in experiments:
    response.append(
        {
            "id": experiment["id"], 
            "correctQuestions": experiment["correctQuestions"], 
            "incorrectQuestions": experiment["incorrectQuestions"], 
            "totalScore": experiment["totalScore"], 
            "createdAt": experiment["createdAt"]
        }
        )
  return formatResponse(False, response)