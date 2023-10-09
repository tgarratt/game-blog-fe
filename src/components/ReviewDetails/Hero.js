import React from 'react';

import Tag from "../Global/Tag";

function Hero({query}) {
  return (
    <div className='primary-block'>
        <div className='flex flex-col-reverse lg:flex-row mb-10 mx-auto' style={{maxWidth: '2000px'}}>
            {query.isLoading && <p className='text'>Loading...</p>}
            {query.isSuccess && 
                <>
                    <div className='w-full lg:w-[50%] h-[20rem] lg:h-[30rem]'>
                        <img className="object-cover h-full w-full rounded-xl" alt={'review-main-img'} src={`${query.data.data.attributes.articleImage.data.attributes.url}`} />
                    </div>
                    <div className='flex flex-col text lg:self-center mb-4 lg:mb-0 ml-0 lg:ml-16'>
                        <div className='flex mb-2 lg:mb-6'>
                            {query.data.data.attributes.categories.data.map(
                            (category, key) => (
                                <Tag key={key} colour={category.attributes.colour}>{category.attributes.name}</Tag>
                            )
                            )}
                        </div>
                        <div className='flex items-center lg:block'>
                            <div className='mr-8 mb-0 lg:mb-10 font-bold text-2xl lg:text-5xl'><h1>{query.data.data.attributes.name}</h1></div>
                            <div className='flex'>
                                <div className='text-6xl lg:text-8xl font-bold' style={{color: '#15C0A7'}}><h2>{query.data.data.attributes.rating}</h2></div>
                                <div className='text-3xl lg:text-3xl font-bold self-end pb-2 pl-2'><h2>/10</h2></div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </div>
    </div>
  );
}

export default Hero;
