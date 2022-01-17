import api from "../index";

export async function startMatch({ mode = 1 | 2 }) {
  try {
    const response = await api.get(`/match/run?mode=${mode}`);

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
