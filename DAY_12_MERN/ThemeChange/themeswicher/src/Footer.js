// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const themeStyles = {
    background: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <header style={themeStyles}>
      <h1>Footer</h1>
    </header>
  );
};

export default Header;
