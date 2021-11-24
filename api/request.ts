import axios from "axios";

const requestInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

requestInstance.interceptors.request.use((config: any) => {
  config.headers["X-Api-Key"] = process.env.NEXT_PUBLIC_API_KEY;
  return config;
});

export default requestInstance;
