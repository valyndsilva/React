import React from 'react';
import { Container } from './styles/item';

export default function Item({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
