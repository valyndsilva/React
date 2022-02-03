import React, { useState } from "react";
import styled from "styled-components";
import { Close, InfoOutlined, PlayArrow } from "@mui/icons-material";

const baseImg_url = "https://image.tmdb.org/t/p/original/";

function Jumbotron({
  jumbotronmovie,
  type,
  selectMovie,
  playTrailer,
  setPlayTrailer,
  trailermovie,
  renderTrailer,
}) {
  console.log("jumbotronmovie in Jumbotron.js", { jumbotronmovie });
  // console.log({ trailermovie });
  // console.log({ playTrailer });

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Container>
      {/* {console.log("jumbotron movie in Home.js", jumbotronmovie)} */}
      <GenreSelector>
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "TV Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasyhistory">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
      </GenreSelector>
      <YTVideo>
        {playTrailer ? (
          <Close
            className="button--close"
            onClick={() => setPlayTrailer(false)}
          />
        ) : null}
        {trailermovie.videos && playTrailer ? renderTrailer() : null}
      </YTVideo>
      <Background>
        {/* {console.log({ Movie })} */}
        <img
          src={`${baseImg_url}${jumbotronmovie?.backdrop_path}`}
          alt={jumbotronmovie?.title || jumbotronmovie?.original_title || null}
        />
      </Background>
      <ContentWrap>
        {/* <MovieLogoImg>
          <img
            src="/images/detail-luca-logo.png"
            alt={
              jumbotronMovie?.title || jumbotronMovie?.original_title || null
            }
          />
        </MovieLogoImg> */}
        <MovieTitle>
          <h1>
            {jumbotronmovie?.title || jumbotronmovie?.original_title || null}
          </h1>
        </MovieTitle>
        <Controls>
          <PlayButton onClick={() => setPlayTrailer(true)}>
            <PlayArrow />
            <span>Play</span>
          </PlayButton>
          <MoreButton>
            <InfoOutlined />
            <span>More Info</span>
          </MoreButton>
        </Controls>
        <Description>{truncate(jumbotronmovie?.overview, 200)}</Description>
      </ContentWrap>
      <Fade></Fade>
    </Container>
  );
}

export default Jumbotron;

const Container = styled.main`
  height: 90vh;
  position: relative;
  margin-bottom: 25px;
  width: 100vw;

  background-position: top center;
`;
const GenreSelector = styled.div`
  .category {
    position: absolute;
    top: 80px;
    left: 50px;
    display: flex;

    select {
      cursor: pointer;
      background-color: #090b13;
      color: white;
      border: 1px solid white;
      margin-left: 20px;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  img {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    object-position: 0px 10%;

    @media (max-width: 768px) {
      object-position: 50% 50%;
    }
  }
`;
const ContentWrap = styled.div`
  width: 40%;
  position: absolute;
  left: 50px;
  bottom: 150px;
`;
// const MovieLogoImg = styled.div`
//   height: 120px;
//   width:400px
//   margin-bottom: 15px;
//   img {
//     height: 100%;
//     object-fit: contain;
//   }
// `;

const MovieTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
  letter-spacing: 1.4;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 5px;
  }
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const MoreButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  margin: 20px 0px;
  line-height: 1.3;
  color: rgb(249, 249, 249);
  width: 45rem;
  max-width: 400px;
  height: 80px;
`;
const Fade = styled.div`
  height: 90vh;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

const YTVideo = styled.div`
  .youtube-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  .button--close {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    top: 30px;
    right: 100px;
    border: 1px solid white;
    border-radius: 50%;
  }
`;
