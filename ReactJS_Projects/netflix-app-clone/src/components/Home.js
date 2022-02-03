import React, { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../axios";
import requests from "../requests";
import Movies from "./Movies";
import Jumbotron from "./Jumbotron";
import YouTube from "react-youtube";
function Home() {
  const api_URL = "https://api.themoviedb.org/3";

  // useState
  const [jumbotronMovie, setJumbotronMovieData] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const fetchJumbotronData = async () => {
    const data = await instance.get(requests.fetchRecommended);
    console.log("fetchJumbotronData", data.data.results[0]);
    // setJumbotronMovieData(data.data.results[0]); // Set 1st movie in results
    await selectMovie(data.data.results[0]);
    // return data;
  };

  useEffect(() => {
    fetchJumbotronData();
  }, []);
  // console.log("jumbotron movie in Home.js", jumbotronMovie);

  const renderJumbotronMovie = () => (
    <Jumbotron
      jumbotronmovie={jumbotronMovie}
      type="movie"
      playTrailer={playTrailer}
      setPlayTrailer={setPlayTrailer}
      trailermovie={trailerMovie}
      renderTrailer={renderTrailer}
    />
  );

  // Set Jumbotron to clicked movie
  const fetchMovieData = async (id) => {
    const data = await instance.get(`${api_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: "videos",
      },
    });
    console.log("fetchMovieData", data);
    setTrailerMovie(data.data);
    return data;
  };

  const selectMovie = async (mov) => {
    const data = await fetchMovieData(mov.id);
    console.log("selectMovie data", data.data.videos);
    setJumbotronMovieData(mov);
    // return data.data.videos;
  };

  const renderTrailer = () => {
    // const trailer = trailerMovie.videos.results[0];
    const trailer = trailerMovie.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    const key = trailer ? trailer.key : trailerMovie.videos.results[0].key;
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
  return (
    <Container>
      {renderJumbotronMovie()}
      {/* <Jumbotron /> */}

      <Movies
        title="Recommended For You"
        fetchUrl={requests.fetchRecommended}
        // selectMovie={setJumbotronMovieData}
        selectMovie={selectMovie}
      />
      <Movies
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        // selectMovie={ setJumbotronMovieData}
        selectMovie={selectMovie}
      />
      <Movies
        title="Netflix Movies Originals"
        fetchUrl={requests.fetchNetflixMovieOriginals}
        // selectMovie={ setJumbotronMovieData}
        selectMovie={selectMovie}
      />
      <Movies
        title="Netflix TV Originals"
        fetchUrl={requests.fetchNetflixTvOriginals}
        // selectMovie={ setJumbotronMovieData}
        selectMovie={selectMovie}
      />
      <Movies
        title="Action Movies"
        fetchUrl={requests.fetchAction}
        // selectMovie={ setJumbotronMovieData}
        selectMovie={selectMovie}
      />
      <Movies
        title="Comedy Movies"
        fetchUrl={requests.fetchComedy}
        // selectMovie={ setJumbotronMovieData}
        selectMovie={selectMovie}
      />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  overflow: hidden;
  min-height: calc(100vh - 70px);
  position: relative;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
