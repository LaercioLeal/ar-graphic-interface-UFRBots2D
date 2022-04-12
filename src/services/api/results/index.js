import api from "../index";

export async function getResults(values) {
  try {
    const response = await api.post(
      "/experiments/training/result/data",
      values
    );

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
