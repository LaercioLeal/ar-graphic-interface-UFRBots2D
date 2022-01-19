import api from "../index";

export async function getExperiments() {
  try {
    const response = await api.get("/experiments");

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function addExperiment(experiment) {
  try {
    const response = await api.post("/experiments/add", experiment);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
