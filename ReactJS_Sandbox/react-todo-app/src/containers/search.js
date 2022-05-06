import React from 'react';
import { Search } from '../components';

export function SearchContainer({ search, setSearch }) {
  return (
    <Search
      role="search"
      className="searchForm"
      onSubmit={(e) => e.preventDefault()}
    >
      <Search.Label htmlFor="search">Search</Search.Label>
      <Search.Input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Search>
  );
}
