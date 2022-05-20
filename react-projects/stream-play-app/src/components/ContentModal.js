import * as React from "react";
import { Backdrop, Box, Modal, Fade, Button } from "@mui/material";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  VolumeUp,
} from "@mui/icons-material";
import styled from "styled-components";
import MovieContext from "../context/MovieContext";

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
export default function ContentModal({ children, movie }) {
  const { setPlayTrailer, queryGenre } = React.useContext(MovieContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="media" onClick={handleOpen}>
        {children}
      </Button>
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

                <Controls>
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
                      <span className="match"> 86% Match</span>
                      <span className="movie_title">
                        {movie.original_title}
                      </span>
                      <span className="release_date">
                        {parseInt(movie.release_date)}
                      </span>
                      <span className="ratings">
                        Ratings: {parseInt(movie.vote_average)}
                      </span>
                    </InfoTop>
                    <span className="description">{movie.overview}</span>
                  </LeftInfo>
                  <RightInfo>
                    <p>
                      <span>Cast: </span>Cast names goes here.
                    </p>
                    <p>
                      <span>Genres: </span>
                      {queryGenre}
                    </p>
                  </RightInfo>
                </InfoContainer>
                <EpisodeContainer>
                  <span>Epidsodes</span>
                  <InnerContent>
                    <LeftContent>
                      <h4>Episode 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos iusto praesentium odio dolore cupiditate.
                        Similique!
                      </p>
                    </LeftContent>
                    <RightContent>40m</RightContent>
                  </InnerContent>
                </EpisodeContainer>
                <EpisodeContainer>
                  <InnerContent>
                    <LeftContent>
                      <h4>Episode 2</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos iusto praesentium odio dolore cupiditate.
                        Similique!
                      </p>
                    </LeftContent>
                    <RightContent>40m</RightContent>
                  </InnerContent>
                </EpisodeContainer>
              </InnerContainer>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #090b13;
`;
const InnerContainer = styled.div`
  width: 100%;

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

const Controls = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;

  .MuiSvgIcon-root {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 32px;
  }
`;

const LeftControls = styled.div``;
const RightControls = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  .description {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const LeftInfo = styled.div`
  width: 60%;
  font-size: 13px;
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
  color: gray;

  .match {
    color: green;
    font-weight: bold;
  }

  .match,
  .release_date,
  .ratings,
  .movie_title {
    margin-right: 10px;
  }

  .ratings {
    border: 1px solid gray;
    padding: 1px 5px;
    margin-left: 5px;
  }
`;

const EpisodeContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: gray;
  margin-top: 15px;
  padding: 15px;
  width: 100%;
`;

const LeftContent = styled.div`
  width: 60%;
  font-size: 13px;
  flex: 1;
`;

const RightContent = styled.div`
  font-size: 13px;
  width: 40%;
  flex: 1;

  span {
    font-size: 14px;
    color: lightgray;
  }
`;
