import React from 'react';
import { useData } from '../contexts/DataContext';

const Header: React.FC = () => {
  const { data } = useData();
  console.log(data);
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
};

export default Header;
