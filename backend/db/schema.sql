
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
    done BOOLEAN DEFAULT 'false',
    createdAt TEXT NOT NULL,
    numEpisodes INTEGER NOT NULL,
    epsilon DECIMAL(1,3) NOT NULL,
    alpha DECIMAL(1,3) NOT NULL,
    gamma DECIMAL(1,3) NOT NULL
);