import React from "react";
import { Content } from "../components";
import { ListContainer } from "./list";

export function ContentContainer({ items, handleCheck, handleDelete }) {
  return (
    <Content>
      {items.length ? (
        <ListContainer
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <Content.Text>Your list is empty!</Content.Text>
      )}
    </Content>
  );
}
