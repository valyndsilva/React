import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostPage } from '../components';

export default function PostPageContainer({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <PostPage>
      <PostPage.Post>
        {post && (
          <>
            <PostPage.Title>{post.title}</PostPage.Title>
            <PostPage.Text className="postDate">{post.datetime}</PostPage.Text>
            <PostPage.Text className="postBody">{post.body}</PostPage.Text>
            <PostPage.Button
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete Post
            </PostPage.Button>
          </>
        )}
        {!post && (
          <>
            <PostPage.Title>Post Not Found</PostPage.Title>
            <PostPage.Text>Well, that's disappointing.</PostPage.Text>
            <PostPage.Text>
              <Link to="/">Visit Our Homepage</Link>
            </PostPage.Text>
          </>
        )}
      </PostPage.Post>
    </PostPage>
  );
}
