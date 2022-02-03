-- Deploy oparc:createDb to pg

BEGIN;

CREATE TABLE "attraction" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "capacity" INTEGER NOT NULL,
    "open_time" TIMESTAMPTZ NOT NULL,
    "closer_time" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "incident" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "incident_number" TEXT NOT NULL UNIQUE,
    "nature" TEXT NOT NULL,
    "technical" TEXT NOT NULL,
    "repair_date" TIMESTAMPTZ,
    "attraction_id" INTEGER NOT NULL REFERENCES "attraction"("id"),
    "failure_date" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "visitor" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "billet_number" TEXT NOT NULL,
    "starting_time" TIMESTAMPTZ NOT NULL,
    "ending_time" TIMESTAMPTZ NOT NULL,
    "place_requested" INTEGER,
    "reservation_time" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "attraction_has_visitor" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "attraction_id" INTEGER NOT NULL REFERENCES "attraction"("id"),
    "visitor_id" INTEGER NOT NULL REFERENCES "visitor"("id")

);


COMMIT;
