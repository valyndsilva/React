import React from 'react';
import { Container } from './styles/list';

export default function List({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
