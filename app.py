# Import the dependencies.
# import datetime as dt
import numpy as np
import requests

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
import sqlite3

#################################################
# Database Setup
#################################################


#con = sqlite3.connect("covid.sqlite")        
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/home")
def home():
    return render_template('index.html')


@app.route("/api/v1.0/Covid_Facts")
def covidFacts():
    return render_template('facts.html')

@app.route("/api/v1.0/covid_bar")
def covid_bar():

    
    con = sqlite3.connect("covid20.sqlite")
    cur = con.cursor()
    query = """
	SELECT Location, sum(Administered) FROM 'covid20' group by Location order by Location
	desc

	"""         

    results = cur.execute(query).fetchall()
    return render_template('barChart.html')

@app.route("/api/v1.0/age_bar")
def age_bar():

    
    con = sqlite3.connect("covid20.sqlite")
    cur = con.cursor()
    query = """
	SELECT sum(Administered_5Plus), sum(Administered_12Plus), sum(Administered_18Plus), sum(Administered_65Plus) FROM 'covid20' 

	"""

    results = cur.execute(query).fetchall()
    return jsonify(results)


#@app.route('/cdc_data')
#def get_cdc_data():
    #cdc_api_url = 'https://data.cdc.gov/resource/2ew6-ywp6.json?$query=SELECT%20%60wwtp_jurisdiction%60%2C%20%60date_start%60%2C%20%60date_end%60%2C%20%60percentile%60'
    #response = requests.get(cdc_api_url).json()

    #return jsonify(response)
    
@app.route('/cdc_data')
def get_cdc_data():
    con = sqlite3.connect("seward.sqlite")
    cur = con.cursor()
    query = """
	SELECT wwtp_jurisdiction, date_start, date_end, percentile FROM 'NWSS_Public_SARS-CoV-2_Wastewater_Metric_Data' 
	

	"""
    

if __name__ == '__main__':
    app.run(debug=True)
