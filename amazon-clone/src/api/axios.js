import axios from "axios";

const axiosInstance = axios.create({
  // Backend is running on HTTP port 5001
  //baseURL: "http://localhost:5001",
  //baseURL: "https://api-gtovj2gsgq-uc.a.run.app",
  baseURL:"https://amazon-api-deploy-81p7.onrender.com",
});
export {axiosInstance};