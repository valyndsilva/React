import React from "react";
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
function WidgetSmall() {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <Item>
          <Image src="/images/user.png" />
          <User>
            <UserName>Anna Keller</UserName>
            <JobTitle>React Developer</JobTitle>
          </User>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="/images/user.png" />
          <User>
            <UserName>Anna Keller</UserName>
            <JobTitle>React Developer</JobTitle>
          </User>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="/images/user.png" />
          <User>
            <UserName>Anna Keller</UserName>
            <JobTitle>React Developer</JobTitle>
          </User>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="/images/user.png" />
          <User>
            <UserName>Anna Keller</UserName>
            <JobTitle>React Developer</JobTitle>
          </User>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="/images/user.png" />
          <User>
            <UserName>Anna Keller</UserName>
            <JobTitle>React Developer</JobTitle>
          </User>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </Item>
      </List>
    </Container>
  );
}

export default WidgetSmall;

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
`;

const JobTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  .widgetSmIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;
