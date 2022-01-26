import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "../axios";
import requests from "../requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Jumbotron() {
  const [jumbotronMovie, setjumbotronMovie] = useState([]);

  // This snippet runs based on a specific condition / variable
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchRecommended);
      setjumbotronMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
    // if [] is empty, run once when <Movies/> loads and don't run again.
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Container>
      <Background>
        <img
          key={jumbotronMovie.id}
          src={`${base_url}${jumbotronMovie?.backdrop_path}`}
          alt={jumbotronMovie.original_title}
        />
      </Background>

      <ContentWrap>
        {/* {console.log(jumbotronMovie)} */}

        <MovieTitle>
          <h1> {jumbotronMovie?.title || jumbotronMovie?.original_title} </h1>
        </MovieTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </PlayButton>
          <ListButton>
            <span>My List</span>
          </ListButton>
        </Controls>
        <Description>{truncate(jumbotronMovie?.overview, 200)}</Description>
      </ContentWrap>
      <Fade></Fade>
    </Container>
  );
}

export default Jumbotron;

const Container = styled.main`
    position:relative;
    margin-bottom:25px;
    width:100vw;
    height:448px;
    background-position:top center;
   }
`;
const Background = styled.div`
  position: absolute;
  z-index: -1;
  img {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
    object-position: 0px 10%;

    @media (max-width: 768px) {
      width: 100vw;
      height: 448px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`;
const ContentWrap = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const MovieTitle = styled.div`
  font-size: 26px;
  font-weight: 800;
  padding-bottom: 0.3rem;
  letter-spacing: 1.4;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const ListButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  line-height: 1.3;
  font-size: 0.8rem;
  padding-top: 1rem;
  color: rgb(249, 249, 249);
  width: 45rem;
  max-width: 360px;
  height: 80px;
`;
const Fade = styled.div`
  height: 18.6rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );

  @media (max-width: 768px) {
    height: 16.1rem;
  }
`;
