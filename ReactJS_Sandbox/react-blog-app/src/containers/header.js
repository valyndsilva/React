import React from 'react';
import { Header } from '../components';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
export default function HeaderContainer({ title, width }) {
  return (
    <Header>
      {title}
      {width < 748 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </Header>
  );
}
