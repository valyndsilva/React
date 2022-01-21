import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search(hideButtons = false) {
  const [{}, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log("You hit the search button and typed:", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/searchresults");
  };
  return (
    <Container>
      <SearchInput>
        <SearchIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </SearchInput>
      {!hideButtons ? (
        <SearchButtons>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </SearchButtons>
      ) : (
        <SearchButtons>
          <Button
            className="searchButtons_Hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="searchButtons_Hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </SearchButtons>
      )}
    </Container>
  );
}

export default Search;

const Container = styled.form``;

const SearchInput = styled.div`
display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 560px;

  {MicIcon} {
    color: gray;
  }
  `;

const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  font-size: medium;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchButtons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    text-transform: inherit;
    color: #5f6368;

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
      background-color: #f8f8f8;
      border: 1px solid #c6c6c6;
      color: #222;
    }

    &.searchButtons_Hidden {
      display: none !important;
    }
  }
`;
