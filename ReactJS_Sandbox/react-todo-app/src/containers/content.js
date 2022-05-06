import React from 'react';
import { Content } from '../components';
import { ListContainer } from './list';

export function ContentContainer({
  items,
  handleCheck,
  handleDelete,
  fetchError,
  isLoading,
}) {
  return (
    <Content>
      {isLoading && <p>Loading Items...</p>}
      {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
      {/* {!fetchError && ( */}
      {!fetchError &&
      !isLoading && ( // if no error and not loading(false)
          <>
            {items.length ? (
              <ListContainer
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ) : (
              <Content.Text>Your list is empty!</Content.Text>
            )}
          </>
        )}
    </Content>
  );
}
