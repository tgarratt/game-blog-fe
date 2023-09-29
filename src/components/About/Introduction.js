import React from 'react';

import Tag from '../Global/Tag';
import ReactMarkdown from 'react-markdown';


function Introduction({query}) {
  return (
    <div className='primary-block'>
        <div className='flex flex-col-reverse md:flex-row justify-between mb-4 mt-16 md:my-16 mx-auto' style={{maxWidth: '1200px'}}>
          <div className='flex justify-center' style={{height: '380px'}}>
            <div className='relative flex justify-center md:block mt-6 md:mt-0 mx-auto h-[24rem] w-[100%] md:w-[18rem] lg:w-[26rem]'>
              <div className='absolute hidden md:block rounded-xl h-[80%] w-[70%] top-[0%] right-[5%]' style={{backgroundColor: '#8cf2e3'}}></div>
              <div className='absolute hidden md:block rounded-xl h-[30%] w-[40%] bottom-[0%] left-[5%]' style={{backgroundColor: '#D9D9D9'}}></div>
              <div className='absolute hidden md:block rounded-xl h-[30%] w-[40%] left-[0%] top-[5%]' style={{backgroundColor: '#15C0A7', height: '30%', width: '40%', left: '0px', top: '5%'}}></div>
              
              {query.isLoading && 
                <div className='absolute rounded-xl left-[45%] bottom-[50%] h-[20rem] w-[70%] lg:w-[60%] ml-[-6rem] mb-[-55%] lg:mb-[-160px]' style={{backgroundColor: 'grey'}}></div>
              }
              {query.isSuccess && 
                <div className='absolute md:relative rounded-xl bottom-auto left-auto md:left-[45%] md:bottom-[-10%] h-[20rem] w-[55%] md:w-[55%] md:w-[70%] lg:w-[60%] ml-0 mb-0 md:ml-[-6rem] md:mb-[-55%] lg:mb-[-160px] bg-cover bg-no-repeat' style={{backgroundImage: `url("${query.data.data.attributes.intro_picture.data.attributes.url}")`}}></div>
              }

              <div className='absolute hidden md:block height-[5rem] width-[5rem] bottom-[25%] left-[0%]' style={{backgroundColor: '#2B62CC', borderRadius: '50px'}}></div>
            </div>
          </div>
          <div className='text flex w-full mb-5 md:mb-0 md:max-w-[50%]'>
            <div className='flex flex-col justify-center'>
              <div className='flex'>
                <Tag colour='#15C0A7'>Software Developer</Tag>
                <Tag colour='#2B62CC'>Game Enthusiast</Tag>
              </div>
              <h1 className='text text-4xl font-bold pl-1 my-4'>ABOUT</h1>
              <p className='text pl-1 rich-text'>
                {query.isLoading && 'loading...'}
                <ReactMarkdown>
                {query.isSuccess && query.data.data.attributes.intro_text}
                </ReactMarkdown>
              </p>
            </div>

          </div>
        </div>
    </div>

  );
}

export default Introduction;
