import api from "../index";

export async function startMatch(mode, path1, path2) {
  try {
    const response = await api.get(
      `/match/run?mode=${mode}&path1="${path1}"&path2="${path2}"`
    );

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
