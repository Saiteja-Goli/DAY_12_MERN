// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { themes } from './Theme';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: themes[theme].background, color: themes[theme].text }}>
      <h1>This is the Header</h1>
    </header>
  );
};

export default Header;
