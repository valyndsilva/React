import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function User() {
  return (
    <Container>
      <TitleContent>
        <Title>Edit User</Title>
        <Button>Create</Button>
      </TitleContent>
      <UserContent>
        <UserShow>
          <UserData1>
            <UserImg
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
            <UserTitle>
              <UserFullName>Anna Keller</UserFullName>
              <UserJobTitle>React Developer</UserJobTitle>
            </UserTitle>
          </UserData1>
          <UserData2>
            <AccountTitle>Account Details</AccountTitle>
            <AccountDetails>
              <PermIdentity className="userShowIcon" />
              <UserName>annakeller99</UserName>
            </AccountDetails>
            <AccountDetails>
              <CalendarToday className="userShowIcon" />
              <UserName>10.12.1999</UserName>
            </AccountDetails>
            <AccountTitle>Contact Details</AccountTitle>
            <AccountDetails>
              <PhoneAndroid className="userShowIcon" />
              <UserName>+1 123 456 67</UserName>
            </AccountDetails>
            <AccountDetails>
              <MailOutline className="userShowIcon" />
              <UserName>annakeller99@gmail.com</UserName>
            </AccountDetails>
            <AccountDetails>
              <LocationSearching className="userShowIcon" />
              <UserName>Lisbon | Portugal</UserName>
            </AccountDetails>
          </UserData2>
        </UserShow>
        <UserUpdate>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateFormLeft>
              <UpdateItem>
                <UpdateLabel>Username</UpdateLabel>
                <UpdateInput type="text" placeholder="annakeller99" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Full Name</UpdateLabel>
                <UpdateInput type="text" placeholder="Anna Keller" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Email</UpdateLabel>
                <UpdateInput type="text" placeholder="annakeller99@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Phone</UpdateLabel>
                <UpdateInput type="text" placeholder="+1 123 456 67" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Address</UpdateLabel>
                <UpdateInput type="text" placeholder="Lisbon | Portugal" />
              </UpdateItem>
            </UpdateFormLeft>
            <UpdateFormRight>
              <UpdateImg>
                <UpdateUserImg
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />
                <UpdateUserImgLabel htmlFor="file">
                  <Publish />
                </UpdateUserImgLabel>
                <UpdateImgInput type="file" id="file" />
              </UpdateImg>
            </UpdateFormRight>
          </UpdateForm>
        </UserUpdate>
      </UserContent>
    </Container>
  );
}

export default User;

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1``;
const Button = styled.button`
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

const UserContent = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UserData1 = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserFullName = styled.span`
  font-weight: 600;
`;
const UserJobTitle = styled.span`
  font-weight: 300;
`;

const UserData2 = styled.div`
  margin-top: 20px;
`;

const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

const AccountTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const UserName = styled.span`
  margin-left: 10px;
`;
const UpdateTitle = styled.span``;

const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UpdateFormLeft = styled.div``;
const UpdateFormRight = styled.div``;
const UpdateItem = styled.div``;
const UpdateLabel = styled.label``;
const UpdateInput = styled.input``;
const UpdateImg = styled.div``;
const UpdateUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const UpdateUserImgLabel = styled.label``;
const UpdateImgInput = styled.input`
  display: none;
`;
