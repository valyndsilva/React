import React from 'react';
import { Container } from './styles/row';

export default function Row({ chilldren, ...restProps }) {
  return <Container {...restProps}>{chilldren}</Container>;
}
