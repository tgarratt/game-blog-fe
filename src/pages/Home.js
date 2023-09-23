import React from 'react';

import Welcome from '../components/Home/Welcome';
import Recent from '../components/Home/Recent';
import Popular from '../components/Home/Popular';
import CurrentFavourite from '../components/Home/CurrentFavourite';
import Search from '../components/Home/Search';


function Home() {



  return (
    <>
      <Welcome />
      <Recent />
      <Popular />
      <CurrentFavourite />
      <Search />
    </>
  );
}

export default Home;
