import React from 'react';
import { Link } from 'react-router-dom';
import { Missing } from '../components';
export default function MissingContainer() {
  return (
    <Missing>
      <Missing.Title>Post Not Found</Missing.Title>
      <Missing.Text>Well, that's disappointing.</Missing.Text>
      <Missing.Text>
        <Link to="/">Visit Our Homepage</Link>
      </Missing.Text>
    </Missing>
  );
}
