import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header style={{ background: theme.background, color: theme.text }}>
      <h1>Theme Switching Example</h1>
    </header>
  );
};

export default Header;
