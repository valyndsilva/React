import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
// import useGoogleSearch from "../useGoogleSearch"; // LIVE API CALL
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
function SearchResults() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  //   const { data } = useGoogleSearch(term);
  // console.log(data);

  // Mocking API Call using respponse.js
  const data = Response; // use local response.js to avoid spaming 100 calls API limit
  console.log(data);

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src="./images/google-search-logo.png" alt="" />
        </Link>
      </Header>
      <Content>
        <Search hideButtons />
        <h1>{term}</h1>
      </Content>
    </Container>
  );
}

export default SearchResults;

const Container = styled.div``;

const Content = styled.div``;

const Header = styled.div`
  img {
    object-fit: contain;
    height: 50px;
    margin-right: 50px;
  }
`;
