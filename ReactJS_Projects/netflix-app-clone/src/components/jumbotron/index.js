import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  AnimationContainer,
  Image,
  Animation,
  AnimationVideo,
  AnimationImage,
  AnimationText,
} from "./styles/jumbotron";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.AnimationContainer = function JumbotronAnimationContainer({
  children,
  ...restProps
}) {
  return <AnimationContainer {...restProps}>{children}</AnimationContainer>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.Animation = function JumbotronAnimation({ children, ...restProps }) {
  return <Animation {...restProps}>{children}</Animation>;
};

Jumbotron.AnimationVideo = function JumbotronAnimationVideo({
  children,
  ...restProps
}) {
  return <AnimationVideo {...restProps}>{children}</AnimationVideo>;
};

Jumbotron.AnimationImage = function JumbotronAnimationImage({
  children,
  ...restProps
}) {
  return <AnimationImage {...restProps}>{children}</AnimationImage>;
};

Jumbotron.AnimationText = function JumbotronAnimationText({
  children,
  ...restProps
}) {
  return <AnimationText {...restProps}>{children}</AnimationText>;
};
