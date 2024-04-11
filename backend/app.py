from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_cors import CORS
from bson.json_util import dumps
import json

uri = "mongodb+srv://convergent_user:nutrition_sucks123@cluster0.0rcimgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

app = Flask(__name__)
db = client.convergent
collection = db.users
CORS(app)

# class Event(db.Model):
#     # _id = db.Column(db.Integer, primary_key=True)
#     name = str

#     # def __repr__(self):
#     #     return f"Event: {self.name}"
    
#     def __init__(self, name):
#         self.name = name
    

@app.route("/events/post", methods=["POST"])
def insert_entry():
    req = request.get_json()
    insert_result = collection.insert_one(req)
    print(insert_result)
    # cocktail.id = PydanticObjectId(str(insert_result.inserted_id))
    # print(cocktail)
    return req
    # return event.to_json()

@app.route("/events/get", methods=["GET"])
def get_all():
    try:
        contacts =collection.find()
        return dumps(contacts)
    except Exception as e:
        return dumps({'error' : str(e)})

if __name__ == '__main__':
    # app.run()
    app.run(host='0.0.0.0', debug = True)
    # print("bruh")