import React from 'react';
import { About } from '../components';
export default function AboutContainer() {
  return (
    <About>
      <About.Title>About</About.Title>
      <About.Text style={{ marginTop: '1rem' }}>
        This blog app is a project used to learn React Router and Links.
      </About.Text>
    </About>
  );
}
