import styled from "styled-components";
import requests from "../requests";
import MoviesComp from "./MoviesComp";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { FooterContainer } from "../containers/footer";
export default function Main() {
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
        title="Sci-Fi"
        fetchUrl={requests.fetchSciFi}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Animation"
        fetchUrl={requests.fetchAnimation}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Adventure"
        fetchUrl={requests.fetchAdventure}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Action"
        fetchUrl={requests.fetchAction}
        // selectMovie={ setHeroMovieData}
      />
      <MoviesComp
        title="Comedy"
        fetchUrl={requests.fetchComedy}
        // selectMovie={ setHeroMovieData}
      />
      <FooterContainer />
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
