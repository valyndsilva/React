import React from 'react';
import { Table } from '../components';

export function TableContainer({ items }) {
  return (
    <>
      <Table>
        <Table.Body>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                {Object.entries(item).map(([key, value]) => (
                  <td key={key}>{JSON.stringify(value)}</td>
                ))}
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
