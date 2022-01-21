import React from "react";
import styled from "styled-components";
import Search from "../components/Search";

function Home() {
  return (
    <Container>
      <Content>
        <img src="./images/google-logo.gif" alt="" />
        <InputContainer>
          <Search />
        </InputContainer>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10%;
  flex-direction: column;

  > img {
    object-fit: contain;
    height: 150px;
  }
`;

const InputContainer = styled.div``;
