import axios from "axios";
import { useNavigate } from "react-router-dom";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken") || "";
    console.log("🚀 ~ token:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("token not fetchable");
  }
);
