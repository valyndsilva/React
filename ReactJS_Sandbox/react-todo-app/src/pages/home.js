import React, { useState } from 'react';
import { ContentContainer } from '../containers/content';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { AddContainer } from '../containers/add';
import { SearchContainer } from '../containers/search';

export default function Home() {
  // const [items, setItems] = useState([
  //   { id: 1, checked: false, itemName: 'Item 1' },
  //   { id: 2, checked: false, itemName: 'Item 2' },
  //   { id: 3, checked: false, itemName: 'Item 3' },
  // ]);

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; // items[items.length - 1].id is the last item id
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to stop reloading the page
    // if we don't have a newItem i.e it's undefined or false
    if (!newItem) return;
    // console.log(newItem);
    addItem(newItem);
    setNewItem(''); // clean input on submit
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
      <SearchContainer search={search} setSearch={setSearch} />
      <ContentContainer
        // items={items}
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <FooterContainer length={items.length} />
    </>
  );
}
