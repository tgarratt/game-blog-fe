import React from 'react';
import { styled } from 'styled-components';


const Welcometext = styled.h1`
font-size: 2rem;
font-weight: 700;
text-transform: uppercase;
width: 400px
`

function Welcome() {

  return (
    <div className='primary-block' style={{minHeight: '5rem'}}>
    <Welcometext className='py-6 text'>Welcome to TechTom Plays</Welcometext>
    </div>
  );
}

export default Welcome;
