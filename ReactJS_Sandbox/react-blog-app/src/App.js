import {
  HeaderContainer,
  NavContainer,
  FooterContainer,
  HomeContainer,
  AboutContainer,
  PostPageContainer,
  NewPostContainer,
  MissingContainer,
  EditPostContainer,
} from './containers';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ROUTES from './routes/routes';
import { format } from 'date-fns';
import api from './api/posts';

function App() {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: 'Post 1',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 2,
  //     title: 'Post 2',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 3,
  //     title: 'Post 3',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 4,
  //     title: 'Post 4',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  // ]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        // Axios automatically creates the response.json() unlike when you use fetch().
        // Axios also automatically catches errors when they are not in the 200 range of http responses.
        // if (!response.ok) throw Error('Did not receive expected data'); // This is not required with axios as it checks
        // if (response && response.data)
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          //Got reponse from back-end API but not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          // No response, catches all the errors
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  // Display Posts Search Results
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse()); // newest post at the top
  }, [posts, search]);

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
    <div className="App">
      <HeaderContainer title="ReactJS Blog App" />
      <NavContainer serach={search} setSearch={setSearch} />
      <Routes>
        <Route
          exact
          index
          path={ROUTES.HOME}
          element={<HomeContainer posts={searchResults} />}
        />
        <Route
          exact
          path={ROUTES.NEWPOST}
          element={
            <NewPostContainer
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path={ROUTES.EDITPOST}
          element={
            <EditPostContainer
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />
          }
        />
        <Route
          path={ROUTES.POSTPAGE}
          element={
            <PostPageContainer posts={posts} handleDelete={handleDelete} />
          }
        />
        <Route path={ROUTES.ABOUT} element={<AboutContainer />} />
        <Route path={ROUTES.MISSING} element={<MissingContainer />} />
      </Routes>

      <FooterContainer />
    </div>
  );
}

export default App;
