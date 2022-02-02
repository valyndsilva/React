import React from "react";
import styled from "styled-components";

function Search(searchmovies, setsearchkey) {
  return (
    <Container>
      <Form onSubmit={searchmovies}>
        <Input type="text" onChange={setsearchkey} />
        <Button type={"submit"}>Search</Button>
      </Form>
      {/* {searchTerm} */}
    </Container>
  );
}

export default Search;
const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
