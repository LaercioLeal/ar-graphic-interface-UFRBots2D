import flask
from flask_cors import CORS
import db.init_db as db

#  inicializando banco de dados
db.init()

app = flask.Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True

# importação dos arquivos de rotas
import routes.experiments
import routes.directory
import routes.monitor
import routes.match
import routes.data.get

# inicializando api
port = 3001
host = 'localhost'
app.run(host=host, port=port)