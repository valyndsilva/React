import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";
// import Search from "./Search";
// import instance from "../axios";

import {
  ArrowDropDown,
  NotificationsActive,
  SearchTwoTone,
} from "@mui/icons-material";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
  // const baseURL = "https://api.themoviedb.org/3";
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  // console.log(isScrolled);

  // const fetchSearchMoviesData = async (searchKey) => {
  //   const type = searchKey ? "search" : "discover";
  //   const data = await instance.get(`${baseURL}/${type}/movie`, {
  //     params: {
  //       api_key: process.env.REACT_APP_MOVIE_API_KEY,
  //       query: searchKey,
  //     },
  //   });
  //   // console.log(data.data.results);
  //   setMovies(data.data.results);
  //   return data;
  // };

  // useEffect(() => {
  //   fetchSearchMoviesData();
  // }, []);
  // console.log(movies);

  // const searchMovies = (e) => {
  //   e.preventDefault();
  //   fetchSearchMoviesData(searchKey);
  // };

  // const renderSearchMovies = () => (
  //   <Form onSubmit={searchMovies}>
  //     <Input
  //       type="text"
  //       onChange={(e) => {
  //         setSearchKey(e.target.value);
  //       }}
  //     />
  //     <Button type={"submit"}>Search</Button>
  //   </Form>
  // );

  return (
    <Nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <NavLeft>
        <Logo src="/images/logo.svg" alt="" />
        <NavList>
          <a href="/#">
            <span>Home</span>
          </a>
          <a href="/#">
            <span>Series</span>
          </a>
          <a href="/#">
            <span>Movies</span>
          </a>
          <a href="/#">
            <span>My List</span>
          </a>
        </NavList>
      </NavLeft>
      <NavRight>
        {/* {renderSearchMovies()} */}
        <SearchTwoTone />
        <a href="/#">
          <span>Valyn</span>
        </a>
        <NotificationsActive />
        <Avatar src="/images/netflix-avatar.png" />
        <Profile>
          <ArrowDropDown />
          <Options className="options">
            <span>Settings</span>
            <span>Logout</span>
          </Options>
        </Profile>
      </NavRight>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
 display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: 70px;
    padding: 0 36px;
    position:fixed;  
    top:0;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);

    transition-timing-function: ease-in;
    transition all 0.5s;    
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavRight = styled(NavLeft)`
  justify-content: space-between;

  .MuiSvgIcon-root {
    margin: 0 12px;
    cursor: pointer;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
    align-items: center;
  }
`;
const Logo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;
const Avatar = styled.img`
  /* position: fixed; */
  /* right: 20px; */
  width: 30px;
  object-fit: contain;
  cursor: pointer;
`;

const NavList = styled.div`
  display: flex;
  flex: 1;
  margin-left: 75px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Profile = styled.div`
  &:hover {
    .options {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }
`;

const Options = styled.div`
  display: none;
  background-color: #090b13;
  border-radius: 5px;
  border-color: 1px solid white;
  span {
    padding: 10px;
    cursor: pointer;
  }
`;

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
