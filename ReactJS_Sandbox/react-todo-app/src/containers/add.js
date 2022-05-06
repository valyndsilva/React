import React, { useRef } from 'react';
import { Add } from '../components';
import { FaPlus } from 'react-icons/fa';
export function AddContainer({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef(); // to keep focus on Add Item Input if you click Add button instead of Enter
  return (
    <Add className="addForm" onSubmit={handleSubmit}>
      <Add.Label htmlFor="addItem">Add Item</Add.Label>
      <Add.Input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Add.Button type="submit" aria-label="Add Item">
        <FaPlus onClick={() => inputRef.current.focus()} />
      </Add.Button>
    </Add>
  );
}
