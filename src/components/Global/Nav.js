import React from 'react';
import { styled } from 'styled-components';

const NavContainer = styled.div`
padding-top: 0px;
padding-bottom: 0px;
`

const Seperator = styled.div`
width: 2px;
height: 12px;
background-color: #fff;
align-self: center;
`


function Nav({toggleTheme, theme}) {


  return (
      <NavContainer className='overflow-auto primary-block'>
        <div className='flex flex-wrap md:flex-nowrap justify-between mb-2 mt-3 md:mt-6 items-center text-sm'>
          <div className='mt-2 text w-full md:w-auto text-center md:text-left'>Logo</div>
          <div className='flex mr-0 md:mr-4 w-full justify-center md:justify-end md:w-auto'>
            <div className='my-2 mx-4 text'>Home</div>
            <Seperator />
            <div className='my-2 mx-4 text'>About</div>
            <Seperator />
            <div className='my-2 mx-4 text'>Games</div>
            <Seperator />
            <div className='my-2 mx-4 text'>Top 10</div>
            <div className='flex items-center absolute md:relative top-4 md:top-auto right-5 md:right-auto'>            
              <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </NavContainer>
  );
}

export default Nav;
