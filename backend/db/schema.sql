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
    status TEXT check (status in ('wait', 'queue', 'running', 'done')) DEFAULT 'wait',
    createdAt TEXT NOT NULL,
    episodes INTEGER NOT NULL,
    epsilon DECIMAL(1,3) NOT NULL,
    alpha DECIMAL(1,3) NOT NULL,
    gamma DECIMAL(1,3) NOT NULL,
    ourPath VARCHAR(255),
    oppPath VARCHAR(255),
    parametersPath VARCHAR(255),

    CONSTRAINT fk_experiments
    FOREIGN KEY (idExperiment)
    REFERENCES experiments(id)
    ON DELETE CASCADE
);

-- order === número da partida
CREATE TABLE IF NOT EXISTS results ( 
    id TEXT NOT NULL,
    idExperiment TEXT NOT NULL,
    idTraining TEXT NOT NULL,
    orderR INTEGER NOT NULL, 
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

-- order === número da partida
CREATE TABLE IF NOT EXISTS quizResponses ( 
    id TEXT NOT NULL,
    correctQuestions INTEGER NOT NULL,
    incorrectQuestions INTEGER NOT NULL,
    totalScore INTEGER NOT NULL,
    createdAt TEXT NOT NULL
);