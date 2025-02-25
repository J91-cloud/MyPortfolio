import axios from "axios";

let accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  // baseURL: "https://jellyfish-app-lgjgg.ondigitalocean.app/api/v1",
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
