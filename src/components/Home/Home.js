import React, { useEffect, useState } from 'react';

import Nav from '../Global/Nav';
import Recent from './Recent';
import Search from './Search';
import Popular from './Popular';
import CurrentFavourite from './CurrentFavourite';
import Footer from '../Global/Footer';


function Home() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <Nav toggleTheme={toggleTheme} />
      <Recent />
      <Popular />
      <CurrentFavourite />
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
