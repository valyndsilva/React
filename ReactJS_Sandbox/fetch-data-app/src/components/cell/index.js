import React from 'react';
import { Container } from './styles/cell';

export default function Cell({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
