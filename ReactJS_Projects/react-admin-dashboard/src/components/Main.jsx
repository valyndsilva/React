import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HomePage from "../pages/HomePage";
import UserList from "../pages/UserList";
import User from "../pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Content>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/user/:userId" element={<User />} />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Content = styled.div`
  flex: 4;
`;
