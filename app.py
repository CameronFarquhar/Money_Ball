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



# DATABASE_URL will contain the database connection string:

# app.config['postgres://kvalhpepdbuvhv:09e57f6e3846ca029edfc1eb90f75adac21c97b6de71e9c3fefdb558986f6083@ec2-107-22-83-3.compute-1.amazonaws.com:5432/dcb4c4i5dpnqlr'] = os.environ.get('DATABASE_URL', '')




# Connects to the database using the app config
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)




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

@app.route("/Home.html")
def welcomeHome():
    return render_template("Home.html")

@app.route("/About-the-Team.html")
def About():
    return render_template("About-the-Team.html")

@app.route("/Map.html")
def Map():
    return render_template("Map.html")

@app.route("/MLB.html")
def mlb():
    return render_template("MLB.html")

@app.route("/MLS.html")
def mls():
    return render_template("MLS.html")

@app.route("/NBA.html")
def nba():
    return render_template("NBA.html")

@app.route("/NFL.html")
def nfl():
    return render_template("NFL.html")

@app.route("/NHL.html")
def nhl():
    return render_template("NHL.html")

@app.route("/Visuals.html")
def visuals():
    return render_template("Visuals.html")




@app.route("/api/MAP")
def mapApp():
    results_champion = pd.read_sql_query("SELECT * FROM champion_table", conn).to_dict()
    return results_champion

@app.route("/api/MLB")
def mlbApp():
    results_mlb = pd.read_sql_query("SELECT * FROM mlb", conn).to_dict()
    return results_mlb

@app.route("/api/MLS")
def mlsApp():
    results_mls = pd.read_sql_query("SELECT * FROM mls", conn).to_dict()
    return results_mls

@app.route("/api/NBA")
def nbaApp():
    results_nba = pd.read_sql_query("SELECT * FROM nba", conn).to_dict()
    return results_nba

@app.route("/api/NFL")
def nflApp():
    results_nfl = pd.read_sql_query("SELECT * FROM nfl", conn).to_dict()
    return results_nfl

@app.route("/api/NHL")
def nhlApp():
    results_nhl = pd.read_sql_query("SELECT * FROM nhl", conn).to_dict()
    return results_nhl

if __name__ == '__main__':
    app.run(debug=True)