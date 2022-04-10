import api from "../index";

export async function runTraining(training) {
  try {
    const response = await api.post("/experiments/training/run", training);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function getTrainingData(experiment_id) {
  try {
    const response = await api.post("/experiments/training/data", {
      experiment_id,
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
