import React from 'react';
import { Post } from '../components';
import { Link } from 'react-router-dom';

export default function PostContainer({ post }) {
  return (
    <Post>
      <Link to={`/post/${post.id}`}>
        <Post.Title>{post.title}</Post.Title>
        <Post.Text className="postDate">{post.datetime}</Post.Text>
      </Link>
      <Post.Text className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </Post.Text>
    </Post>
  );
}
