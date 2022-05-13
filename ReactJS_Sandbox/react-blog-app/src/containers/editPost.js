import React, { useEffect, useContext } from 'react';
import { EditPost } from '../components';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
export default function EditPostContainer() {
  const { posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
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
