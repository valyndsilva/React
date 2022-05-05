import React, { useState } from 'react';
import { ContentContainer } from '../containers/content';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { AddContainer } from '../containers/add';

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, checked: false, itemName: 'Item 1' },
    { id: 2, checked: false, itemName: 'Item 2' },
    { id: 3, checked: false, itemName: 'Item 3' },
  ]);

  const [newItem, setNewItem] = useState('');

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    console.log('Submitted');
  };
  return (
    <>
      <HeaderContainer title="Todo List" />
      <AddContainer
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <ContentContainer
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <FooterContainer length={items.length} />
    </>
  );
}
