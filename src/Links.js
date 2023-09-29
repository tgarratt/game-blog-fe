import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReviewDetails from './pages/ReviewDetails';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';


const Links = () => {

  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/review/:gameId' element={<ReviewDetails />}></Route>
      <Route exact path='/reviews' element={<Reviews />}></Route>
      <Route exact path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default Links;