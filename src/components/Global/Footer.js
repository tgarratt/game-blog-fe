import React from 'react';
import styled from 'styled-components';

import Logo from '../Icons/Logo';

const FooterElement = styled.div`
:hover {
  text-decoration: underline
}
`


function Footer() {


  return (
    <>
        <div className='colored-seperator'  />
        <footer className='secondary-block'>
        <div className='flex flex-col'>
          <FooterElement>
            <p className='text my-1 cursor-pointer w-fit'>
              <a href="/about">About</a>
            </p>
          </FooterElement>
          <FooterElement>
            <p className='text my-1 cursor-pointer w-fit'>
              <a href="/reviews">All Reviews</a>
            </p>
          </FooterElement>
          <FooterElement>
            <p className='text my-1 cursor-pointer w-fit'>
              <a target="_blank" rel="noreferrer" href="https://github.com/tgarratt">Github</a>
            </p>
          </FooterElement>  
          <FooterElement>
            <p className='text my-1 cursor-pointer w-fit'>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tom-a-garratt/">LinkedIn</a>
            </p>
          </FooterElement>    
          <FooterElement>
            <p className='text my-1 cursor-pointer w-fit'>
              <a href="mailto:tomagarratt@yahoo.co.uk">tomagarratt@yahoo.co.uk</a>
            </p>
          </FooterElement>      
       </div>
       <div className='flex justify-end items-center'><Logo /><div className='text pl-4 text-3xl heading'>TechTom Plays</div></div>
      </footer>
    </>

  );
}

export default Footer;
