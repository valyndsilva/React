import React from 'react';
import { Body, Container } from './styles/table';

export default function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Table.Body = function TableBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
