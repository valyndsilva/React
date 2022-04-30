import axiosPlayerClient from "./playerClient";
export const category = {
  movie: "movie",
  shows: "shows",
};
// const baseURL = "https://www.2embed.ru/embed/tmdb/";
const playerApi = {
  getStreamingVideo: (cate, id, s, e) => {
    // https://www.2embed.ru/
    // TMDB id movie API
    // URL API : https://www.2embed.ru/embed/tmdb/movie?id=TMDB ID
    // TMDB id tv show API
    // URL API : https://www.2embed.ru/embed/tmdb/tv?id=TMDB ID&s=SEASON NUMBER&e=EPISODE NUMBE

    let url =
      category[cate] === "movie"
        ? `movie?id=${id}`
        : `shows?id=${id}&s=${s}&e=${e}`;

    console.log("url:", url);
    return axiosPlayerClient.get(url);
  },
};

export default playerApi;
