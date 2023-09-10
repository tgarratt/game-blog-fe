import React from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";



const GamePreview = styled.div`
height: 36rem;
width: 100%;
` 

const ImgContainer = styled.div`
height: 30rem;
` 

function SpotlightBlock({
  blockType,
  header,
  isSuccess,
  isLoading,
  game,
}) {

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }

  return (
    <div className={`${blockType}-block`}>
      {isLoading && <p className="text">Loading...</p>}
      <div className="flex">
      {isSuccess && 
          <GamePreview className="mx-2 flex flex-col md:flex-row items-center">
            <ImgContainer className="overflow-auto rounded-xl w-full">
              <img className="object-cover h-full w-full" src={`http://localhost:5000${game.attributes.articleImage.data.attributes.url}`} />
            </ImgContainer>
            <div className="text w-full md:pl-16">
                <div className="flex items-center justify-start py-3">
                  <p className="text-xs pr-1">
                    {calculateReadTime(game.attributes['reviewText'])} minute read
                  </p>
                  <Timer fillColour={calculateReadTime(game.attributes['reviewText']) > 2 ? '#2D99D1' : '#29D18A'} />
                </div>
                <div className="flex justify-between">
                <h3 className="text-3xl capitalize mb-4">
                  {game.attributes['name']}
                </h3>
              </div>
              <div>
                <p className="w-4/5 text-sm">
                  {game.attributes['reviewText'].substring(0, 300)}...
                </p>
              </div>
              <div className="flex pt-2">
                {game.attributes.categories.data.map(
                  (category, key) => (
                    <div key={key} className="text-xs font-bold mt-4 mr-2 rounded-md w-fit px-2 py-0.5 " style={{border: `1px ${category.attributes.colour} solid`}}>{category.attributes.name}</div>
                  )
                )}
              </div>
            </div>
          </GamePreview>
      }
      </div>
    </div>
  );
}

export default SpotlightBlock;


