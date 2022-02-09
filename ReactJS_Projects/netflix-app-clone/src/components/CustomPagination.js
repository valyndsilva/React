import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import MovieContext from "../context/MovieContext";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
function CustomPagination({ numOfPages = 10 }) {
  const { setPage } = useContext(MovieContext);
  const handlePageChange = (page) => {
    setPage(page);
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

export default CustomPagination;
const Container = styled.div`
  width: "100%";
  display: flex;
  justify-content: center;
  margin-top: 10px;
  nav {
    color: white;
  }
`;
