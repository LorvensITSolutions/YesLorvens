// src/lib/axios.js
import axios from "axios";

const baseURL = `${String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "")}/api`;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
