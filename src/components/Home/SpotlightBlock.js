import React from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";
import Tag from "../Global/Tag";



const GamePreview = styled.div`
height: 36rem;
width: 100%;
` 

const ImgContainer = styled.div`
height: 30rem;
` 

function SpotlightBlock({
  blocktype,
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
    <div className={`${blocktype}-block`}>
      {isLoading && <p className="text">Loading...</p>}
      <div className="flex">
      {isSuccess && 
          <GamePreview className="mx-2 flex flex-col md:flex-row items-center">
            <ImgContainer className="overflow-auto overflow-hidden rounded-xl w-full">
              <a href={`/review/${game.id}`}>
              <img className="object-cover h-full w-full duration-150 hover:scale-110" alt={'spotlight-reviw-img'} src={`${process.env.REACT_APP_API_URL}${game.attributes.articleImage.data.attributes.url}`} />
              </a>
            </ImgContainer>
            <div className="text w-full md:pl-16">
                <div className="flex items-center justify-start py-3 w-[7rem]">
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
                    <Tag key={key} colour={category.attributes.colour}>{category.attributes.name}</Tag>
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


