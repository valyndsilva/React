import React from 'react';
import { Container, Text, Title } from './styles/about';

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
