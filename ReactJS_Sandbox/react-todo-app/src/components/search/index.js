import React from 'react';
import { Container, Input, Label } from './styles/search';

export default function Search({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Search.Input = function SearchInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Search.Label = function SearchLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
