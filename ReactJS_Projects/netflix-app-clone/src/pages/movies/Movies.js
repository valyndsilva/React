import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../../components/Navbar";
import MovieContext from "../../context/MovieContext";
import HeroMovies from "../../components/HeroMovies";
import MoviesContent from "../../components/MoviesContent";
import CustomPagination from "../../components/CustomPagination";
import Genres from "../../components/Genres";

export default function Movies() {
  const {
    selectMovieData,
    setPlayTrailer,
    page,
    setPage,
    numOfPages,
    setNumOfPages,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    genreforURL,
    moviesURL,
  } = useContext(MovieContext);

  const [MoviesData, setMoviesData] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(moviesURL);
    console.log(data);
    console.log(data.results);
    setMoviesData(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <Container>
      <Navbar />
      <HeroMovies />
      <Title>Movies</Title>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <InnerContent>
        {MoviesData.map((movie, index) => (
          <MoviesContent
            key={movie.id}
            movie={movie}
            index={index}
            poster={movie.poster_path}
            title={
              movie.original_title ||
              movie.title ||
              movie.original_name ||
              movie.name
            }
            date={movie.first_air_date || movie.release_date}
            media_type="movie"
            vote_average={movie.vote_average}
            selectMovieData={selectMovieData}
            setPlayTrailer={setPlayTrailer}
          />
        ))}
      </InnerContent>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
const Title = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding: 4px;
`;

const InnerContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 1s ease;
  margin-bottom: 10px;
`;
