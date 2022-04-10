CREATE TABLE IF NOT EXISTS experiments (
    id TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    title TEXT NOT NULL
);

-- trainning - ensaios
-- status: wait / queue / running / done
CREATE TABLE IF NOT EXISTS training ( 
    id TEXT NOT NULL,
    idExperiment INTEGER NOT NULL,
    done BOOLEAN DEFAULT 'false',
    status TEXT DEFAULT 'wait',
    createdAt TEXT NOT NULL,
    episodes INTEGER NOT NULL,
    epsilon DECIMAL(1,3) NOT NULL,
    alpha DECIMAL(1,3) NOT NULL,
    gamma DECIMAL(1,3) NOT NULL,

    CONSTRAINT fk_experiments
    FOREIGN KEY (idExperiment)
    REFERENCES experiments(id)
    ON DELETE CASCADE
);

-- numResult === número da partida
CREATE TABLE IF NOT EXISTS results ( 
    idExperiment TEXT NOT NULL,
    idTraining TEXT NOT NULL,
    numResult INTEGER NOT NULL, 
    gf INTEGER NOT NULL,
    gs INTEGER NOT NULL,
    sg INTEGER NOT NULL,

    CONSTRAINT fk_experiments
    FOREIGN KEY (idExperiment)
    REFERENCES experiments(id)
    ON DELETE CASCADE

    CONSTRAINT fk_training
    FOREIGN KEY (idTraining)
    REFERENCES training(id)
    ON DELETE CASCADE
);