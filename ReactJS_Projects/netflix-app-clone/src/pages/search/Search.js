import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { SearchTwoTone } from "@mui/icons-material";
import MovieContext from "../../context/MovieContext";
import SingleContent from "../../components/SeriesContent";
import CustomPagination from "../../components/CustomPagination";
import axios from "axios";
function Search() {
  const {
    selectMovie,
    setPlayTrailer,
    page,
    setPage,
    numOfPages,
    setNumOfPages,
    type,
    setType,
  } = useContext(MovieContext);

  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&page=${page}&query=${searchText}&language=en-US&include_adult=false`
    );
    setSearchData(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <Container>
      <Navbar />
      <ThemeProvider theme={darkTheme}>
        <SearchField>
          <TextField
            style={{ flex: 1 }}
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <SearchTwoTone />
          </Button>
        </SearchField>
        <Tabs
          style={{ width: "100%" }}
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search Series" />
        </Tabs>

        <InnerContent>
          {searchData.map((movie, index) => (
            <SingleContent
              key={movie.id}
              movie={movie}
              index={index}
              poster={movie.poster_path}
              title={
                movie.original_title ||
                movie.title ||
                movie.original_name ||
                movie.name
              }
              date={movie.first_air_date || movie.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={movie.vote_average}
              selectMovie={selectMovie}
              setPlayTrailer={setPlayTrailer}
            />
          ))}
          {searchText &&
            !searchData &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </InnerContent>

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </ThemeProvider>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  .MuiButtonBase-root {
    max-width: inherit;
  }
`;
const SearchField = styled.div`
  display: flex;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;
`;

const InnerContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 1s ease;
  margin-bottom: 10px;
`;
