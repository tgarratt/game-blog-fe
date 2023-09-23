import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReviewDetails from './pages/ReviewDetails';
import Reviews from './pages/Reviews';


const Links = () => {

  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/review/:gameId' element={<ReviewDetails />}></Route>
      <Route exact path='/reviews' element={<Reviews />}></Route>
    </Routes>
  );
}

export default Links;