import React from 'react';
import { styled } from 'styled-components';


const Welcometext = styled.h1`
font-size: 3rem;
font-weight: 700;
max-width: 450px;
text-wrap: balance;
@media (max-width: 767px) {
  font-size: 2rem;
}
`

function Welcome() {

  return (
    <div className='primary-block'>
      <Welcometext className='py-0 md:pt-6 text-4xl md:text-5xl text uppercase animated-text'>Welcome to TechTom Plays</Welcometext>
    </div>
  );
}

export default Welcome;
