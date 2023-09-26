import React, { useEffect, useState } from 'react';

import Nav from './components/Global/Nav';
import Footer from './components/Global/Footer';
import Links from './Links';


function App() {

    const [theme, setTheme] = useState(() => {
      const themeValue = localStorage.getItem('theme')
      return themeValue || 'dark';
    });

    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        localStorage.setItem('theme', 'dark')
        } else {
        setTheme('light');
        localStorage.setItem('theme', 'light')
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

  return (
    <div className={`${theme}`}>
      <Nav toggleTheme={toggleTheme} theme={theme} />
        <Links />
      <Footer />
    </div>
  );
}

export default App;
