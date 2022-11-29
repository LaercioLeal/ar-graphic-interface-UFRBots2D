import { generateHash } from "utils";
import api from "../index";

export async function runMatchesForTraining(training, setDoneTraining) {
  const results = [];
  let done = 0;
  setDoneTraining(done);
  for (let index = 1; index <= training.episodes; index++) {
    const { data } = await api.get(`/match/run`, {
      params: {
        mode: 2,
        training: "training",
      },
    });
    done = done + 1;
    setDoneTraining(done);
    results.push({
      idResult: generateHash(),
      idExperiment: training.idExperiment,
      idTraining: training.id,
      orderR: index,
      gf: data.data.scores.team1,
      gs: data.data.scores.team2,
      sg: data.data.scores.team1 - data.data.scores.team2,
    });
  }
  return results;
}

export async function setTrainingParams(params) {
  try {
    const response = await api.post(
      "/experiments/training/data/params",
      params
    );

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function runTraining(training, setDoneTraining = () => {}) {
  try {
    setDoneTraining(0);
    await setTrainingParams({
      alpha: training.alpha,
      gamma: training.gamma,
      epsilon: training.epsilon,
    });
    await runMatchesForTraining(training, setDoneTraining).then(
      async (results) => {
        const response = await api.post("/experiments/training", {
          id: training.id,
          results,
        });

        return response.data;
      }
    );
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function getTrainingData(experiment_id) {
  try {
    const response = await api.get("/experiments/training/data", {
      params: {
        experiment_id,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function addTraining(values) {
  try {
    const response = await api.post("/experiments/training/data/add", values);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function deleteTraining(id) {
  try {
    const response = await api.post("/experiments/training/data/delete", id);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function updateTraining(training) {
  try {
    const response = await api.post(
      "/experiments/training/data/update",
      training
    );

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
