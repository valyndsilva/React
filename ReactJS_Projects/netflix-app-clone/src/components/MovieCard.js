import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const baseImg_url = "https://image.tmdb.org/t/p/original/";

function MovieCard({ movie, index, selectMovie }) {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Container
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => selectMovie(movie)}
    >
      {movie.poster_path ? (
        <img
          key={movie.id}
          // onClick={() => handleClick(movie)}
          src={`${baseImg_url}${movie.backdrop_path}`}
          alt={movie.original_title}
        />
      ) : null}
      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop></video> */}
          <InfoContainer>
            <Controls>
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
            </Controls>
            <InfoTop>
              <span>{movie.original_title}</span>
              <span className="limit">Score: {movie.vote_average}</span>
            </InfoTop>
            <span className="description">{truncate(movie.overview, 200)}</span>
            <span className="genre">Action</span>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}

export default MovieCard;

const Container = styled.div`
  cursor: pointer;
  width: 225px; // split half width 112.5px
  height: 120px;
  margin-right: 5px;
  overflow: hidden;
  background-color: #090b13;

  &:hover {
    width: 325px; // split half width 162.5px
    height: 330px;
    position: absolute;
    top: -180px;
    -webkit-box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    border-radius: 5px;
    img {
      height: 140px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* transition: transform 450ms;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; */
  }

  video {
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  .description {
    font-size: 13px;
    margin-bottom: 10px;
  }
  .genre {
    font-size: 14px;
    color: lightgray;
  }
`;
const Controls = styled.div`
  display: flex;
  margin-bottom: 10px;

  .MuiSvgIcon-root {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 32px;
  }
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;

  .limit {
    border: 1px solid gray;
    padding: 1px 3px;
    margin-left: 5px;
  }
`;
