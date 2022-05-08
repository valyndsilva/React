import React from 'react';
import { Container } from './styles/table';

export default function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
