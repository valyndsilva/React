import React from 'react';
import { Container, Text, Title } from './styles/post';

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Title = function PostTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Post.Text = function PostText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
