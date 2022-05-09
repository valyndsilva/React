import React from 'react';
import { Table } from '../components';
import { RowContainer } from './row';

export function TableContainer({ items }) {
  return (
    <>
      <Table>
        <Table.Body>
          {items.map((item) => (
            <RowContainer key={item.id} item={item} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
