import React, { useRef, useState } from "react";
import styled from "styled-components";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <Container>
      <NavContent>
        <Wrapper>
          <Logo src="/images/logo.svg" />
          <SignInButton>Sign In</SignInButton>
        </Wrapper>
      </NavContent>
      <MainContent>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <EmailInput>
            <input type="email" placeholder="email address" ref={emailRef} />
            <button onClick={handleStart}>Get Started</button>
          </EmailInput>
        ) : (
          <PasswordInput>
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={handleFinish}>Start</button>
          </PasswordInput>
        )}
      </MainContent>
    </Container>
  );
}

export default Register;
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

  h1 {
    font-size: 50px;
  }
  h2 {
    margin: 20px;
  }
  p {
    font-size: 20px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;
const SignInButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
`;

const EmailInput = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;

  input {
    flex: 9;
    height: 100%;
    border: none;
    padding: 0 10px;
  }

  button {
    flex: 3;
    height: 100%;
    background-color: red;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

const PasswordInput = styled(EmailInput)``;
