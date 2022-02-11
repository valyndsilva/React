import styled from "styled-components";
import requests from "../requests";
import MoviesComp from "./MoviesComp";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

function Home() {
  return (
    <Container>
      <Navbar />
      <Jumbotron />

      <MoviesComp
        title="Recommended For You"
        fetchUrl={requests.fetchRecommended}
        // selectMovie={setJumbotronMovieData}
      />
      <MoviesComp
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        // selectMovie={ setJumbotronMovieData}
      />
      <MoviesComp
        title="Netflix Movies Originals"
        fetchUrl={requests.fetchNetflixMovieOriginals}
        // selectMovie={ setJumbotronMovieData}
      />
      <MoviesComp
        title="Netflix TV Originals"
        fetchUrl={requests.fetchNetflixTvOriginals}
        // selectMovie={ setJumbotronMovieData}
      />
      <MoviesComp
        title="Action Movies"
        fetchUrl={requests.fetchAction}
        // selectMovie={ setJumbotronMovieData}
      />
      <MoviesComp
        title="Comedy Movies"
        fetchUrl={requests.fetchComedy}
        // selectMovie={ setJumbotronMovieData}
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
