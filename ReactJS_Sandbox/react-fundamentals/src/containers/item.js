import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Item } from '../components';

export function ItemContainer({ item, handleCheck, handleDelete }) {
  return (
    <Item className="item" key={item.id}>
  <Item.Input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            />
            <Item.Label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
            >
            {item.itemName}
            </Item.Label>
            <FaTrashAlt
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.itemName}`}
            onClick={() => {
                handleDelete(item.id);
            }}
            />
    </Item>
  )
}
