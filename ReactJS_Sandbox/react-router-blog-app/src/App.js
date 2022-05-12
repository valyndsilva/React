import {
  HeaderContainer,
  NavContainer,
  FooterContainer,
  HomeContainer,
  AboutContainer,
  PostPageContainer,
  NewPostContainer,
  MissingContainer,
} from './containers';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ROUTES from './routes/routes';
import { format } from 'date-fns';
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      datetime: 'January 01, 2022',
      body: 'lorem ipsum dolor sit amet, consectet',
    },
    {
      id: 2,
      title: 'Post 2',
      datetime: 'January 01, 2022',
      body: 'lorem ipsum dolor sit amet, consectet',
    },
    {
      id: 3,
      title: 'Post 3',
      datetime: 'January 01, 2022',
      body: 'lorem ipsum dolor sit amet, consectet',
    },
    {
      id: 4,
      title: 'Post 4',
      datetime: 'January 01, 2022',
      body: 'lorem ipsum dolor sit amet, consectet',
    },
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse()); // newest post at the top
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.PreventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1; // last post id +1 : set id to 1
    console.log(id);
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    console.log(datetime);
    const newPost = { id, title: postTitle, datetime, body: postBody };
    console.log(newPost);
    const allPosts = [...posts, newPost];
    console.log(allPosts);
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  };

  const handleDelete = (id) => {
    // get posts that are not deleted
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate('/');
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
