import React from "react";
import { Container } from "./styles/accordion";

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
