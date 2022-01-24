import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HomePage from "../pages/HomePage";

function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HomePage />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Content = styled.div`
  flex: 4;
`;
