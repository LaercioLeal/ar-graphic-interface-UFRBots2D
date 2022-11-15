import api from "../index";

export async function getExperimentAllDataInfo(values) {
  try {
    const response = await api.get("/experiments/general/data", {
      params: {
        ...values,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
