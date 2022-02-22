import React, { useContext } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import AuthContext from "../context/AuthContext";
export default function Signin() {
  const {
    error,
    handleSignIn,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    handleSignUp,
  } = useContext(AuthContext);
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {/* {!error && <Form.Error>I'm an error!</Form.Error>} */}
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              type="email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="off"
            />
            <Form.Submit
              // disabled={isInvalid}
              type="submit"
              onClick={handleSignIn}
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP} onClick={handleSignUp}>
              Sign up now.
            </Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
