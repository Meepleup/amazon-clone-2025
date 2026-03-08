import axios from "axios";

const axiosInstance = axios.create({
  // Backend is running on HTTP port 5001
  //baseURL: "http://localhost:5001",
  baseURL: "https://api-gtovj2gsgq-uc.a.run.app",
});
export {axiosInstance};