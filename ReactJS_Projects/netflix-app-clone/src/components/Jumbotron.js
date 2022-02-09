import styled from "styled-components";
import { Close, InfoOutlined, PlayArrow } from "@mui/icons-material";
import { useContext, useState, useEffect } from "react";
// import instance from "../axios";
// import requests from "../requests";
// import YouTube from "react-youtube";
import MovieContext from "../context/MovieContext";

const baseImg_url = "https://image.tmdb.org/t/p/original/";
// const api_URL = "https://api.themoviedb.org/3";

function Jumbotron(type) {
  const {
    jumbotronMovie,
    playTrailer,
    setPlayTrailer,
    renderTrailer,
    trailerMovie,
    truncate,
  } = useContext(MovieContext);
  // // console.log("jumbotronMovie in Jumbotron.js", { jumbotronMovie });
  // // console.log({ trailerMovie });
  // // console.log({ playTrailer });

  // const [jumbotronMovie, setJumbotronMovieData] = useState([]);
  // const [trailerMovie, setTrailerMovie] = useState({});

  // // Set Jumbotron to clicked movie
  // const fetchMovieData = async (id) => {
  //   const data = await instance.get(`${api_URL}/movie/${id}`, {
  //     params: {
  //       api_key: process.env.REACT_APP_MOVIE_API_KEY,
  //       append_to_response: "videos",
  //     },
  //   });
  //   // console.log("fetchMovieData:", data);
  //   setTrailerMovie(data.data);

  //   return data;
  // };

  // const fetchJumbotronData = async () => {
  //   const data = await instance.get(requests.fetchRecommended);
  //   // console.log("fetchJumbotronData", data.data.results[0]);
  //   // setJumbotronMovieData(data.data.results[0]); // Set 1st movie in results
  //   await selectMovie(data.data.results[0]);
  //   // return data;
  // };

  // useEffect(() => {
  //   fetchJumbotronData();
  // }, []);
  // // console.log(jumbotronMovie);

  // const selectMovie = async (mov) => {
  //   const data = await fetchMovieData(mov.id);
  //   console.log("selectMovie data", data.data.videos);
  //   setJumbotronMovieData(mov);
  // };

  // const renderTrailer = () => {
  //   // const trailer =
  //   //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  //   // const trailer = trailerMovie.videos.results[0];
  //   const trailer = trailerMovie.videos.results.find(
  //     (vid) => vid.name === "Official Trailer"
  //   );
  //   const key = trailer ? trailer.key : trailerMovie.videos.results[0].key;
  //   return (
  //     <YouTube
  //       videoId={key}
  //       className={"youtube amru"}
  //       containerClassName={"youtube-container amru"}
  //       opts={{
  //         width: "100%",
  //         height: "100%",
  //         playerVars: {
  //           autoplay: 1,
  //           controls: 0,
  //           cc_load_policy: 0,
  //           fs: 0,
  //           iv_load_policy: 0,
  //           modestbranding: 0,
  //           rel: 0,
  //           showinfo: 0,
  //         },
  //       }}
  //     />
  //   );
  // };
  // // console.log(movies);

  return (
    <Container>
      {/* {console.log("jumbotron movie in Home.js", jumbotronMovie)} */}
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
      <Background>
        {console.log({ jumbotronMovie })}
        <img
          src={`${baseImg_url}${jumbotronMovie?.backdrop_path}`}
          alt={
            jumbotronMovie.name ||
            jumbotronMovie.original_name ||
            jumbotronMovie.title ||
            jumbotronMovie.original_title
          }
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
            {jumbotronMovie.name ||
              jumbotronMovie.original_name ||
              jumbotronMovie.title ||
              jumbotronMovie.original_title}
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
        <Description>{truncate(jumbotronMovie?.overview, 200)}</Description>
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
