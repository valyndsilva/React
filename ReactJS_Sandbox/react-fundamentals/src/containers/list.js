import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import List from '../components/list';

export function ListContainer({ items, handleCheck, handleDelete }) {
  return (
      <List>
        {items.map((item) => (
        <List.Item className="item" key={item.id}>
            <List.Input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            />
            <List.Label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
            >
            {item.itemName}
            </List.Label>
            <FaTrashAlt
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.itemName}`}
            onClick={() => {
                handleDelete(item.id);
            }}
            />
        </List.Item>
        ))}
      </List>
  )
}
