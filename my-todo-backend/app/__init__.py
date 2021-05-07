import json
import random
from flask import Flask, jsonify,requests


app = Flask(__name__)
app.config.update(dict(
    SECRET_KEY = "secret",
    DEBUG = True,
))
users=[]
usersTasks={}

@app.route('/')
def AddUser():
    
    try:
        User=requests.get('user')
        if(User):
            if User in users:
                return "User Already Exists"
            else:
                users.append(User)
                return "User Added"
        else:
            return False
    except:
        return {
            "res":"Server Error"
        }



    
@app.route('/')
def UserAddTask():
    return

@app.route('/')
def RemoveTask():
    return
@app.route('/')
def RemoveUser():
    try:
        User=requests.get('user')
        if User in users:
            remove user
        else:
            return False
    except:
        return {
            "res":"Server Error"
        }


if __name__ == '__main__':
    app.run(debug=True)
    