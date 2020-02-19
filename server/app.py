from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from datetime import datetime
import time
import math
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socket_io = SocketIO(app, cors_allowed_origins="*")

messages = []
users = []


class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


@app.route("/send", methods=['POST'])
def get_message():
    """
    get message
    input: {
        "user_name": str,
        "id": int,
        "text": str
    }
    output: ({"status": "ok"}, status code}
    """

    data = request.json
    id = data["id"]
    name = data["name"]
    text = data["text"]

    found_user = next((item for item in users if item["id"] == id), False)
    if not found_user:
        raise InvalidUsage('Not Auth', status_code=401)

    values = {"user_id": id, "name": name, "text": text, "time": datetime.now().strftime("%H:%M:%S")}
    messages.append(values)
    socket_io.emit('message', messages)
    return make_response(jsonify({"status": "ok"}), 201)


@app.route("/auth", methods=['POST'])
def auth():
    """
    auth user
    input: {
        "name": str,
        "password": str
    }
    output: {"id": int, "name": str}
    """

    data = request.json
    name = data["name"]
    password = data["password"]

    new_user = {"name": name, "password": password, "id": math.ceil(time.time())}
    found_user = next((item for item in users if item["name"] == name), False)

    if not found_user:
        users.append(new_user)
        return jsonify({"id": new_user["id"], "name": new_user["name"]})
    elif found_user['password'] != password:
        raise InvalidUsage('Wrong Data', status_code=400)
    else:
        return jsonify({"id": found_user["id"], "name": found_user["name"]})


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


if __name__ == '__main__':
    socket_io.run(app, debug=True)
