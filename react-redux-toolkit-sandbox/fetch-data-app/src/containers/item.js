import React from 'react';
import Item from '../components/item';

export function ItemContainer({ item }) {
  return <Item>{JSON.stringify(item)}</Item>;
}
