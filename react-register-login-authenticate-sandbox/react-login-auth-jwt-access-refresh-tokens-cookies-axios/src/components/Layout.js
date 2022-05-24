import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="App">
      {/* Outlet represents all the children of the Layout component */}
      <Outlet />
    </main>
  );
}
