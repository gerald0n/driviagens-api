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


-- CREATE TABLE "users" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"name" VARCHAR (255) NOT NULL,
-- 	"email" VARCHAR(255) NOT NULL UNIQUE,
-- 	"password" TEXT NOT NULL,
-- 	"imageURL" TEXT NOT NULL,
-- 	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- CREATE TABLE "posts" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"description" TEXT NOT NULL,
-- 	"URL" TEXT NOT NULL,
-- 	"URL_title" TEXT NOT NULL,
-- 	"URL_description" TEXT NOT NULL,
-- 	"URL_image" TEXT NOT NULL,
-- 	"userID" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- CREATE TABLE "likes" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"userID" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"postID" INTEGER NOT NULL REFERENCES "posts" ("id")
-- );

-- CREATE TABLE "hashtags" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"hashtag" VARCHAR(255) NOT NULL UNIQUE,
-- 	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- CREATE TABLE "hashtagPosts" (
-- 	"hashtagID" INTEGER NOT NULL REFERENCES "hashtags" ("id"),
-- 	"postID" INTEGER NOT NULL REFERENCES "posts" ("id")
-- );

-- CREATE TABLE "follows" (
-- 	"userID_following" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"userID_follower" INTEGER NOT NULL REFERENCES "users" ("id")
-- );

-- CREATE TABLE "comments" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"userID_owner" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"userID_comment" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"postID" INTEGER NOT NULL REFERENCES "posts" ("id"),
-- 	"comment" TEXT NOT NULL,
-- 	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- CREATE TABLE "resposts" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"userID" INTEGER NOT NULL REFERENCES "users" ("id"),
-- 	"postID" INTEGER NOT NULL REFERENCES "posts" ("id"),
-- 	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
-- );