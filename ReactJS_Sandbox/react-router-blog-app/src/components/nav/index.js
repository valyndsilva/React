import React from 'react';
import { Container, Form, Input, Item, Label, List } from './styles/nav';

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Nav.Form = function NavForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Nav.Label = function NavLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Nav.Input = function NavInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Nav.List = function NavList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Nav.Item = function NavItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
