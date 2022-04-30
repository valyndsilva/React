import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  top_rated: "top_rated",
  popular: "popular",
  on_the_air: "on_the_air",
};

export const media_type = {
  all: "all",
  movie: "movie",
  tv: "tv",
  person: "person",
};

export const time_window = {
  day: "day",
  week: "week",
};

const tmdbApi = {
  getGenresList: (cate, params) => {
    // https://developers.themoviedb.org/3/genres/get-movie-list
    // GET /genre/movie/list
    // https://developers.themoviedb.org/3/genres/get-tv-list
    // GET /genre/tv/list
    const url = `genre/${category[cate]}/list`;
    return axiosClient.get(url, params);
  },
  getDetail: (cate, id, params) => {
    // https://developers.themoviedb.org/3/movies/get-movie-details
    // GET  /movie/{movie_id}
    // https://developers.themoviedb.org/3/tv/get-tv-details
    // GET /tv/{tv_id}
    const url = `${category[cate]}/${id}`;
    // return axiosClient.get(url, id);
    return axiosClient.get(url, params);
  },
  getMoviesList: (type, params) => {
    // https://developers.themoviedb.org/3/movies/get-popular-movies
    // /movie/popular
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, params);
  },

  getTrendingList: (cat, time, params) => {
    // https://developers.themoviedb.org/3/trending/get-trending
    // GET /trending/{media_type}/{time_window}
    const url = `trending/${media_type[cat]}/${time_window[time]}`;
    return axiosClient.get(url, params);
  },
  getDiscoverList: (cate, params) => {
    // https://developers.themoviedb.org/3/discover/movie-discover
    // GET /discover/movie
    // https://developers.themoviedb.org/3/discover/tv-discover
    // GET /discover/tv
    const url = `discover/${category[cate]}`;
    return axiosClient.get(url, params);
  },

  getVideos: (cate, id) => {
    // https://developers.themoviedb.org/3/movies/get-movie-videos
    // GET  /movie/{movie_id}/videos
    // https://developers.themoviedb.org/3/tv/get-tv-videos
    // GET /tv/{tv_id}/videos

    const url = `${category[cate]}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },

  getSearch: (params) => {
    // https://developers.themoviedb.org/3/search/search-movies
    // GET /search/movie
    // https://developers.themoviedb.org/3/search/search-tv-shows
    // GET /search/tv
    const url = "search/multi";
    return axiosClient.get(url, params);
  },

  getCredits: (cate, id) => {
    // https://developers.themoviedb.org/3/movies/get-movie-credits
    // GET /movie/{movie_id}/credits
    // https://developers.themoviedb.org/3/tv/get-tv-credits
    // GET /tv/{tv_id}/credits
    const url = `${category[cate]}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  getPerson: (id) => {
    // https://developers.themoviedb.org/3/people/get-person-details
    // GET /person/{person_id}
    const url = `person/${id}`;
    return axiosClient.get(url, { params: {} });
  },
  getSimilar: (cate, id) => {
    // https://developers.themoviedb.org/3/movies/get-similar-movies
    // GET  /movie/{movie_id}/similar
    // https://developers.themoviedb.org/3/tv/get-similar-tv-shows
    // GET /tv/{tv_id}/similar
    const url = `${category[cate]}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  },
  getContentRatings: (cate, id) => {
    const url = `${category[cate]}/${id}/content_ratings`;
    return axiosClient.get(url, { params: {} });
  },

  getSeasonDetails: (cate, id, s) => {
    // https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
    // GET /tv/{tv_id}/season/{season_number}
    // Supports append_to_response
    // const url = `${category[cate]}/${id}/season/${s}`;
    const url = `tv/${id}/season/${s}`;
    return axiosClient.get(url, { params: {} });
    // return axiosClient.get(url, params);
  },

  getEpisodeDetails: (cate, id, s, e) => {
    // https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
    // GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}
    // Supports append_to_response
    // const url = `${category[cate]}/${id}/season/${s}/episode/${e}`;
    const url = `tv/${id}/season/${s}/episode/${e}`;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
