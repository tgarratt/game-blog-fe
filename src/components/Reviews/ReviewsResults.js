import React from 'react';

function ReviewsResults({query}) {
    

  return (
    <div className='primary-block'>
        <div className='flex flex-wrap mx-auto min-h-[80vh]' style={{maxWidth: '2000px'}}>
        {query.isLoading && <p>Loading...</p>}
        {query.isSuccess && query.data.data.length === 0 && 
          <div className='text text-center mx-auto mt-20'>Sorry no results found, looking for a game? Suggest it <a href='mailto:tomagarratt@yahoo.co.uk' className='underline'>here!</a></div>
        }
        {query.isSuccess && 
            query.data.data.map((game) => {
            return (
            <div className="w-1/2 lg:w-1/3 xl:w-1/4 px-2 h-fit mb-20">
                <div className="overflow-auto rounded-xl overflow-hidden h-[10rem] w-full">
                <a href={`/review/${game.id}`}>
                    <img className="object-cover h-full w-full duration-150 hover:scale-110" alt={'reviews-search-img'} src={`${game.attributes.articleImage.data.attributes.url}`} />
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

