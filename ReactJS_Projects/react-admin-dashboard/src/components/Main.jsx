import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HomePage from "../pages/HomePage";
import UserList from "../pages/UserList";
import User from "../pages/User";
import NewUser from "../pages/NewUser";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import NewProduct from "../pages/NewProduct";
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
            <Route exact path="/newUser" element={<NewUser />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/product/:productId" element={<Product />} />
            <Route exact path="/newProduct" element={<NewProduct />} />
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
