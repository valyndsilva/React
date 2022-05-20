import React from 'react';
import { Header } from '../components';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
export default function HeaderContainer({ title }) {
  const { width } = useWindowSize();
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
