import React, { useState, useContext } from 'react';
import { NewPost } from '../components';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
export default function NewPostContainer() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1; // last post id +1 : set id to 1
  //   console.log(id);
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   const allPosts = [...posts, newPost];
  //   setPosts(allPosts);
  //   setPostTitle('');
  //   setPostBody('');
  //   navigate('/');
  // };

  // Create New Post using Axios API, async and await with try catch
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1; // last post id +1 : set id to 1
    console.log(id);
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      // const allPosts = [...posts, newPost];
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
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
