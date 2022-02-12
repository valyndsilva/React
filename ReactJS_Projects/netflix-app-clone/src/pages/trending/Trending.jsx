import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import instance from "axios";
import Navbar from "../../components/Navbar";
import MovieContext from "../../context/MovieContext";
import Hero from "../../components/Hero";
import TrendingContent from "../../components/TrendingContent";
import CustomPagination from "../../components/CustomPagination";

export default function Trending() {
  const { selectMovie, setPlayTrailer, page, setPage, trendingURL } =
    useContext(MovieContext);

  const [trendingData, setTrendingData] = useState([]);

  const fecthTrending = async () => {
    const { data } = await instance.get(trendingURL);
    console.log(data);
    console.log(data.results);
    setTrendingData(data.results);
  };

  useEffect(() => {
    fecthTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <Container>
      <Navbar />
      <Hero />
      <Title>Trending</Title>
      <InnerContent>
        {trendingData.map((movie, index) => (
          <TrendingContent
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
            media_type={movie.type}
            vote_average={movie.vote_average}
            selectMovie={selectMovie}
            setPlayTrailer={setPlayTrailer}
          />
        ))}
      </InnerContent>
      <CustomPagination setPage={setPage} />
    </Container>
  );
}

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 1s ease;
  margin-bottom: 10px;
`;
