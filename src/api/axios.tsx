import axios from "axios";
const BASE_URL = "https://restcountries.com/v3.1";
import { SESSION_KEYS } from "constants";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(async (config: any) => {
  const token = sessionStorage.getItem(SESSION_KEYS.TOKEN);

  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
    }

    console.log("REQUEST error", error);

    if (!error.response) {
      error.response = { data: { genericError: error } };
    }

    if (!error.status) return Promise.reject(new Error("Erro de conexão"));

    return Promise.reject(error);
  }
);
