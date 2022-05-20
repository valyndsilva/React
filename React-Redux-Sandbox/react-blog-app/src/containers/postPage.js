import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostPage } from '../components';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/posts';
export default function PostPageContainer() {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  // const handleDelete = (id) => {
  //   // get posts that are not deleted
  //   const postsList = posts.filter((post) => post.id !== id);
  //   setPosts(postsList);
  //   navigate('/');
  // };

  // Handle Delete Post using Axios API, async and await with try catch
  const handleDelete = async (id) => {
    // get posts that are not deleted
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <PostPage>
      <PostPage.Post>
        {post && (
          <>
            <PostPage.Title>{post.title}</PostPage.Title>
            <PostPage.Text className="postDate">{post.datetime}</PostPage.Text>
            <PostPage.Text className="postBody">{post.body}</PostPage.Text>
            <Link to={`/edit/${post.id}`}>
              <PostPage.Button className="editBtn">Edit Post</PostPage.Button>
            </Link>
            <PostPage.Button
              className="deleteBtn"
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
