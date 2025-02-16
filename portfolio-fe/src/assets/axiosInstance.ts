import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jellyfish-app-lgjgg.ondigitalocean.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
