-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "all_cities" (
    "City" VARCHAR   NOT NULL,
    CONSTRAINT "pk_all_cities" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "mlb" (
    "Team" VARCHAR (30),
    "City" VARCHAR (30),
    "State" VARCHAR (30),
    "Revenue" NUMERIC,
    "Population" NUMERIC,
    "Income" NUMERIC,
    "Points_For" NUMERIC,
    "Points_Against" NUMERIC,
    "Wins" NUMERIC,
    "Games" NUMERIC,
    "Wins_Per" NUMERIC,
    CONSTRAINT "pk_mlb" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "mls" (
    "Team" VARCHAR (30),
    "City" VARCHAR (30),
    "State" VARCHAR (30),
    "Revenue" NUMERIC,
    "Population" NUMERIC,
    "Income" NUMERIC,
    "Points_For" NUMERIC,
    "Points_Against" NUMERIC,
    "Wins" NUMERIC,
    "Games" NUMERIC,
    "Wins_Per" NUMERIC,
    CONSTRAINT "pk_mls" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "nba" (
    "Team" VARCHAR (30),
    "City" VARCHAR (30),
    "State" VARCHAR (30),
    "Revenue" NUMERIC,
    "Population" NUMERIC,
    "Income" NUMERIC,
    "Points_For" NUMERIC,
    "Points_Against" NUMERIC,
    "Wins" NUMERIC,
    "Games" NUMERIC,
    "Wins_Per" NUMERIC,
    CONSTRAINT "pk_nba" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "nfl" (
    "Team" VARCHAR (30),
    "City" VARCHAR (30),
    "State" VARCHAR (30),
    "Revenue" NUMERIC,
    "Population" NUMERIC,
    "Income" NUMERIC,
    "Points_For" NUMERIC,
    "Points_Against" NUMERIC,
    "Wins" NUMERIC,
    "Games" NUMERIC,
    "Wins_Per" NUMERIC,
    CONSTRAINT "pk_nfl" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "nhl" (
    "Team" VARCHAR (30),
    "City" VARCHAR (30),
    "State" VARCHAR (30),
    "Revenue" NUMERIC,
    "Population" NUMERIC,
    "Income" NUMERIC,
    "Points_For" NUMERIC,
    "Points_Against" NUMERIC,
    "Wins" NUMERIC,
    "Games" NUMERIC,
    "Wins_Per" NUMERIC,
    CONSTRAINT "pk_nhl" PRIMARY KEY (
        "City"
     )
);

ALTER TABLE "mlb" ADD CONSTRAINT "fk_mlb_City" FOREIGN KEY("City")
REFERENCES "all_cities" ("City");

ALTER TABLE "mls" ADD CONSTRAINT "fk_mls_City" FOREIGN KEY("City")
REFERENCES "all_cities" ("City");

ALTER TABLE "nba" ADD CONSTRAINT "fk_nba_City" FOREIGN KEY("City")
REFERENCES "all_cities" ("City");

ALTER TABLE "nfl" ADD CONSTRAINT "fk_nfl_City" FOREIGN KEY("City")
REFERENCES "all_cities" ("City");

ALTER TABLE "nhl" ADD CONSTRAINT "fk_nhl_City" FOREIGN KEY("City")
REFERENCES "all_cities" ("City");
