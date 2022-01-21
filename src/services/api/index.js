import axios from "axios";

export * from "./dir";
export * from "./match";
export * from "./monitor";
export * from "./training";
export * from "./experiments";

const api = axios.create({
  baseURL: "http://127.0.0.1:3001/",
});

export default api;
