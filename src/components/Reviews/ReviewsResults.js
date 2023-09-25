import React from 'react';

function ReviewsResults({query}) {
    

  return (
    <div className='primary-block'>
        <div className='flex flex-wrap'>
        {query.isLoading && <p>Loading...</p>}
        {query.isSuccess && 
            query.data.data.map((game) => {
            return (
            <div className="w-1/2 lg:w-1/3 xl:w-1/4 px-2">
                <div className="overflow-auto rounded-xl overflow-hidden h-[10rem] w-full">
                <a href={`/review/${game.id}`}>
                    <img className="object-cover h-full w-full duration-150 hover:scale-110" alt={'reviews-search-img'} src={`${process.env.REACT_APP_API_URL}${game.attributes.articleImage.data.attributes.url}`} />
                </a>  
                </div>
                <div className='text'><h1>{game.attributes.name}</h1></div>
            </div>
            )
            })
        }
        </div>
    </div>
  );
}

export default ReviewsResults;

