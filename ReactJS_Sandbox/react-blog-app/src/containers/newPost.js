import React, { useContext } from 'react';
import { NewPost } from '../components';
import DataContext from '../context/DataContext';
export default function NewPostContainer() {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    useContext(DataContext);
  return (
    <NewPost>
      <NewPost.Title>New Post</NewPost.Title>
      <NewPost.Form onSubmit={handleSubmit}>
        <NewPost.Label htmlFor="postTitle">Title:</NewPost.Label>
        <NewPost.Input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Enter a title"
        />
        <NewPost.Label htmlFor="postBody">Post:</NewPost.Label>
        <NewPost.TextArea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          placeholder="Enter a message"
        />
        <NewPost.Button type="submit">Submit</NewPost.Button>
      </NewPost.Form>
    </NewPost>
  );
}
