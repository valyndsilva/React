import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Navbar from "../../components/Navbar";
import MovieContext from "../../context/MovieContext";
import Jumbotron from "../../components/Jumbotron";
import SingleContent from "../../components/SingleContent";
import CustomPagination from "../../components/CustomPagination";

function Trending() {
  const { selectMovie, setPlayTrailer, page } = useContext(MovieContext);
  const [trendingData, setTrendingData] = useState([]);

  const fecthTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
    );
    console.log(data);
    console.log(data.results);
    setTrendingData(data.results);
  };

  useEffect(() => {
    fecthTrending();
  }, [page]);

  return (
    <Container>
      <Navbar />
      <Jumbotron type="movie" />
      <Title>Trending</Title>
      <InnerContent>
        {trendingData.map((movie, index) => (
          <SingleContent
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
            media_type={movie.media_type}
            vote_average={movie.vote_average}
            selectMovie={selectMovie}
            setPlayTrailer={setPlayTrailer}
          />
        ))}
      </InnerContent>
      <CustomPagination />
    </Container>
  );
}
export default Trending;

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
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
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  transition: all 1s ease;
`;
