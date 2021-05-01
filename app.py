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

# reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

# # Save reference to the table
# Passenger = Base.classes.nba

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


@app.route("/Visuals")
def names():
    results = pd.read_sql_query("SELECT * FROM nba", conn).to_dict()
    return results

# @app.route("/api/v1.0/Map")
# def names():
#     results = pd.read_sql_query("SELECT * FROM champion_table", conn).to_dict()
#     return results, nfl_results, 

if __name__ == '__main__':
    app.run(debug=True)