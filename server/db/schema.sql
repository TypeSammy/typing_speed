CREATE TABLE paragraphs (
id SERIAL PRIMARY KEY,
paragraph TEXT
);

CREATE TABLE scoreboard (
id SERIAL PRIMARY KEY,
username TEXT,
wpm INT,
accuracy INT
);

INSERT INTO scoreboard(username, wpm, accuracy) VALUES('Sam', 80, 90);
INSERT INTO scoreboard(username, wpm, accuracy) VALUES('Bob', 10, 100);
INSERT INTO scoreboard(username, wpm, accuracy) VALUES('Amelia', 55, 60);

TRUNCATE TABLE table_name