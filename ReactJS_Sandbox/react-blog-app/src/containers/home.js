import React, { useContext } from 'react';
import { Home } from '../components';
import { FeedContainer } from '../containers';
import DataContext from '../context/DataContext';
export default function HomeContainer() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <Home>
      {/* {posts.length ? (
        <FeedContainer posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display!</p>
      )} */}
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: 'red' }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <FeedContainer posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display!</p>
        ))}
    </Home>
  );
}
