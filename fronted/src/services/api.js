import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND || "http://localhost:5000",
});

export default API;
