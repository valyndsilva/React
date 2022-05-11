import React from 'react';
import { Home } from '../components';
import { FeedContainer } from '../containers';
export default function HomeContainer({ posts }) {
  return (
    <Home>
      {posts.length ? (
        <FeedContainer posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display!</p>
      )}
    </Home>
  );
}
