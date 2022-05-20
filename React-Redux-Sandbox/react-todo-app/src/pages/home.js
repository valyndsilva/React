import React, { useState, useEffect } from 'react';
import { ContentContainer } from '../containers/content';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { AddContainer } from '../containers/add';
import { SearchContainer } from '../containers/search';
import apiRequest from '../api/apiRequest';
export default function Home() {
  const API_URL = 'http://localhost:3500/items';
  // const API_URL = 'http://localhost:3500/itemss'; //test error

  // const [items, setItems] = useState([
  //   { id: 1, checked: false, item: 'Item 1' },
  //   { id: 2, checked: false, item: 'Item 2' },
  //   { id: 3, checked: false, item: 'Item 3' },
  // ]);

  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem('shoppinglist')) || [] // shortcircuiting ||, if localStorage is empty retrun a []
  // );
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const setAndSaveItems = (newItems) => {
  //   localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  //   setItems(newItems);
  // };

  // useEffect(() => {
  //   localStorage.setItem('shoppinglist', JSON.stringify(items));
  // }, [items]);

  // Use JSON-Server to store data into db.json instead of local storage
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        // console.log(response);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    // (async()=>await fetchItems())(); // IIFE. fetchItems doesn't return a value so IIFE not required. use fetchItems() instead.
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; // items[items.length - 1].id is the last item id
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    // setAndSaveItems(listItems);
    setItems(listItems);

    //POST request
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // setAndSaveItems(listItems);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    // console.log(myItem);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const requestURL = `${API_URL}/${id}`;
    const result = await apiRequest(requestURL, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // setAndSaveItems(listItems);
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE',
    };
    const requestURL = `${API_URL}/${id}`;
    const result = await apiRequest(requestURL, deleteOptions);
    console.log(result);
    if (result) setFetchError(result);
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
        fetchError={fetchError}
        isLoading={isLoading}
      />
      <FooterContainer length={items.length} />
    </>
  );
}
