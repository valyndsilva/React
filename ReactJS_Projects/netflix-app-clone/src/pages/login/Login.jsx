import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <NavContent>
        <Wrapper>
          <Logo src="/images/logo.svg" />
        </Wrapper>
      </NavContent>
      <MainContent>
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more.</b>
          </small>
        </form>
      </MainContent>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/images/netflix-register.jpeg");
  background-size: cover;
  position: relative;
`;
const NavContent = styled.div``;
const Wrapper = styled.div`
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 300px;
    height: 370px;
    padding: 30px;
    border-radius: 5px;
    background-color: #090b13;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      height: 40px;
      border-radius: 5px;
      background-color: gray;
      color: white;
      padding-left: 10px;
      &::placeholder {
        color: lightgray;
      }
    }

    button {
      height: 40px;
      border-radius: 5px;
      background-color: red;
      color: white;
      border: none;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    span {
      color: lightgray;

      b {
        color: white;
      }
    }
  }
`;

const Logo = styled.img`
  height: 40px;
`;
