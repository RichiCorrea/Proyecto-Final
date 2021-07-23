"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from flask_jwt_extended import JWTManager
from models import Biker, db , Helper, Taller, Blog, Comment



""" Base = declarative_base()


class Biker(Base):
    __tablename__ = "biker"
    id = Column(Integer, primary_key = True)
    bikername = Column(String, unique = True)
    firstname = Column(String)
    lastname = Column(String) 
    email = Column(String,unique=True)

class Helper(Base):
    __tablename__ = "helper"
    id = Column(Integer, primary_key = True)
    biker_id = Column(Integer, ForeignKey("biker.id"))
    biker = relationship(Biker)
    taller_id = Column(Integer, ForeignKey("taller.id"))
    taller = relationship(Taller)


class Taller(Base):
    __tablename__ = "taller"
    id = Column(Integer, primary_key = True)
    tallername = Column(String, unique = True)
    name = Column(String)
    email = Column(String,unique=True)

class Blog(Base):
    __tablename__ = "post"
    id = Column(Integer, primary_key = True)
    biker_id = Column(Integer, ForeignKey("biker.id"))
    biker = relationship(Biker)
    taller_id = Column(Integer, ForeignKey("taller.id"))
    taller = relationship(Taller)

class Comment(Base):
    __tablename__ = "comment"
    id = Column(Integer, primary_key = True)
    comment_text = Column(String)
    author_id = Column(Integer, ForeignKey("biker.id"))
    user = relationship(User)
    blog_id = Column(Integer, ForeignKey("blog.id"))
    blog = relationship(Blog) """

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT-SECRET')  # Change this!
jwt = JWTManager(app)


# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
