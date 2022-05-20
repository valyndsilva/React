import React, { useContext } from 'react';
import { Nav } from '../components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';
import DataContext from '../context/DataContext';
export default function NavContainer() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <Nav>
      <Nav.Form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Nav.Label htmlFor="search">Search Posts</Nav.Label>
        <Nav.Input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Nav.Form>
      <Nav.List>
        <Nav.Item>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.NEWPOST}>Post</Link>
          <Link to={ROUTES.ABOUT}>About</Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}
