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
// import { Home } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ROUTES from './routes/routes';
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
  
  const handleDelete = (id) => {};
  return (
    <div className="App">
      <Router>
        <HeaderContainer title="ReactJS Blog App" />
        <NavContainer serach={search} setSearch={setSearch} />
        <Routes>
          <Route
            exact
            index
            path={ROUTES.HOME}
            element={<HomeContainer posts={posts} />}
          />
          <Route path={ROUTES.NEWPOST} element={<NewPostContainer />} />
          <Route
            path={ROUTES.POSTPAGE}
            element={
              <PostPageContainer posts={posts} handleDelete={handleDelete} />
            }
          />
          <Route path={ROUTES.ABOUT} element={<AboutContainer />} />
          <Route path={ROUTES.MISSING} element={<MissingContainer />} />
        </Routes>
      </Router>
      <FooterContainer />
    </div>
  );
}

export default App;
