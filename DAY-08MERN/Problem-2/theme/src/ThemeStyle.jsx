import React from 'react';
import { useTheme } from './ThemeContext';

const UserForm = () => {
  const { theme } = useTheme();

  return (
    <form style={{ background: theme.background, color: theme.text }}>
      {/* Form elements */}
      <h1>Hello World</h1>
      <p>Say Hello to World</p>
    </form>
  );
};

export default UserForm;
