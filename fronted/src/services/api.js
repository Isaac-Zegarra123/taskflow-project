import axios from "axios";

const API = axios.create({
  baseURL: process.env.APP_URL_BACKEND, // || "http://localhost:5000/api",
});

export default API;
