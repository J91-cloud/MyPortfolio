import axios from "axios";

let accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
