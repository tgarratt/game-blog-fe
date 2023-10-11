import React, { useState } from "react";
import { styled } from 'styled-components';

import Timer from "../Icons/Timer";
import Tag from "../Global/Tag";
import ReactMarkdown from "react-markdown";
import BackArrows from "../Icons/BackArrows";
import NextArrows from "../Icons/NextArrows";


const GamePreview = styled.div`
min-height: 36rem;
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
  const [primaryReview, setPrimaryReview] = useState(0)

  const containerRef = React.useRef(null)

  const scrollForwards = () => {
    window.scrollTo({ left: containerRef.current.scrollLeft += 700, behavior: 'smooth' })
    setTimeout(() => {
      setPrimaryReview(primaryReview + 1);
    }, 500);     
  };

  const scrollBackwards = () => {
    window.scrollTo({ left: containerRef.current.scrollLeft += -700, behavior: 'smooth' })
    setTimeout(() => {
      setPrimaryReview(primaryReview - 1);
    }, 500);   

  };

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }

  const itemsCount = queryData.data?.data.length;

  return (
    <div className={`${blocktype}-block`}>
      <div className="mx-auto px-8" style={{maxWidth: '2000px'}}>
      {header &&
        <div className="flex flex-col md:flex-row mb-8">
          <h2 className="text-4xl font-bold uppercase text">{header}</h2>
        </div>
      }

      {itemsCount > 2 &&  
      <>
        <div className={`hidden lg:flex justify-start relative left-[-4rem] bottom-[-16rem] h-[32px] fillable-svg`}>
          <div className={`${primaryReview === 0 ? 'hidden' : 'h-[28px] hover:h-[32px] duration-500'}`} onClick={scrollBackwards}>
            <BackArrows />
          </div>
        </div>
        <div className={`hidden lg:flex justify-end relative right-[-4rem] bottom-[-14rem] h-[32px] fillable-svg`}>
          <div className={`${primaryReview === 2 ? 'hidden' : 'h-[28px] hover:h-[32px] duration-500'}`} onClick={scrollForwards}>
            <NextArrows />
          </div>
        </div>
      </>
      }

      <div className="flex flex-col lg:flex-row mb-1 lg:mb-20 overflow-hidden scroll-smooth" style={{scrollSnapType: 'x mandatory'}} ref={containerRef}>
        {queryData.isLoading && <p className="text">Loading...</p>}
        {queryData.isSuccess && queryData.data.data.map(
          (game, key) => {

            const previewSize = key === primaryReview ? firstBlockSize : 100 - firstBlockSize;
            

            return (
            <GamePreview key={key} className={`px-0 lg:pr-2 my-4 lg:my-0 snap-start duration-500 scroll-smooth ${key > 1 && 'hidden lg:inline'}`} style={{minWidth: `${previewSize}%`}} previewsize={previewSize}>
              <ImgContainer className="overflow-auto rounded-xl overflow-hidden">
                <a href={`/review/${game.id}`}>
                  <img className="object-cover h-full w-full duration-150 hover:scale-110" alt={'homepage-review-img'} src={`${game.attributes.articleImage.data.attributes.url}`} />
                </a>  
              </ImgContainer>
              <div className="text">
                  <div className="flex flex-col md:flex-row justify-between mt-2">
                    <a href={`/review/${game.id}`} className="w-full">
                      <h2 className="text-lg md:text-3xl capitalize mb-1 md:mb-6" style={{maxWidth: '80%'}}>
                        {game.attributes['name']}
                      </h2>
                    </a>
                    <div className="pt-1">
                      <div className="flex items-center w-[7rem]">
                        <p className="text-xs pr-1">
                          {calculateReadTime(game.attributes['reviewText'])} minute read
                        </p>
                        <Timer fillColour={calculateReadTime(game.attributes['reviewText']) > 2 ? '#2D99D1' : '#29D18A'} />
                      </div>
                    </div>
                </div>
                <div className="hidden md:block">
                  <p className="w-4/5 text-sm mb-1 lg:mb-2 flex">
                    <ReactMarkdown>
                      {game.attributes['reviewText'].substring(0, previewSize * 3) + "..."}
                    </ReactMarkdown>
                  </p>
                </div>
                <div className="flex flex-wrap mt-1">
                  {game.attributes.categories.data.map(
                    (category, key) => (
                      <Tag mapKey={key} colour={category.attributes.colour}>{category.attributes.name}</Tag>
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
    </div>
  );
}

export default ContentBlock;
