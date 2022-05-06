import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Item } from '../components';

export function ItemContainer({ item, handleCheck, handleDelete }) {
  return (
    <Item className="item">
      <Item.Input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <Item.Label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </Item.Label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
        onClick={() => {
          handleDelete(item.id);
        }}
      />
    </Item>
  );
}
