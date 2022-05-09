import api from "../index";

export async function getDashboardResume() {
  try {
    const response = await api.get("/dashboard");

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
