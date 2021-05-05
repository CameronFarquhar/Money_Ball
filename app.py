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


@app.route("/api/Map")
def map():
    results_champion = pd.read_sql_query("SELECT * FROM champion_table", conn).to_dict()
    return results_champion

@app.route("/api/MLB")
def mlb():
    results_mlb = pd.read_sql_query("SELECT * FROM mlb", conn).to_dict()
    return results_mlb

@app.route("/api/MLS")
def mls():
    results_mls = pd.read_sql_query("SELECT * FROM mls", conn).to_dict()
    return results_mls

@app.route("/api/NBA")
def nba():
    results_nba = pd.read_sql_query("SELECT * FROM nba", conn).to_dict()
    return results_nba

@app.route("/api/NFL")
def nfl():
    results_nfl = pd.read_sql_query("SELECT * FROM nfl", conn).to_dict()
    return results_nfl

@app.route("/api/NHL")
def nhl():
    results_nhl = pd.read_sql_query("SELECT * FROM nhl", conn).to_dict()
    return results_nhl


if __name__ == '__main__':
    app.run(debug=True)