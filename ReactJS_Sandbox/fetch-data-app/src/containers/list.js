import React from 'react';
import { List } from '../components';
import { ItemContainer } from './item';

export function ListContainer({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </List>
  );
}
