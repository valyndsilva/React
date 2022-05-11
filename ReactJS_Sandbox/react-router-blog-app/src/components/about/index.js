import React from 'react';
import { Container } from './styles/about';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
