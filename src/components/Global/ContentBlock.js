import React from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";



const GamePreview = styled.div`
min-height: 36rem;
width: ${props => props.previewsize }%;
@media (max-width: 1023px) {
  width: 100%;
}
@media (max-width: 767px) {
  min-height: 20rem;
}
` 

const ImgContainer = styled.div`
height: 25rem;
@media (max-width: 767px) {
  height: 15rem;
}
` 

function ContentBlock({
  blocktype,
  header,
  queryData,
  firstBlockSize
}) {

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }

  return (
    <div className={`${blocktype}-block`}>
      {header &&
        <div className="flex flex-col md:flex-row mb-8">
          <h2 className="text-4xl font-bold uppercase text">{header}</h2>
          <div className="text md:ml-auto mt-2 md:mt-0">More Reviews --</div>
        </div>
      }
      {queryData.isLoading && <p className="text">Loading...</p>}
      <div className="flex flex-col lg:flex-row mb-1 lg:mb-20">
      {queryData.isSuccess && queryData.data.data.map(
        (game, key) => {

          const previewsize = key === 0 ? firstBlockSize : 100 - firstBlockSize;

          return (
          <GamePreview key={key} className="mx-0 lg:mx-2 my-4 lg:my-0" previewsize={previewsize}>
            <ImgContainer className="overflow-auto rounded-xl">
              <img className="object-cover h-full w-full" alt={'review-img'} src={`http://localhost:5000${game.attributes.articleImage.data.attributes.url}`} />
            </ImgContainer>
            <div className="text">
                <div className="flex flex-col md:flex-row justify-between mt-2">
                  <h3 className="text-lg md:text-3xl capitalize mb-1 md:mb-6" style={{maxWidth: '80%'}}>
                    {game.attributes['name']}
                  </h3>
                  <div className="flex pt-1">
                    <p className="text-xs pr-1">
                      {calculateReadTime(game.attributes['reviewText'])} minute read
                    </p>
                    <Timer fillColour={calculateReadTime(game.attributes['reviewText']) > 2 ? '#2D99D1' : '#29D18A'} />
                  </div>
              </div>
              <div className="hidden md:block">
                <p className="w-4/5 text-sm mb-1 lg:mb-6">
                  {game.attributes['reviewText'].substring(0, previewsize * 3)}...
                </p>
              </div>
              <div className="flex">
                {game.attributes.categories.data.map(
                  (category, key) => (
                    <div key={key} className="text-xs mt-4 mr-2 rounded-lg w-fit px-2" style={{border: `1px ${category.attributes.colour} solid`}}>{category.attributes.name}</div>
                  )
                )}
              </div>
            </div>
          </GamePreview>
          )
        }
      )}
      </div>
    </div>
  );
}

export default ContentBlock;
