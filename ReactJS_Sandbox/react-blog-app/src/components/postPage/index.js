import React from 'react';
import { Button, Container, Post, Text, Title } from './styles/postPage';

export default function PostPage({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PostPage.Post = function PostPagePost({ children, ...restProps }) {
  return <Post {...restProps}>{children}</Post>;
};

PostPage.Title = function PostPageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

PostPage.Text = function PostPageText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
PostPage.Button = function PostPageButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
