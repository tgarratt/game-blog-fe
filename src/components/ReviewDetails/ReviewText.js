import React from 'react';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown'

const BannerContainer = styled.div`
width: 100%;
height: 13rem;
` 

function ReviewText({query}) {
    
const formatDate = (date) => (
    new Date(date).toLocaleDateString('en-GB')
)

  return (
    <div className='secondary-block'>
        <div className='flex mt-8'>
            {query.isLoading && <p>Loading...</p>}
            {query.isSuccess && 
                <div className='flex w-full'>
                  <div className='hidden md:block text min-w-[8rem]' style={{minWidth: '15%'}}>
                    <div className='font-bold text-3xl'>GAME REVIEW</div>
                    <div className='text-lg'>{formatDate(query.data.data.attributes.publishedAt)}</div>
                  </div>
                  <div>
                    <div className='text mr-0 md:mr-[25%] ml-0 md:ml-[7.5%]'>
                        <ReactMarkdown>
                            {query.data.data.attributes.reviewText}
                        </ReactMarkdown>    
                    </div>
                    <BannerContainer className='md:pr-[17.5%]'>
                        <img className="object-cover h-full w-full rounded-xl my-8" alt={'review-img'} src={`http://localhost:5000${query.data.data.attributes.banner.data.attributes.url}`} />
                    </BannerContainer>
                    <div className='mr-0 md:mr-[25%] ml-0 md:ml-[7.5%]'>
                        <div className='text w-fit text-3xl pl-2 mx-auto mb-6 mt-10 ' style={{borderLeft: '5px solid #D9D9D9', borderRadius: '5px'}}>{query.data.data.attributes.quote}</div>
                    </div>
                    <div className='text mb-12 mr-0 md:mr-[25%] ml-0 md:ml-[7.5%]'>
                        <ReactMarkdown>
                            {query.data.data.attributes.closing_statement}
                        </ReactMarkdown>   
                    </div>
                  </div>
                </div>
            }
        </div>
    </div>
  );
}

export default ReviewText;
