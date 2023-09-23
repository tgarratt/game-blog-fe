import React, { useEffect, useState } from 'react';

import Nav from './components/Global/Nav';
import Footer from './components/Global/Footer';
import Links from './Links';


function App() {

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
      <Nav toggleTheme={toggleTheme} theme={theme} />
        <Links />
      <Footer />
    </div>
  );
}

export default App;
