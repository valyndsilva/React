import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch"; // LIVE API CALL
// import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchResults() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);
  console.log(data);

  // Mocking API Call using respponse.js
  //   const data = Response; // use local response.js to avoid spaming 100 calls API limit
  //   console.log(data);

  return (
    <Container>
      <Header>
        <HeaderLogo>
          <Link to="/">
            <img src="./images/google-search-logo.png" alt="" />
          </Link>
        </HeaderLogo>
        <HeaderContent>
          <Search hideButtons />
          {/* <h1>{term}</h1> */}
          <SearchOptions>
            <OptionsLeft>
              <SearchOption>
                <SearchIcon />
                <Link to="/all">All</Link>
              </SearchOption>
              <SearchOption>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </SearchOption>
              <SearchOption>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </SearchOption>
              <SearchOption>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </SearchOption>
              <SearchOption>
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </SearchOption>
              <SearchOption>
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </SearchOption>
            </OptionsLeft>

            <OptionsRight>
              <SearchOption>
                <Link to="/settings">Settings</Link>
              </SearchOption>
              <SearchOption>
                <Link to="/tools">Tools</Link>
              </SearchOption>
            </OptionsRight>
          </SearchOptions>
        </HeaderContent>
      </Header>

      {/* {true && ( */}
      {term && (
        <SERPContent>
          <SERPCount>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </SERPCount>
          {data?.items.map((item, key) => (
            <SERPResult key={key}>
              <SERPLink>
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <SERPImage src={item.pagemap?.cse_image[0]?.src} alt="" />
                    )}
                  {item.displayLink} ›
                </a>
              </SERPLink>
              <SERPTitle href={item.link}>
                <h2>{item.title}</h2>
              </SERPTitle>
              <SERPSnippet>{item.snippet}</SERPSnippet>
            </SERPResult>
          ))}
        </SERPContent>
      )}
    </Container>
  );
}

export default SearchResults;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  position: sticky;
  top: 0;
  padding: 30px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  z-index: 100;
`;

const HeaderContent = styled.div`
  .search_input {
    margin-top: 0;
    width: unset;
    margin: unset;
    max-width: unset;
  }
`;

const HeaderLogo = styled.div`
  img {
    object-fit: contain;
    height: 50px;
    margin-right: 50px;
  }
`;

const SearchOptions = styled.div`
  display: flex;
  align-items: center;
  color: grey;

  a {
    text-decoration: none;
    color: grey;
    margin-left: 5px;
  }
`;
const SearchOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const OptionsLeft = styled.div`
  display: flex;
`;

const OptionsRight = styled(OptionsLeft)`
  margin-left: 80px;
`;

const SERPContent = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
`;

const SERPCount = styled.p`
  color: #70757a;
  font-size: 14px;
`;

const SERPResult = styled.div`
  margin: 40px 0;
`;

const SERPLink = styled.a``;

const SERPImage = styled.img`
  object-fit: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const SERPTitle = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  h2 {
    font-weight: 500;
  }
`;

const SERPSnippet = styled.p`
  margin-top: 10px;
`;
