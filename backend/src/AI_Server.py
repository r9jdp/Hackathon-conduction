import re
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/parse', methods=['POST'])
def parse():
    data = request.json
    myval = data['data']
    json_data = re.sub(r'```json\n|```', '', myval)
    print(json_data)
    return jsonify(json_data)

if __name__ == '__main__':
    app.run(debug=True)
