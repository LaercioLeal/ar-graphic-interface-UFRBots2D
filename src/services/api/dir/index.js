import api from "../index";

export async function getDirectory() {
  try {
    const response = await api.get("/directory");

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
