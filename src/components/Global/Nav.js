import React from 'react';
import { styled } from 'styled-components';
import Logo from '../Icons/Logo';

const NavContainer = styled.div`
padding-top: 0px;
padding-bottom: 0px;
`

const NavElement = styled.div`
:hover {
  text-decoration: underline
}
`

const Seperator = styled.div`
width: 2px;
height: 12px;
background-color: ${props => props.theme === 'light' ? '#000' : '#fff' };
align-self: center;
`

function Nav({toggleTheme, theme}) {


  return (
      <NavContainer className='overflow-auto primary-block'>
        <div className='flex flex-col lg:flex-row flex-wrap md:flex-nowrap justify-between mb-2 mt-3 md:mt-6 items-center text-sm'>
          <a href='/'>
            <div className='mt-2 text w-full md:w-auto text-center md:text-left flex items-center'>
                <Logo />
                <div className='text pl-4 text-3xl heading'>TechTom Plays</div>
            </div>
          </a>
          <div className='flex mr-0 lg:mr-4 w-full justify-center lg:justify-end lg:w-auto'>
            <NavElement className='my-2 mx-4 text cursor-pointer'><a href="/">Home</a></NavElement>
            <Seperator theme={theme} />
            <NavElement className='my-2 mx-4 text cursor-pointer'><a href="/about">About</a></NavElement>
            <Seperator theme={theme} />
            <NavElement className='my-2 mx-4 text cursor-pointer'><a href="/reviews">All Reviews</a></NavElement>
            <div className='flex items-center absolute lg:relative top-4 lg:top-auto right-5 lg:right-auto'>            
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
