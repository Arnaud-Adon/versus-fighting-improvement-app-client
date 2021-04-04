import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3090/api",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default api;
