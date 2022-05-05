import React from "react";
import { Container, Text, Button } from "./styles/content";

export default function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Content.Text = function ContentText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Content.Button = function ContentButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
