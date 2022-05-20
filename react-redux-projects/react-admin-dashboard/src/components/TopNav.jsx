import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function TopNav() {
  return (
    <Container>
      <Wrapper>
        <TopbarLeft>
          <Logo>User Admin</Logo>
        </TopbarLeft>
        <TopbarRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <Avatar src="/images/user.png" />
        </TopbarRight>
      </Wrapper>
    </Container>
  );
}

export default TopNav;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopbarLeft = styled.div``;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const IconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
