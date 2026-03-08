import axios from "axios";

const Instance = axios.create({
  // Backend is running on HTTP port 5001
  baseURL: "http://localhost:5001",
});

export default Instance;