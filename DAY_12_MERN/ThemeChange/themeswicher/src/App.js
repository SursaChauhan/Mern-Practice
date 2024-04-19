// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ThemeSwitcher from './ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Main />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
