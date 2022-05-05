import React from "react";
import { Container, Copyright } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>;
};
