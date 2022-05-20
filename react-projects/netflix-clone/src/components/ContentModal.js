import React, { useContext, useState } from "react";
import { Backdrop, Box, Modal, Fade, Link } from "@mui/material";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  VolumeUp,
} from "@mui/icons-material";
import styled from "styled-components";
import TmdbContext from "../context/TmdbContext";
import { Image, TopControls } from "./card/styles/card";
import apiConfig from "../api/apiConfig";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "80%",
  bgcolor: "#040714",
  border: "2px solid #000",
  boxShadow: 24,
  // overflow: "hidden",
  overflowY: "scroll",
  //   p: 4,
};
const baseImg_url = "https://image.tmdb.org/t/p/original/";
export default function ContentModal({ children, type, movie }) {
  // const { setPlayTrailer, queryGenre } = useContext(MovieContext);
  const {
    setPlayTrailer,
    creditsData,
    genreData,
    similarData,
    seasonsData,
    episodesData,
  } = useContext(TmdbContext);
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Select Season");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function handleSelectValue(e) {
    return setSelectValue(e.target.value);
  }

  return (
    <div>
      <Link className="media" onClick={handleOpen}>
        {children}
      </Link>
      <Container>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <InnerContainer>
                {movie.poster_path ? (
                  <img
                    key={movie.id}
                    // onClick={() => handleClick(movie)}
                    src={`${baseImg_url}${movie.backdrop_path}`}
                    alt={movie.original_title}
                  />
                ) : null}
                <BottomFade></BottomFade>

                <DetailsContainer>
                  <Controls>
                    <span className="movie_title">
                      {movie.original_title || movie.original_name}
                    </span>
                    <LeftControls>
                      <PlayArrow onClick={() => setPlayTrailer(true)} />
                      <Add />
                      <ThumbUpAltOutlined />
                      <ThumbDownAltOutlined />
                    </LeftControls>
                    <RightControls>
                      <VolumeUp />
                    </RightControls>
                  </Controls>
                  <InfoContainer>
                    <LeftInfo>
                      <InfoTop>
                        <span className="percentValue"> 86% Match</span>

                        <span className="release_date">
                          {parseInt(
                            movie.release_date || movie.first_air_date || "-"
                          )}
                        </span>
                        <span className="maturityValue">18</span>
                        <span className="lengthValue">1h 57m</span>
                      </InfoTop>
                      <span className="description">{movie.overview}</span>
                    </LeftInfo>
                    <RightInfo>
                      <p>
                        <span>
                          <GreyTitle>Cast:</GreyTitle> {creditsData}
                        </span>
                      </p>
                      <p>
                        <span>
                          <GreyTitle>Genres</GreyTitle> {genreData}
                        </span>
                        {/* {queryGenre} */}
                      </p>
                    </RightInfo>
                  </InfoContainer>

                  {type === "tv" && (
                    <EpisodeContainer>
                      <TopContent>
                        <span>Episodes</span>
                        <span>
                          Season:
                          <select
                            value={selectValue}
                            onChange={handleSelectValue}
                          >
                            {seasonsData.map((el) => (
                              <option key={el.id} value={el.name}>
                                {el.name}
                              </option>
                            ))}
                          </select>
                        </span>
                      </TopContent>
                      <ListContent>
                        {episodesData.map((el) => (
                          <InnerContent key={el.id}>
                            <LeftContent>
                              <h4>{el.name}</h4>
                              <img
                                src={`${baseImg_url}${el.still_path}`}
                                alt={el.name}
                              />
                            </LeftContent>
                            <RightContent>
                              <p>{el.overview}</p>
                            </RightContent>
                            {/* <ul>
                          {episodesData.map((el) => (
                            <li key={el.id}>
                              <LeftDetail>
                                <h4>{el.name}</h4>
                                <img
                                  src={`${baseImg_url}${el.still_path}`}
                                  alt={el.name}
                                />
                              </LeftDetail>
                              <RightDetail>
                                <p>{el.overview}</p>
                              </RightDetail>
                            </li>
                          ))}
                        </ul> */}
                          </InnerContent>
                        ))}
                      </ListContent>
                    </EpisodeContainer>
                  )}
                  <hr></hr>
                  <SimilarWrapper>
                    <p class="title">More Like This</p>
                    <SimilarContainer>
                      {/* {console.log({ similarData })} */}
                      {similarData
                        .map((item, index) => (
                          <SimilarItem key={index}>
                            {item.backdrop_path ? (
                              <Image
                                src={apiConfig.originalImage(
                                  item.backdrop_path || item.poster_path
                                )}
                              />
                            ) : null}

                            <SimilarMeta>
                              <TopControls className="cotentModal">
                                {item.original_name || item.original_title}
                                &nbsp;
                                <Add className="addIcon" />
                              </TopControls>

                              <InfoTop>
                                <span className="percentValue">93% Match</span>
                                <span className="maturityValue">18</span>
                                <span className="lengthValue">1h 57m</span>
                              </InfoTop>
                              <span className="description">
                                {truncate(item.overview, 150)}
                              </span>
                            </SimilarMeta>
                          </SimilarItem>
                        ))
                        .splice(0, 12)}
                    </SimilarContainer>
                  </SimilarWrapper>
                  <hr></hr>
                  <AboutContainer>
                    <p className="title">
                      <span>
                        More About &nbsp;
                        {movie.original_title ||
                          movie.title ||
                          movie.original_name ||
                          movie.original_name}
                      </span>
                    </p>
                    <p className="cast">
                      <span>
                        <GreyTitle>Cast: </GreyTitle> {creditsData}
                      </span>
                    </p>
                    <p className="genres">
                      <span>
                        <GreyTitle>Genres: </GreyTitle> {genreData}
                      </span>
                    </p>
                    <p className="ratings">
                      <GreyTitle>Maturity rating:</GreyTitle>
                      <span className="maturityValue">18</span>
                    </p>
                  </AboutContainer>
                </DetailsContainer>
              </InnerContainer>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
}

const Container = styled.div`
  /* background-color: #090b13; */
  background-color: #181818;
`;
const InnerContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  position: relative;
  background-color: #181818;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  /*
  video {
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  } */
`;
const BottomFade = styled.div`
  /* height: 40vh; */
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

const DetailsContainer = styled.div`
  margin: 2rem;
`;
const Controls = styled.div`
  display: flex;
  padding: 15px;
  /* justify-content: space-between; */

  .MuiSvgIcon-root {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 32px;
  }

  .movie_title {
    margin: 15px 0;
  }
`;

const LeftControls = styled.div`
  position: absolute;
  top: 300px;
`;
const RightControls = styled.div`
  position: absolute;
  top: 300px;
  right: 2%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  .description {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const LeftInfo = styled.div`
  width: 60%;
  font-size: 14px;
  flex: 1;
  align-items: flex-end;
`;
const RightInfo = styled.div`
  font-size: 13px;
  width: 40%;
  flex: 1;
  align-items: flex-start;
  margin-left: 30px;
  span {
    font-size: 14px;
    color: lightgray;
  }
  p {
    margin-bottom: 15px;
  }
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;

  .percentValue {
    color: #45d369;
    font-weight: 600;
  }

  .percentValue,
  .release_date,
  .maturityValue {
    margin-right: 10px;
  }

  .maturityValue {
    background-color: #fb4f93;
    border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    width: 2em;
    height: 2em;
    color: white;
    vertical-align: center;
  }
`;

const EpisodeContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-top: 15px;
  padding: 15px;
  width: 100%;
`;

const ListContent = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  width: 100%;
`;
const InnerContent = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  margin-top: 15px;
  padding: 15px;
  width: 100%;
  list-style: none;
  flex-direction: row;
`;

const LeftContent = styled.div`
  width: 30%;
  font-size: 13px;
  img {
    width: 200px;
    height: 100%;
    object-fit: cover;
  }
`;

const RightContent = styled.div`
  font-size: 13px;
  padding: 15px;
  width: 70%;

  span {
    font-size: 14px;
    color: lightgray;
  }
`;

const SimilarWrapper = styled.div`
  .title {
    font-weight: 400;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
`;
const SimilarContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  z-index: 899;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const SimilarItem = styled.div`
  flex-grow: 1;
  flex-basis: 25%;
  /* width: 198px; // split half width 148px */
  height: 100%;

  margin-right: 5px;
  overflow: hidden;
  /* background-color: #181818; */
  background-color: #2f2f2f;
  margin: 0.5rem;
  img {
    z-index: 1;
    height: 140px;
  }
`;
const SimilarMeta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  .cotentModal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .addIcon {
      border: 2px solid #919191;
      background-color: #232323;
      color: white;
      padding: 8px;
      border-radius: 50%;
      margin-right: 8px;
      height: 2.6rem;
      width: 2.6rem;

      &:hover {
        border: 2px solid white;
        background-color: #303030;
      }
    }
  }
`;
const GreyTitle = styled.span`
  color: #777;
  margin-right: 1em;
  white-space: nowrap;
`;
const AboutContainer = styled.div`
  .title {
    font-weight: 400;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
  .cast,
  .genres,
  .ratings {
    font-size: 14px;
    line-height: 20px;
    margin: 0.5em;
    margin-left: 0;
    word-break: break-word;
  }
`;
