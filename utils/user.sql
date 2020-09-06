BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "user" (
	"id"	integer NOT NULL,
	"user"	varchar(50) NOT NULL,
	"password"	varchar(100) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "user" VALUES (1,'macapa','$2y$10$4IRuTTChBHCohHUDwObHvexayxvT.anWqn/J4GoZRTXX24oqYmwfC');
INSERT INTO "user" VALUES (2,'varejao','$2b$10$Gz1IaohjgwC.l/VmnOtWSunNBSuMgbcf/qwFM2kZGDpz2fGeN.6bK');
COMMIT;
