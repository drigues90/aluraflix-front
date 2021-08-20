import axios from "axios";
import { getToken } from "./auth";
import config from '../config/index';

const api = axios.create({
  baseURL: `${config.URL_BACKEND_TOP}`
 // baseURL: "http://localhost:8080"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;