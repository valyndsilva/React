import React from "react";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Info,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Item className="active">
              <LineStyle className="sidebarIcon" /> Home
            </Item>
            <Item>
              <Timeline className="sidebarIcon" /> Analytics
            </Item>
            <Item>
              <TrendingUp className="sidebarIcon" /> Sales
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>QuickMenu</Title>
          <List>
            <Link to="/users">
              <Item className="active">
                <PersonOutline className="sidebarIcon" /> Users
              </Item>
            </Link>
            <Link to="/products">
              <Item>
                <Storefront className="sidebarIcon" /> Products
              </Item>
            </Link>
            <Item>
              <AttachMoney className="sidebarIcon" /> Transactions
            </Item>
            <Item>
              <BarChart className="sidebarIcon" /> Reports
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <Item className="active">
              <MailOutline className="sidebarIcon" /> Mail
            </Item>
            <Item>
              <DynamicFeed className="sidebarIcon" /> Feedback
            </Item>
            <Item>
              <ChatBubbleOutline className="sidebarIcon" /> Messages
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <Item className="active">
              <WorkOutline className="sidebarIcon" /> Manage
            </Item>
            <Item>
              <Timeline className="sidebarIcon" /> Analytics
            </Item>
            <Item>
              <Info className="sidebarIcon" /> Reports
            </Item>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.li`
  list-style: none;
  padding: 5px;
`;

const Item = styled.ul`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;

  &.active,
  &:hover {
    background-color: rgb(240, 240, 255);
  }

  .sidebarIcon {
    margin-right: 5px;
    font-size: 20px;
  }
`;
