import React from 'react'
import List from '../components/list';
import { ItemContainer } from './item';

export function ListContainer({ items, handleCheck, handleDelete }) {
  return (
      <List>
        {items.map((item) => (
       <ItemContainer key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
        ))}
      </List>
  )
}
