import { Pagination, createTheme, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import MovieContext from "../context/MovieContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function CustomPagination() {
  const { setPage, numOfPages = 10 } = useContext(MovieContext);
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scroll(0, 0);
  };
  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  width: "100%";
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;
