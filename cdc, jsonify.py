from flask import Flask, jsonify
from flask_cors import CORS
import requests

app=Flask(__name__)
CORS(app)

@app.route('/cdc_data', method=['GET'])
def get_cdc_data():
    cdc_api_url = 'https://data.cdc.gov/resource/2ew6-ywp6.json?$query=SELECT%20%60wwtp_jurisdiction%60%2C%20%60date_start%60%2C%20%60date_end%60%2C%20%60percentile%60'
    try:
        response = requests.get(cdc_api_url)
        response.raise_for_status()

        cdc_data=response.json()
        return jsonify(cdc_data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Failed to fetch CDC data', 'details': str(e)}), 500
    
    if __name__== '__main__':
        app.run(debug=True)

        
