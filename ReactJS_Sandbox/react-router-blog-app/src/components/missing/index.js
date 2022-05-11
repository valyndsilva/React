import React from 'react';
import { Container } from './styles/missing';

export default function Missing({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
