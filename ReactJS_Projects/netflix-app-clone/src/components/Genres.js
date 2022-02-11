import { Chip, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Genres({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleDelete = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fecthGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  // console.log(genres);
  useEffect(() => {
    fecthGenres();

    //when you change page the genre component needs to be unmounted and cancel api_key call
    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
        {selectedGenres.length > 0 &&
          selectedGenres.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              color="primary"
              style={{ margin: 2 }}
              size="small"
              clickable
              onDelete={() => handleDelete(genre)}
            />
          ))}
        {genres
          ? genres.map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                style={{ margin: 2 }}
                size="small"
                clickable
                onClick={() => handleAdd(genre)}
              />
            ))
          : null}
      </ThemeProvider>
    </Container>
  );
}

export default Genres;

const Container = styled.div`
  padding: 6px 50px;
  display: flex;
  justify-content: center;
`;
