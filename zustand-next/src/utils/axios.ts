import { useAuthStore } from "@/store/store";
import axios from "axios";

const axiosNew = axios.create({
  baseURL: `http://localhost:5000`,
  // withCredentials: true,
});

axiosNew.interceptors.request.use(function (config) {
  const token = useAuthStore.getState().token;
  // @ts-ignore
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
});

export default axiosNew;
