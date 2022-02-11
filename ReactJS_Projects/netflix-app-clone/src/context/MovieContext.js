import React, { createContext, useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "../axios";
import requests from "../requests";
import useGenre from "../hooks/useGenre";

const MovieContext = createContext({});

const api_URL = "https://api.themoviedb.org/3";

export const MovieProvider = ({ children }) => {
  const [jumbotronMovie, setJumbotronMovie] = useState([]);
  const [jumbotronMovieData, setJumbotronMovieData] = useState([]);
  const [jumbotronSeriesData, setJumbotronSeriesData] = useState([]);

  const [jumbotronTrendingData, setJumbotronTrendingData] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const moviesURL = `${api_URL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreforURL}`;
  const seriesURL = `${api_URL}/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreforURL}`;
  const trendingURL = `${api_URL}/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // console.log("jumbotronMovie:", { jumbotronMovie });
  // console.log("trailerMovie:", { trailerMovie });
  // console.log("playTrailer:", { playTrailer });

  // Set Jumbotron and trailer to clicked movie on Home.js
  const fetchMovieData = async (id) => {
    const data = await instance.get(`${api_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: "videos",
      },
    });
    console.log("fetchMovieData:", data.data);
    setTrailerMovie(data.data);

    return data;
  };

  const selectMovie = async (mov) => {
    const data = await fetchMovieData(mov.id);
    console.log(data);
    console.log("selectMovie", data.data.videos);
    setJumbotronMovie(mov);
  };

  // Jumbotron for Home.js
  const fetchHomeJumbotronData = async () => {
    const data = await instance.get(requests.fetchRecommended);
    console.log("fetchHomeJumbotronData", data.data.results[0]);
    // setJumbotronMovie(data.data.results[0]); // Set 1st movie in results
    await selectMovie(data.data.results[0]);

    // return data;
  };

  useEffect(() => {
    fetchHomeJumbotronData();
    // eslint-disable-next-line
  }, []);
  // console.log(jumbotronMovie);

  // Jumbotron for Movies.js
  const fetchMoviesJumbotronData = async () => {
    const data = await instance.get(moviesURL);
    console.log("fetchMoviesJumbotronData", data.data.results[0]);
    // setJumbotronMovieData(data.data.results[0]); // Set 1st movie in results
    await selectMovieData(data.data.results[0]);
    // return data;
  };

  useEffect(() => {
    fetchMoviesJumbotronData();
    // eslint-disable-next-line
  }, []);
  // console.log(jumbotronMovieData);

  const selectMovieData = async (mov) => {
    const data = await fetchMovieData(mov.id);
    console.log(data);
    console.log("selectMovie", data.data.videos);
    setJumbotronMovieData(mov);
  };
  // Set Jumbotron and trailer to clicked series
  const fetchSeriesData = async (id) => {
    const data = await instance.get(`${api_URL}/tv/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        language: "en-US",
        append_to_response: "videos",
      },
    });
    console.log("fetchSeriesData:", data.data);
    setTrailerMovie(data.data);

    return data;
  };

  // Jumbotron for Series.js
  const fetchSeriesJumbotronData = async () => {
    const data = await instance.get(seriesURL);
    console.log("fetchSeriesJumbotronData", data.data.results[0]);
    // setJumbotronSeriesData(data.data.results[0]); // Set 1st movie in results
    await selectSeriesData(data.data.results[0]);
    // return data;
  };

  useEffect(() => {
    fetchSeriesJumbotronData();
    // eslint-disable-next-line
  }, []);
  console.log(jumbotronSeriesData);

  const selectSeriesData = async (mov) => {
    const data = await fetchSeriesData(mov.id);
    console.log(data);
    console.log("selectSeriesData", data.data.videos);
    setJumbotronSeriesData(mov);
  };

  // Set Jumbotron  and trailer to clicked trending movie or tv series
  const fetchTrendingData = async (type, id) => {
    const data = await instance.get(
      `${api_URL}/${type ? "movie" : "tv"}/${id}`,
      {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          language: "en-US",
          append_to_response: "videos",
        },
      }
    );
    console.log("fetchTrendingData:", data.data);
    setTrailerMovie(data.data);

    return data;
  };

  // Jumbotron for Trending.js
  const fetchTrendingJumbotronData = async () => {
    const data = await instance.get(requests.fetchTrending);
    console.log("fetchTrendingJumbotronData", data.data.results[0]);
    // setJumbotronMovie(data.data.results[0]); // Set 1st movie in results
    await selectTrending(data.data.results[0]);
    // return data;
  };

  useEffect(() => {
    fetchTrendingJumbotronData();
    // eslint-disable-next-line
  }, []);
  // console.log(jumbotronMovie);

  const selectTrending = async (mov) => {
    const data = await fetchTrendingData(mov.id);
    console.log(data);
    console.log("selectTrending", data.data.videos);
    setJumbotronTrendingData(mov);
  };

  const renderTrailer = () => {
    // const trailer =
    //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    // const trailer = trailerMovie.videos.results[0];
    const trailer = trailerMovie.videos.results.find(
      (vid) => vid.name === "Official Trailer" || "Official Teaser"
    );
    // const key = trailer
    //   ? trailer.key
    //   : trailerMovie.videos.results[0].key || "No Trailer";
    const key = trailer
      ? trailer.key
      : trailer
      ? trailerMovie.videos.results[0].key
      : "No Trailer";
    return (
      <YouTube
        videoId={key}
        className={"youtube amru"}
        containerClassName={"youtube-container amru"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            cc_load_policy: 0,
            fs: 0,
            iv_load_policy: 0,
            modestbranding: 0,
            rel: 0,
            showinfo: 0,
          },
        }}
      />
    );
  };
  // console.log(movies);

  return (
    <MovieContext.Provider
      value={{
        jumbotronMovie,
        jumbotronMovieData,
        jumbotronSeriesData,
        playTrailer,
        setPlayTrailer,
        renderTrailer,
        trailerMovie,
        isHovered,
        setIsHovered,
        selectMovie,
        selectMovieData,
        selectSeriesData,
        truncate,
        page,
        setPage,
        numOfPages,
        setNumOfPages,
        genreforURL,
        selectedGenres,
        setSelectedGenres,
        genres,
        setGenres,
        moviesURL,
        seriesURL,
        trendingURL,
        jumbotronTrendingData,
        setJumbotronTrendingData,
        type,
        setType,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
