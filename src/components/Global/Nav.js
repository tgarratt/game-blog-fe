import React from 'react';


function Nav({toggleTheme}) {


  return (
      <nav className='overflow-auto primary-block'>
        <div className='flex w-screen justify-between mb-2'>
          <div className='ml-4 mt-2 text'>Logo</div>
          <div className='flex mr-4'>
            <div className='m-2 text'>Home</div>  
            <div className='m-2 text'>About</div>
            <div className='m-2 text'>Games</div>
            <div className='m-2 text'>Top 10</div>
            <button className='text' onClick={toggleTheme}>Toggle Theme</button>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
