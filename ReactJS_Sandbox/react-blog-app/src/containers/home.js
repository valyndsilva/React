import React from 'react';
import { Home } from '../components';
import { FeedContainer } from '../containers';
export default function HomeContainer({ posts, fetchError, isLoading }) {
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
        (posts.length ? (
          <FeedContainer posts={posts} />
        ) : (
          <p className="statusMsg">No posts to display!</p>
        ))}
    </Home>
  );
}
