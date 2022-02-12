import styled from "styled-components";
import { Close, InfoOutlined, PlayArrow } from "@mui/icons-material";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import ContentModal from "./ContentModal";

const baseImg_url = "https://image.tmdb.org/t/p/original/";

export default function Hero() {
  const {
    heroMovie,
    playTrailer,
    setPlayTrailer,
    renderTrailer,
    trailerMovie,
    truncate,
  } = useContext(MovieContext);

  return (
    <Container>
      <YTVideo>
        {playTrailer ? (
          <button>
            <Close
              className="button--close"
              onClick={() => setPlayTrailer(false)}
            />
            <span>Close</span>
          </button>
        ) : null}
        {trailerMovie.videos && playTrailer ? renderTrailer() : null}
      </YTVideo>

      <>
        <Background>
          {console.log("heroMovie:", { heroMovie })}
          <img
            src={`${baseImg_url}${heroMovie?.backdrop_path}`}
            alt={
              heroMovie.name ||
              heroMovie.original_name ||
              heroMovie.title ||
              heroMovie.original_title
            }
          />
        </Background>
        <ContentWrap>
          <MovieTitle>
            <h1>
              {heroMovie.name ||
                heroMovie.original_name ||
                heroMovie.title ||
                heroMovie.original_title}
            </h1>
          </MovieTitle>
          <Controls>
            <PlayButton onClick={() => setPlayTrailer(true)}>
              <PlayArrow />
              <span>Play</span>
            </PlayButton>
            <ContentModal className="media" movie={heroMovie}>
              <MoreButton>
                <InfoOutlined />
                <span>More Info</span>
              </MoreButton>
            </ContentModal>
          </Controls>
          <Description>{truncate(heroMovie?.overview, 200)}</Description>
        </ContentWrap>
      </>
      <Fade></Fade>
    </Container>
  );
}

const Container = styled.main`
  height: 90vh;
  position: relative;
  margin-bottom: 25px;
  width: 100vw;

  background-position: top center;
`;
// const GenreSelector = styled.div`
//   .category {
//     position: absolute;
//     top: 80px;
//     left: 50px;
//     display: flex;

//     select {
//       cursor: pointer;
//       background-color: #090b13;
//       color: white;
//       border: 1px solid white;
//       margin-left: 20px;
//     }
//   }
// `;

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
  button {
    color: white;

    .button--close {
      cursor: pointer;
      position: absolute;
      z-index: 10;
      top: 12px;
      right: 180px;
      border: 1px solid white;
      border-radius: 50%;
    }
    span {
      cursor: pointer;
      position: absolute;
      top: 42.5px;
      right: 175px;
      z-index: 10;
    }
  }
`;
