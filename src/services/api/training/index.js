import api from "../index";

export async function getTrainingData(experiment_id) {
  try {
    const response = await api.post("/experiments/data/training", {
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
    const response = await api.post("/experiments/data/training/add", values);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function deleteTraining(id) {
  try {
    const response = await api.post("/experiments/data/training/delete", id);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function updateTraining(training) {
  try {
    const response = await api.post(
      "/experiments/data/training/update",
      training
    );

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
