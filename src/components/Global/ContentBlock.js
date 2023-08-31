import React from "react";


function ContentBlock({blockType, header, queryData, children}) {


  return (
    <div className={`${blockType}-block`}>
      <header className='text-3xl font-bold underline text'>{header}</header>
      {children}
      {queryData.isLoading && <p>Loading...</p>}
      {queryData.isSuccess && queryData.data.data.map(
        (game, key) => <div key={key} className='text'>{game.attributes['name']} - {game.attributes['rating']}</div>
      )}
    </div>
  );
}

export default ContentBlock;
