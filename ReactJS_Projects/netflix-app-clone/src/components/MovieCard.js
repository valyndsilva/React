import styled from "styled-components";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { useContext, useState, useEffect } from "react";
import MovieContext from "../context/MovieContext";
// import { genresList } from "../genres";
import ContentModal from "./ContentModal";
import axios from "axios";

const baseImg_url = "https://image.tmdb.org/t/p/original/";

export default function MovieCard({ movie, index }) {
  const { selectMovie, setPlayTrailer, truncate, queryGenre, setQueryGenre } =
    useContext(MovieContext);

  //useState moviecard
  const [isHovered, setIsHovered] = useState(false);

  const fetchMovieGenreIds = async () => {
    // const genre_id = [];
    // genresList.map((el) => (genre_id[el.id] = el.name));
    // console.log(genre_id); // get movie genre ids from genresList
    // console.log(movie.genre_ids); // get movie genre ids from movie object
    // const movieGenre = movie.genre_ids.map((id) => genre_id[id]); // set movie genre ids to name referring to generesList
    // return setGenreIds(movieGenre.join(", "));

    const genre_id = [];
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
    console.log("Genres List:", data.genres);
    data.genres.map((gen) => (genre_id[gen.id] = gen.name));
    console.log(genre_id); // get movie genre ids from data.genres
    console.log(movie.genre_ids); // get movie genre ids from movie object
    const movieGenre = movie.genre_ids.map((id) => genre_id[id]); // set movie genre ids to name referring to generesList
    console.log(movieGenre);
    console.log(movieGenre.join(", "));
    return setQueryGenre(movieGenre.join(", "));
  };

  useEffect(() => {
    fetchMovieGenreIds();
    // eslint-disable-next-line
  }, []);

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
              <LeftControls>
                <PlayArrow onClick={() => setPlayTrailer(true)} />
                <Add />
                <ThumbUpAltOutlined />
                <ThumbDownAltOutlined />
              </LeftControls>
              <ContentModal className="media" movie={movie}>
                <RightControls>
                  <KeyboardArrowDown />
                </RightControls>
              </ContentModal>
            </Controls>
            <InfoTop>
              <span>{movie.original_title}</span>
              <span className="limit">Score: {movie.vote_average}</span>
            </InfoTop>
            <span className="description">{truncate(movie.overview, 100)}</span>
            <span className="genre">{queryGenre}</span>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  width: 225px; // split half width 112.5px
  height: 120px;
  margin-right: 5px;
  overflow: hidden;
  background-color: #090b13;

  &:hover {
    width: 325px; // split half width 162.5px
    height: 340px;
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
  padding: 15px;
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
  justify-content: space-between;

  .MuiSvgIcon-root {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 32px;
  }

  .media {
    color: white;
    padding: 0;
  }
`;

const LeftControls = styled.div``;
const RightControls = styled.div``;
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
