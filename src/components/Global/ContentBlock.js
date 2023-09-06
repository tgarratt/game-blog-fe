import React from "react";
import Timer from "../Icons/Timer";


function ContentBlock({
  blockType,
  header,
  queryData,
  children,
  direction = 'row',
  firstBlockSize
}) {

  const calculateReadTime = (text) => {
    const wordCount = text.trim().split(' ').length
    const minutes = wordCount / 500 * 3.8
    return Math.round(minutes)

  }


  return (
    <div className={`${blockType}-block`} style={{minHeight: '35rem'}}>
      <h2 className='text-3xl font-bold uppercase text' style={{marginBottom: '1rem'}}>{header}</h2>
      {children}
      {queryData.isLoading && <p className="text">Loading...</p>}
      <div className={`flex ${direction === 'col' ? 'flex-col' : ''}`}>
      {queryData.isSuccess && queryData.data.data.map(
        (game, key) => {

          const previewLength = key === 0 ? firstBlockSize : 100 - firstBlockSize;

          return (<div key={key} className="mx-2" style={{height: '36rem', width: key === 0 ? `${firstBlockSize}%` : `${100 - firstBlockSize}%`}}>
          <div className="overflow-auto rounded-lg" style={{height: '25rem'}}>
            <img style={{height: '100%', width: '100%'}} className="object-cover" src={`http://localhost:5000${game.attributes.articleImage.data.attributes.url}`} />
          </div>
          <div  className='text'>
              <div className="flex items-center justify-end pt-1">
              <p className="text-xs pr-1">
              {calculateReadTime(game.attributes['reviewText'])} min read
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
                {game.attributes['reviewText'].substring(0, previewLength * 3)}...
              </p>
            </div>
            <div className="flex">
              {game.attributes.categories.data.map(
                (category, key) => {
                  const categoryName = category.attributes.name;
                 return (<div key={key} className={`text-xs mt-4 mr-2 ${categoryName}`} style={{border: `1px ${category.attributes.colour} solid`, borderRadius: '15px', width: 'fit-content', padding: '0rem 0.5rem'}}>{categoryName}</div>)
                }
              )}
            </div>
        </div>
        </div>)

        }
      )}
      </div>
    </div>
  );
}

export default ContentBlock;
