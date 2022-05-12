import React from 'react';
import { Container } from './styles/home';

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
