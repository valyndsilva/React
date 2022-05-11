import React from 'react';
import { Container } from './styles/newPost';

export default function NewPost({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
