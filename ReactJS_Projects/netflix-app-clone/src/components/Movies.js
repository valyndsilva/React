import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import instance from "../axios";
import MovieCard from "../components/MovieCard";
import { genresList } from "../genres";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
console.log({ genresList });
function Movies({ title, fetchUrl, selectMovie, setPlayTrailer }) {
  const [movies, setMovies] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [sliderMoved, setSliderMoved] = useState(false); // slider arrow state

  const fetchMoviesData = async () => {
    const data = await instance.get(fetchUrl);
    // console.log(data.data.results);
    setMovies(data.data.results);
    return data;
  };

  useEffect(() => {
    fetchMoviesData();
  }, [fetchUrl]);
  // console.log(movies);

  const renderMovies = () =>
    movies.map((movie, index) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        index={index}
        selectMovie={selectMovie}
        setPlayTrailer={setPlayTrailer}
      />
    ));

  const sliderRef = useRef();

  const handleClick = (direction) => {
    setSliderMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    console.log(distance);
    if (direction === "right" && slideNumber < 12) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <Container>
      <Content>
        <h4> {title} </h4>
        <Wrapper>
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !sliderMoved && "none" }}
          />
          <InnerContent ref={sliderRef}>{renderMovies()}</InnerContent>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </Wrapper>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Content = styled.div`
  h4 {
    font-size: 20px;
    margin-left: 50px;
  }
`;

const Wrapper = styled.div`
  /* margin-left: 50px; */
  margin-top: 10px;
  position: relative;
  .sliderArrow {
    width: 50px;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.5);
    position: absolute;
    z-index: 99;
    color: white;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
`;

const InnerContent = styled.div`
  margin-left: 50px;
  display: flex;
  width: max-content;
  transform: translateX(0px);
  transition: all 1s ease;
`;
