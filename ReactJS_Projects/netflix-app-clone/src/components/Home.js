import styled from "styled-components";
import requests from "../requests";
import MoviesComp from "./MoviesComp";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home2() {
  return (
    <Container>
      <Navbar />
      <Hero />

      <MoviesComp
        title="Recommended For You"
        fetchUrl={requests.fetchRecommended}
        // selectMovie={setHeroMovieData}
      />
      <MoviesComp
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Netflix Movies Originals"
        fetchUrl={requests.fetchNetflixMovieOriginals}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Netflix TV Originals"
        fetchUrl={requests.fetchNetflixTvOriginals}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Action Movies"
        fetchUrl={requests.fetchAction}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Comedy Movies"
        fetchUrl={requests.fetchComedy}
        // selectMovie={ setHeroMovieData}
      />
    </Container>
  );
}

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
