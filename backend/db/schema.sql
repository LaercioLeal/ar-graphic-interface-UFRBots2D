-- teamX - nome do time
CREATE TABLE IF NOT EXISTS results (
    id TEXT NOT NULL,
    resultTeam1 TEXT NOT NULL,
    resultTeam2 TEXT NOT NULL,
    team1 TEXT NOT NULL,
    team2 TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS experiments (
    id TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    title TEXT NOT NULL
);

-- trainning - ensaios
CREATE TABLE IF NOT EXISTS training ( 
    id TEXT NOT NULL,
    idExperiment INTEGER NOT NULL,
    done BOOLEAN DEFAULT 'false',
    createdAt TEXT NOT NULL,
    episodes INTEGER NOT NULL,
    epsilon DECIMAL(1,3) NOT NULL,
    alpha DECIMAL(1,3) NOT NULL,
    gamma DECIMAL(1,3) NOT NULL
);

-- numResult === número da partida
CREATE TABLE IF NOT EXISTS results ( 
    idExperiment TEXT NOT NULL,
    idTraining TEXT NOT NULL,
    numResult INTEGER NOT NULL, 
    gf INTEGER NOT NULL,
    gs INTEGER NOT NULL,
    sg INTEGER NOT NULL
);