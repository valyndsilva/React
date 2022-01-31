import React, { useState } from "react";
import styled from "styled-components";

function Search() {
  const [searchKey, setSearchKey] = useState("");
  const searchMovies = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Content onSubmit={searchMovies}>
        <Input
          type="text"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <Button type="submit">Search</Button>
      </Content>
    </Container>
  );
}

export default Search;
const Container = styled.div``;
const Content = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
