import React from 'react';
import { Container } from './styles/feed';

export default function Feed({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
