import React, { useEffect, useContext } from 'react';
import { EditPost } from '../components';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
export default function EditPostContainer() {
  const { posts, setPosts, editTitle, setEditTitle, editBody, setEditBody } =
    useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost); //.patch if replacing specific fields
      // const allPosts = [...posts, newPost];
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <EditPost>
      {editTitle && (
        <>
          <EditPost.Title>Edit Post</EditPost.Title>
          <EditPost.Form onSubmit={(e) => e.preventDefault()}>
            <EditPost.Label htmlFor="editTitle">Title:</EditPost.Label>
            <EditPost.Input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Enter a title"
            />
            <EditPost.Label htmlFor="editBody">Post:</EditPost.Label>
            <EditPost.TextArea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              placeholder="Enter a message"
            />
            <EditPost.Button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </EditPost.Button>
            {/*  We need to pass a post.id so we use onClick instead of using only
            onSubmit as in newPost.js */}
          </EditPost.Form>
        </>
      )}
      {!editTitle && (
        <>
          <EditPost.Title>Post Not Found</EditPost.Title>
          <EditPost.Text>Well, that's disappointing.</EditPost.Text>
          <EditPost.Text>
            <Link to="/">Visit Our Homepage</Link>
          </EditPost.Text>
        </>
      )}
    </EditPost>
  );
}
