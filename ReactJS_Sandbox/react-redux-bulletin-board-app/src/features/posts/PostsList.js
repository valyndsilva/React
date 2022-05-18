import React from 'react';
import PostItem from './PostItem';
export default function PostsList({ post }) {
  return (
    <ul>
      <PostItem post={post} />
    </ul>
  );
}
