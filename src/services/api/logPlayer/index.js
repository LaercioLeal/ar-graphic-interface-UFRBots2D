import api from "../index";

export async function runLog(path) {
  try {
    const response = await api.post("/logplayer/start", { path: path });

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}

export async function getLogs(dir = "default") {
  try {
    const response = await api.get("/logplayer/logs", {
      params: { dir },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
