import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  return (
    <Container>
      <HeaderLeft>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </HeaderLeft>
      <HeaderRight>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <AccountCircleIcon />
      </HeaderRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;
const HeaderLeft = styled.div`
  a {
    margin-right: 20px;
    text-decoration: inherit;
    color: rgba(0, 0, 0, 0.87);
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const HeaderRight = styled(HeaderLeft)`
  display: flex;
  align-items: center;
  min-width: 13vw;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
