import React from 'react';
import { Add } from '../components';
import {FaPlus} from "react-icons/fa";
export  function AddContainer({newItem, setNewItem, handleSubmit}) {
  return (
      <Add className="addForm">
        <Add.Label htmlFor="addItem">Add Item</Add.Label>
        <Add.Input autoFocus id="addItem" type="text" placeholder="Add Item" required/>
        <Add.Button type="submit" aria-label="Add Item"><FaPlus/></Add.Button>
      </Add>
  )
}
