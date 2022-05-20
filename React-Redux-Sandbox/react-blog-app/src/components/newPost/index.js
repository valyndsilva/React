import React from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  TextArea,
  Title,
} from './styles/newPost';

export default function NewPost({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
NewPost.Title = function NewPostTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
NewPost.Form = function NewPostForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
NewPost.Input = function NewPostInput({ ...restProps }) {
  return <Input {...restProps} />;
};

NewPost.TextArea = function NewPostTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

NewPost.Button = function NewPostButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

NewPost.Label = function NewPostLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
