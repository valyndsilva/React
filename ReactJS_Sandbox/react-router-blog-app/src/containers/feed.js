import React from 'react';
import { Feed } from '../components';
import PostContainer from './post';

export default function FeedContainer({ posts }) {
  return (
    <Feed>
      {posts.map((post) => (
        <PostContainer key={post.id} post={post} />
      ))}
    </Feed>
  );
}
