import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND || "http://localhost:5000",
});

export default API;
