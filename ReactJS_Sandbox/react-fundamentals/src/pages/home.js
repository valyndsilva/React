import React, { useState } from "react";
import { ContentContainer } from "../containers/content";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, checked: false, itemName: "Item 1" },
    { id: 2, checked: false, itemName: "Item 2" },
    { id: 3, checked: false, itemName: "Item 3" },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  return (
    <>
      <HeaderContainer title="Todo List" />
      <ContentContainer
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <FooterContainer length={items.length} />
    </>
  );
}
