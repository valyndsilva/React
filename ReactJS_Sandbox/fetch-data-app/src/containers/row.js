import React from 'react';
import { Row } from '../components';
import { CellContainer } from './cell';

export function RowContainer({ item }) {
  return (
    <Row>
      {Object.entries(item).map(([key, value]) => {
        const valueJson = JSON.stringify(value);
        console.log(valueJson);
        return <CellContainer key={key} cellData={valueJson} />;
        // Some of the data in the value are in the form of nested objects so we need to use JSON.stringify to print them to the cell.
      })}
    </Row>
  );
}
