import React, { createContext, useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "../axios";
import requests from "../requests";

const MovieContext = createContext({});

const api_URL = "https://api.themoviedb.org/3";
export const MovieProvider = ({ children }) => {
  const [jumbotronMovie, setJumbotronMovieData] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState({});

  const [playTrailer, setPlayTrailer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [page, setPage] = useState(1);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log("jumbotronMovie in Jumbotron.js", { jumbotronMovie });
  console.log({ trailerMovie });
  console.log({ playTrailer });

  // Set Jumbotron to clicked movie
  const fetchMovieData = async (id) => {
    const data = await instance.get(`${api_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: "videos,images",
      },
    });
    console.log("fetchMovieData:", data.data);
    setTrailerMovie(data.data);

    return data;
  };

  const fetchJumbotronData = async () => {
    const data = await instance.get(requests.fetchRecommended);
    // console.log("fetchJumbotronData", data.data.results[0]);
    // setJumbotronMovieData(data.data.results[0]); // Set 1st movie in results
    await selectMovie(data.data.results[0]);
    // return data;
  };

  useEffect(() => {
    fetchJumbotronData();
  }, []);
  // console.log(jumbotronMovie);

  const selectMovie = async (mov) => {
    // const data = await fetchMovieData(mov.id);
    const data = await fetchMovieData(mov.id);
    console.log(data);
    console.log("selectMovie data", data.data.videos);
    setJumbotronMovieData(mov);
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
        playTrailer,
        setPlayTrailer,
        renderTrailer,
        trailerMovie,
        isHovered,
        setIsHovered,
        selectMovie,
        truncate,
        page,
        setPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
