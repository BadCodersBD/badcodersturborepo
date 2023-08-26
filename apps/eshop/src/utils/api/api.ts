import axios, { AxiosInstance } from "axios";

// Create a new Axios instance
const api: AxiosInstance = axios.create({
  baseURL: "https://neos-server.vercel.app/api/v1", // Set your base URL here
  // You can also add other default configurations like headers, timeout, etc.
});

export default api;
