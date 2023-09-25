import React from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";
import Tag from "../Global/Tag";


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

function SearchBlock({
  blocktype,
  queryData,
  children
}) {

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }

  return (
    <div className={`${blocktype}-block`}>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full h-min"> 
          {children}
        </div>
        {queryData.isLoading && <p className="text">Loading...</p>}
        <SearchResults className="flex flex-col w-full pr-4 overflow-y-scroll vertical-scroll">
        {queryData.isSuccess && queryData.data.data.map(
          (game, key) => (
            <GamePreview key={key} className="mx-2 mb-8 md:my-8">
              <ImgContainer className="overflow-auto rounded-xl overflow-hidden">
                <a href={`/review/${game.id}`}>
                  <img className="object-cover h-full w-full duration-150 hover:scale-110" alt={'homepage-search-review-img'} src={`${process.env.REACT_APP_API_URL}${game.attributes.articleImage.data.attributes.url}`} />
                </a>
              </ImgContainer>
              <div className="text">
                  <div className="flex flex-col lg:flex-row justify-between mt-2">
                    <h3 className="text-3xl capitalize mb-0 lg:mb-6" style={{maxWidth: '60%'}}>
                      {game.attributes['name']}
                    </h3>
                    <TimerContainer className="pt-1 lg:items-start">
                      <div className="flex items-center w-[7rem]">
                      <p className="text-xs pr-1 my-2 lg:my-0">
                        {calculateReadTime(game.attributes['reviewText'])} minute read
                      </p>
                      <Timer fillColour={calculateReadTime(game.attributes['reviewText']) > 2 ? '#2D99D1' : '#29D18A'} />
                      </div>
                    </TimerContainer>
                </div>
                <div className="hidden md:block">
                  <p className="w-4/5 text-sm mb-2">
                    {game.attributes['reviewText'].substring(0, 100)}...
                  </p>
                </div>
                <div className="flex mt-2 md:mt-0">
                  {game.attributes.categories.data.map(
                    (category, key) => (
                      <Tag key={key} colour={category.attributes.colour}>{category.attributes.name}</Tag>
                    )
                  )}
                </div>
              </div>
            </GamePreview>
            )
        )}
        </SearchResults>
      </div>
    </div>
  );
}

export default SearchBlock;
