import React from 'react';
import { styled } from 'styled-components';


const Welcometext = styled.h1`
font-size: 4rem;
font-weight: 700;
max-width: 700px;
text-wrap: balance;
@media (max-width: 1023px) {
  font-size: 3rem;
  max-width: 550px;
}
`

function Welcome() {

  return (
    <div className='primary-block slim'>
      <Welcometext className='py-0 md:pt-14 text-4xl md:text-5xl text uppercase animated-text'>Welcome to TechTom Plays</Welcometext>
    </div>
  );
}

export default Welcome;
