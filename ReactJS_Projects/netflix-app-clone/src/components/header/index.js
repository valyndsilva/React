import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Gradient,
  Container,
  Logo,
  ButtonLink,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>
      <Gradient></Gradient>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

// Header.Gradient = function HeaderGradient({ children, ...restProps }) {
//   return <Gradient {...restProps}>{children}</Gradient>;
// };

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
