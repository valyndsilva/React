import React, { useState, useEffect } from 'react';
import { FormContainer } from '../containers/form';
// import { ListContainer } from '../containers/list';
import { TableContainer } from '../containers/table';

export default function Home() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  // Resources
  // https://jsonplaceholder.typicode.com//posts (100 posts)
  // https://jsonplaceholder.typicode.com//comments (500 comments)
  // https://jsonplaceholder.typicode.com//users (10 users)

  const [requestType, setRequestType] = useState('users');
  const [items, setItems] = useState([]); //set to an array which will have json objects within it
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        console.log(response);
        if (!response.ok) throw Error('Did not receive expected data.');
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        // console.log(err.message);
        setFetchError(err.message);
      } finally {
        return fetchError;
      }
    };
    fetchItems();
    // eslint-disable-next-line
  }, [requestType]); // Runs everytime requestType changes
  return (
    <>
      <FormContainer
        requestType={requestType}
        setRequestType={setRequestType}
      />
      {/* <ListContainer items={items} /> */}
      {/* Replace ListContainer with TableContainer */}
      <TableContainer items={items} />
    </>
  );
}
