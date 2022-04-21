import axios from "axios";

export * from "./dir";
export * from "./data";
export * from "./match";
export * from "./monitor";
export * from "./results";
export * from "./training";
export * from "./logPlayer";
export * from "./experiments";

const api = axios.create({
  baseURL: "http://127.0.0.1:3001/",
});

export default api;
