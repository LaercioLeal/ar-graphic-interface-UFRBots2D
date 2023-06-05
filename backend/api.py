import flask
from flask_cors import CORS
import db.init_db as db

#  inicializando banco de dados
db.init()

app = flask.Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*", "Access-Control-Allow-Origin": '*'}}, supports_credentials=True)
app.config["DEBUG"] = True

# importação dos arquivos de rotas
import routes.data
import routes.quiz
import routes.match
import routes.monitor
import routes.results
import routes.training
import routes.logPlayer
import routes.dashboard
import routes.directory
import routes.experiments

# inicializando api
port = 3001
host = 'localhost'
app.run(host=host, port=port)