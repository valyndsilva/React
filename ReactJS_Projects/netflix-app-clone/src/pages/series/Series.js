import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../../components/Navbar";
import MovieContext from "../../context/MovieContext";
import SeriesContent from "../../components/SeriesContent";
import CustomPagination from "../../components/CustomPagination";
import Genres from "../../components/Genres";
import HeroSeries from "../../components/HeroSeries";

export default function Series() {
  const {
    selectSeriesData,
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
    seriesURL,
  } = useContext(MovieContext);

  const [SeriesData, setSeriesData] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(seriesURL);
    console.log(data);
    console.log("fetchSeries:", data.results);
    setSeriesData(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <Container>
      <Navbar />
      <HeroSeries />
      <Title>Series</Title>
      <Genres
        className="genres"
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <InnerContent>
        {SeriesData.map((movie, index) => (
          <SeriesContent
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
            media_type="tv"
            vote_average={movie.vote_average}
            selectSeriesData={selectSeriesData}
            setPlayTrailer={setPlayTrailer}
            onClick={() => selectSeriesData(movie)}
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
