CREATE TABLE "passengers" (
	"id" SERIAL PRIMARY KEY,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "cities" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "flights" (
	"id" SERIAL PRIMARY KEY,
	"origin" INTEGER NOT NULL REFERENCES "cities" ("id"),
	"destination" INTEGER NOT NULL REFERENCES "cities" ("id"),
	"date" DATE NOT NULL,
	"createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "travels" (
	"id" SERIAL PRIMARY KEY,
	"passengerId" INTEGER NOT NULL REFERENCES "passengers" ("id"),
	"flightId" INTEGER NOT NULL REFERENCES "flights" ("id"),
	"createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);