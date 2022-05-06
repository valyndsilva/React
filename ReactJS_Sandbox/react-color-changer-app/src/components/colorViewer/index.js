import React from 'react';
import { Container, Text } from './styles/colorViewer';

export default function ColorViewer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ColorViewer.Text = function ColorViewerText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
