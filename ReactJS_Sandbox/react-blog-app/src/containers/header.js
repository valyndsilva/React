import React, { useContext } from 'react';
import { Header } from '../components';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import DataContext from '../context/DataContext';
export default function HeaderContainer({ title }) {
  const { width } = useContext(DataContext);
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
