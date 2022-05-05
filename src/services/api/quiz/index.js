import api from "../index";

export async function getQuizResponses() {
  try {
    const response = await api.get(`/quiz/responses`);

    return response.data.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
