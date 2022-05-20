import React from 'react';
import { Button, Container, Input, Label } from './styles/searchInput';

export default function SearchInput({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SearchInput.Label = function searchInputLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

SearchInput.Input = function searchInputInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

SearchInput.Button = function searchInputButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
