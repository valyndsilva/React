import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";
// Base url to make requests to the movie database

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  // baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.request.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log("Error == ", error.response);
    console.log(error.response.data.errors);
    throw error;
  }
);

export default axiosClient;
