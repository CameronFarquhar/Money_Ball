-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

CREATE TABLE "all_cities" (
    "City" VARCHAR   NOT NULL,
    CONSTRAINT "pk_all_cities" PRIMARY KEY (
        "City"
     )
);

CREATE TABLE "mlb" (
    "Team" VARCHAR   NOT NULL,
    "City" VARCHAR   NOT NULL,
    "State" VARCHAR   NOT NULL,
    "Revenue" INT   NOT NULL,
    "Population" INT   NOT NULL,
    "Income" INT   NOT NULL,
    "Points_For" INT   NOT NULL,
    "Points_Against" INT   NOT NULL,
    "Wins" INT   NOT NULL,
    "Games" INT   NOT NULL,
    "Wins_Per" DEC   NOT NULL
);

CREATE TABLE "mls" (
    "Team" VARCHAR   NOT NULL,
    "City" VARCHAR   NOT NULL,
    "State" VARCHAR   NOT NULL,
    "Revenue" INT   NOT NULL,
    "Population" INT   NOT NULL,
    "Income" INT   NOT NULL,
    "Points_For" INT   NOT NULL,
    "Points_Against" INT   NOT NULL,
    "Wins" INT   NOT NULL,
    "Games" INT   NOT NULL,
    "Wins_Per" DEC   NOT NULL
);

CREATE TABLE "nba" (
    "Team" VARCHAR   NOT NULL,
    "City" VARCHAR   NOT NULL,
    "State" VARCHAR   NOT NULL,
    "Revenue" INT   NOT NULL,
    "Population" INT   NOT NULL,
    "Income" INT   NOT NULL,
    "Points_For" INT   NOT NULL,
    "Points_Against" INT   NOT NULL,
    "Wins" INT   NOT NULL,
    "Games" INT   NOT NULL,
    "Wins_Per" DEC   NOT NULL
);

CREATE TABLE "nfl" (
    "Team" VARCHAR   NOT NULL,
    "City" VARCHAR   NOT NULL,
    "State" VARCHAR   NOT NULL,
    "Revenue" INT   NOT NULL,
    "Population" INT   NOT NULL,
    "Income" INT   NOT NULL,
    "Points_For" INT   NOT NULL,
    "Points_Against" INT   NOT NULL,
    "Wins" INT   NOT NULL,
    "Games" INT   NOT NULL,
    "Wins_Per" DEC   NOT NULL
);

CREATE TABLE "nhl" (
    "Team" VARCHAR   NOT NULL,
    "City" VARCHAR   NOT NULL,
    "State" VARCHAR   NOT NULL,
    "Revenue" INT   NOT NULL,
    "Population" INT   NOT NULL,
    "Income" INT   NOT NULL,
    "Points_For" INT   NOT NULL,
    "Points_Against" INT   NOT NULL,
    "Wins" INT   NOT NULL,
    "Games" INT   NOT NULL,
    "Wins_Per" DEC   NOT NULL
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
