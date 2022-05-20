import React from "react";
import styled from "styled-components";
function NewUser() {
  return (
    <Container>
      <Title>New User</Title>
      <NewUserForm>
        <NewUserItem>
          <Label>Username</Label>
          <Input type="text" placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Snow" />
        </NewUserItem>
        <NewUserItem>
          <Label>Email</Label>
          <Input type="email" placeholder="john@gmail.com" />
        </NewUserItem>
        <NewUserItem>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <Label>Phone</Label>
          <Input type="number" placeholder="+1 123 456 78" />
        </NewUserItem>
        <NewUserItem>
          <Label>Address</Label>
          <Input type="text" placeholder="Lisbon | Portugal" />
        </NewUserItem>
        <NewUserItem>
          <Label>Gender</Label>
          <NewUserGender>
            <Input type="radio" name="gender" id="male" value="male" />
            <Label for="male">Male</Label>
            <Input type="radio" name="gender" id="female" value="female" />
            <Label for="female">Female</Label>
            <Input type="radio" name="gender" id="other" value="other" />
            <Label for="other">Other</Label>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <Label>Active</Label>
          <UserSelect name="active" id="active">
            <UserOption value="yes">Yes</UserOption>
            <UserOption value="no">No</UserOption>
          </UserSelect>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
}

export default NewUser;

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;

  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

const Label = styled.label``;
const Input = styled.input``;

const NewUserGender = styled.div`
  input {
    margin-top: 15px;
    height: inherit;
  }
  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
    font-weight: inherit;
  }
`;
const UserSelect = styled.select`
  padding: 10px;
  height: 40px;
  border-radius: 5px;
`;
const UserOption = styled.option``;

const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
