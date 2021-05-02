import numpy as np
import pandas as pd
import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, redirect

from config import sqlkey
#################################################
# Database Setup
#################################################

conn = create_engine(f'postgresql://postgres:{sqlkey}@localhost:5432/Money_Ball_DB').connect()


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return render_template("Home.html")


@app.route("/api/Visuals")
def names():
    results_champion = pd.read_sql_query("SELECT * FROM champion_table", conn).to_dict()
    # results_nhl = pd.read_sql_query("SELECT * FROM nhl", conn).to_dict()
    return results_champion

# @app.route("/api/v1.0/Map")
# def map():
#     results = pd.read_sql_query("SELECT * FROM champion_table", conn).to_dict()
#     return results

if __name__ == '__main__':
    app.run(debug=True)