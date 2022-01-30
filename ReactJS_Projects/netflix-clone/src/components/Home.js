import React from "react";
import styled from "styled-components";
import requests from "../requests";
import MoviesNew from "./Movies";
import Jumbotron from "./Jumbotron";

function Home() {
  return (
    <Container>
      <Jumbotron />
      <MoviesNew
        title="Recommended For You"
        fetchUrl={requests.fetchRecommended}
      />
      <MoviesNew title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MoviesNew
        title="Netflix Movies Originals"
        fetchUrl={requests.fetchNetflixMovieOriginals}
      />
      <MoviesNew
        title="Netflix TV Originals"
        fetchUrl={requests.fetchNetflixTvOriginals}
      />
      <MoviesNew title="Action Movies" fetchUrl={requests.fetchAction} />
      <MoviesNew title="Comedy Movies" fetchUrl={requests.fetchComedy} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
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
