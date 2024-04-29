import React from 'react';
import { styled } from 'styled-components';


const PlaceholderContainer = styled.div`
min-height: 36rem;
min-width: ${props => props.width};
margin-top: 4rem;
padding: 3px;
@media (max-width: 1023px) {
  width: 100%;
}
@media (max-width: 767px) {
  min-height: 20rem;
}
` 
const ImgPlaceholder = styled.div`
min-height: 25rem;
min-width: 100%;
background-color: #999999;
border-radius: 10px;
@media (max-width: 1023px) {
  width: 100%;
}
@media (max-width: 767px) {
  min-height: 20rem;
}
`

function GamePreviewPlaceholder({firstWidth, secondWidth}) {

  return (
    <>
        <PlaceholderContainer width={firstWidth}>
            <ImgPlaceholder />
        </PlaceholderContainer>
        <PlaceholderContainer width={secondWidth}>
            <ImgPlaceholder />
        </PlaceholderContainer>
    </>
  );
}

export default GamePreviewPlaceholder;
