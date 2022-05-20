import React from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Text,
  TextArea,
  Title,
} from './styles/editPost';

export default function EditPost({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
EditPost.Title = function EditPostTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
EditPost.Text = function EditPostText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
EditPost.Form = function EditPostForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
EditPost.Input = function EditPostInput({ ...restProps }) {
  return <Input {...restProps} />;
};

EditPost.TextArea = function EditPostTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

EditPost.Button = function EditPostButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

EditPost.Label = function EditPostLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
