from __main__ import app
from requests import request
from codes.methods import formatResponse, generateHash, get_db_connection

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

# cadastrar uma resposta de quiz
@app.route('/quiz/responses', methods=['POST'])
def addQuizResponse():
    data = request.get_json()
    id = generateHash()
    correctQuestions = data["correctQuestions"]
    incorrectQuestions = data["incorrectQuestions"]
    totalScore = data["totalScore"]
    createdAt = data["createdAt"]
    

    connection = get_db_connection()
    cur = connection.cursor()
    cur.execute('INSERT INTO quizResponses ('+
        'id, '+
        'correctQuestions, '+
        'incorrectQuestions,'+
        'totalScore,'+
        'createdAt'+
        ') VALUES (?, ?, ?, ?, ?)',
      (
        id, 
        correctQuestions, 
        incorrectQuestions,
        totalScore,
        createdAt
      )
    )
    connection.commit()
    connection.close()
    return formatResponse(False, [], "Resposta adicionada")