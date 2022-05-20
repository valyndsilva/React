import axios from "axios";
import apiConfig from "./apiConfig";

const config = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
};
const axiosPlayerClient = axios.create({
  baseURL: apiConfig.basePlayerURL,
  // baseURL: "https://www.2embed.ru/embed/tmdb",
  method: "GET",
  https: config,
});

export default axiosPlayerClient;
