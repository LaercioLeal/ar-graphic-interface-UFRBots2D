
-- teamX - nome do time
CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resultTeam1 TEXT NOT NULL,
    resultTeam2 TEXT NOT NULL,
    team1 TEXT NOT NULL,
    team2 TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS experiments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    createdAt TEXT NOT NULL,
    title TEXT NOT NULL
);
-- trainning - ensaios
CREATE TABLE IF NOT EXISTS training ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idExperiment INTEGER NOT NULL,
    done BOOLEAN DEFAULT 'true',
    createdAt TEXT NOT NULL,
    epsilon TEXT NOT NULL,
    alpha TEXT NOT NULL,
    gamma TEXT NOT NULL
);