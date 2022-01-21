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
