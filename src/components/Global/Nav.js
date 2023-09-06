import React from 'react';
import { styled } from 'styled-components';

const Seperator = styled.div`
width: 2px;
height: 12px;
background-color: #fff;
align-self: center;
` 


function Nav({toggleTheme, theme}) {


  return (
      <nav className='overflow-auto primary-block'>
        <div className='flex justify-between mb-2 mt-6 items-center text-sm'>
          <div className=' mt-2 text'>Logo</div>
          <div className='flex mr-4'>
            <div className='my-2 mx-4 text'>Home</div>
            <Seperator />
            <div className='my-2 mx-4 text'>About</div>
            <Seperator />
            <div className='my-2 mx-4 text'>Games</div>
            <Seperator />
            <div className='my-2 mx-4 text'>Top 10</div>
            <div className='flex items-center'>            
              <label className="switch">
              <input type="checkbox" onClick={toggleTheme} />
              <span className="slider round"></span>
            </label>
            <p className=' ml-1 text'>{theme === 'dark' ? 'dark' : 'light'}</p></div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
