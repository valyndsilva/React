import React from 'react';
import { Container } from './styles/footer';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
