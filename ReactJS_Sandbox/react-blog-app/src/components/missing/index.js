import React from 'react';
import { Container, Text, Title } from './styles/missing';

export default function Missing({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Missing.Title = function MissingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Missing.Text = function MissingText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
