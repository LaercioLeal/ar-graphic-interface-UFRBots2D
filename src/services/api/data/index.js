import api from "../index";

export async function getExperimentAllDataInfo(values) {
  try {
    const response = await api.post("/experiments/general/data", values);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
