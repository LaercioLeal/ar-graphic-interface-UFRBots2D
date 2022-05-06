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

export async function addQuizResponses(quiz) {
  try {
    const response = await api.post(`/quiz/responses`, quiz);

    return response.data.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
