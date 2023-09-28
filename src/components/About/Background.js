import React from 'react';
import ReactMarkdown from 'react-markdown';


function Background({query}) {
  return (
    <div className='primary-block'>
        <div className='flex flex-col min-[850px]:flex-row justify-between my-12 mx-auto' style={{maxWidth: '1200px'}}>
          <div className='text flex w-full min-[850px]:max-w-[50%]'>
            <div className='flex flex-col justify-center mb-8 min-[850px]:mb-0'>
              <h1 className='text text-4xl font-bold pl-1 my-4'>BACKGROUND</h1>
              <p className='text pl-1'>
                {query.isLoading && 'loading...'}
                <ReactMarkdown>
                {query.isSuccess && query.data.data.attributes.background_text}
                </ReactMarkdown>
              </p>
            </div>
          </div>
          <div className='flex justify-center' style={{ height: '380px'}}>
          <div className='relative' style={{width: '420px'}}>
              <div className='absolute hidden min-[850px]:block rounded-xl h-[80%] w-[70%] top-[0%] right-[2rem]' style={{backgroundColor: '#8cf2e3'}}></div>
              <div className='absolute hidden min-[850px]:block rounded-xl h-[55%] w-[40%] bottom-[0%] left-[5%]' style={{backgroundColor: '#D9D9D9'}}></div>
              <div className='absolute hidden min-[850px]:block rounded-xl h-[30%] w-[40%] top-[25%] right-[0%]' style={{backgroundColor: '#15C0A7'}}></div>
              
              {query.isLoading && 
                <div className='absolute rounded-xl h-[20rem] w-[17rem] left-[45%] bottom-[50%]' style={{backgroundColor: 'grey', marginLeft: '-125px', marginBottom: '-160px'}}></div>
              }
              {query.isSuccess && 
                <div className='absolute rounded-xl h-[20rem] w-[16rem] left-[50%] min-[850px]:left-[45%] bottom-[50%] min-[850px]:bottom-[50%] bg-cover bg-no-repeat ml-[-8rem] mb-[-10rem]' style={{backgroundImage: `url("${query.data.data.attributes.background_picture.data.attributes.url}")`}}></div>
              }

              <div className='absolute hidden min-[850px]:block h-[80px] w-[80px] top-[5%] left-[0%]' style={{backgroundColor: '#2B62CC', borderRadius: '50px'}}></div>
            </div>
          </div>
        </div>
    </div>

  );
}

export default Background;
