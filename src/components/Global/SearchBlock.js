import React from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";


const SearchResults = styled.div`
max-height: 72rem;
` 

const GamePreview = styled.div`
height: 25rem;
` 

const ImgContainer = styled.div`
height: 15rem;
@media (max-width: 767px) {
  height: 15rem;
}
`

const TimerContainer = styled.div`
text-wrap: nowrap
` 

function ContentBlock({
  blockType,
  queryData,
  firstBlockSize,
  children
}) {

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }

  return (
    <div className={`${blockType}-block`}>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full h-min"> 
          {children}
        </div>
        {queryData.isLoading && <p className="text">Loading...</p>}
        <SearchResults className="flex flex-col w-full pr-4 overflow-y-scroll vertical-scroll">
        {queryData.isSuccess && queryData.data.data.map(
          (game, key) => {

            const previewSize = key === 0 ? firstBlockSize : 100 - firstBlockSize;

            return (
            <GamePreview key={key} className="mx-2 mb-8 md:my-8" previewSize={previewSize}>
              <ImgContainer className="overflow-auto rounded-xl">
                <img className="object-cover h-full w-full" alt={'review-img'} src={`http://localhost:5000${game.attributes.articleImage.data.attributes.url}`} />
              </ImgContainer>
              <div className="text">
                  <div className="flex flex-col lg:flex-row justify-between mt-2">
                    <h3 className="text-3xl capitalize mb-0 lg:mb-6" style={{maxWidth: '60%'}}>
                      {game.attributes['name']}
                    </h3>
                    <TimerContainer className="flex pt-1 items-center lg:items-start">
                      <p className="text-xs pr-1 my-2 lg:my-0">
                        {calculateReadTime(game.attributes['reviewText'])} minute read
                      </p>
                      <Timer fillColour={calculateReadTime(game.attributes['reviewText']) > 2 ? '#2D99D1' : '#29D18A'} />
                    </TimerContainer>
                </div>
                <div className="hidden md:block">
                  <p className="w-4/5 text-sm mb-6">
                    {game.attributes['reviewText'].substring(0, 100)}...
                  </p>
                </div>
                <div className="flex mt-2 md:mt-0">
                  {game.attributes.categories.data.map(
                    (category, key) => (
                      <div key={key} className="text-xs mr-2 rounded-lg w-fit px-2" style={{border: `1px ${category.attributes.colour} solid`}}>{category.attributes.name}</div>
                    )
                  )}
                </div>
              </div>
            </GamePreview>
            )
          }
        )}
        </SearchResults>
      </div>
    </div>
  );
}

export default ContentBlock;
