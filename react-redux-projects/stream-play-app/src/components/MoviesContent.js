import React, { useContext } from "react";
import styled from "styled-components";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import MovieContext from "../context/MovieContext";
import { img_300, unavailablePortrait } from "../config/config";
import { Badge } from "@mui/material";

export default function MoviesContent({
  index,
  movie,
  poster,
  media_type,
  vote_average,
}) {
  const { setPlayTrailer, isHovered, setIsHovered, selectMovieData, truncate } =
    useContext(MovieContext);
  return (
    <Container>
      <InnerContainer
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => selectMovieData(movie)}
      >
        <InnerContent>
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            src={
              poster ? `${img_300}${movie.poster_path}` : unavailablePortrait
            }
            alt={
              movie.original_title ||
              movie.title ||
              movie.original_name ||
              movie.name
            }
          />
        </InnerContent>
        {isHovered && (
          <>
            {/* <video src={trailer} autoPlay={true} loop></video> */}
            <InfoContainer>
              <Controls>
                <PlayArrow onClick={() => setPlayTrailer(true)} />
                <Add />
                <ThumbUpAltOutlined />
                <ThumbDownAltOutlined />
              </Controls>
              <InfoTop>
                <span>
                  {movie.original_title ||
                    movie.title ||
                    movie.original_name ||
                    movie.name}
                </span>
                {/* <span className="limit">Score: {movie.vote_average}</span> */}
                <Badge
                  className="badge"
                  badgeContent={vote_average}
                  color={vote_average > 6 ? "primary" : "secondary"}
                />

                <p className="media-type">
                  {media_type === "tv" ? "(TV Series)" : "(Movies)"}
                </p>
              </InfoTop>
              <span className="description">
                {truncate(movie.overview, 150)}
              </span>
              {/* <span className="genre">{genreIds}</span> */}
            </InfoContainer>
          </>
        )}
      </InnerContainer>
    </Container>
  );
}
const Container = styled.div``;

const InnerContainer = styled.div`
  cursor: pointer;
  width: 225px; // split half width 112.5px
  height: 338px;
  margin-right: 5px;
  overflow: hidden;
  background-color: #090b13;
  margin: 10px;

  &:hover {
    width: 225px; // split half width 162.5px
    height: 338px;
    top: 90px;
    -webkit-box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      height: 180px;
      object-position: center top;
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

const InnerContent = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  .media-type {
    padding-left: 5px;
  }
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
  justify-content: space-between;
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
