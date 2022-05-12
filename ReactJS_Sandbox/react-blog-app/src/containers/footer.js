import React from 'react';
import { Footer } from '../components';
export default function FooterContainer() {
  const today = new Date();
  return (
    <Footer>
      <Footer.Text>Copyright &copy; {today.getFullYear()}</Footer.Text>
    </Footer>
  );
}
