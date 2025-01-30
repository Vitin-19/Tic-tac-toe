from flask import Flask, jsonify, request
from flask_cors import CORS
from joblib import load
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

model = load('./model.joblib')

@app.route('/aiTurn', methods=['POST'])
def aiTurn():
    game = request.get_json()
    
    if not game:
        print('Game situation has not been receivied')
        return jsonify({
            'message':'Game situation has not been recivied'
        }),400
    else:
        print('Game receivied succesfully:',game)
        
    gameSituation = pd.DataFrame([game])
    gameSituation.fillna(0,inplace=True)
    
    action = model.predict(gameSituation)
    if isinstance(action, (list, tuple, np.ndarray)):
        action = int(action[0])  
    else:
        action = int(action)
    
    print('Action:',action)
    
    return jsonify({
        'message':'AI played successfully',
        'action': action
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
        