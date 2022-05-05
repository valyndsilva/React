import React from "react";
import { Header } from "../components";
export function HeaderContainer({title}) {
  return (
    <Header>
      <Header.Title>{title}</Header.Title>
    </Header>
  );
}
HeaderContainer.defaultProps={
  title: "Default Title"
}
