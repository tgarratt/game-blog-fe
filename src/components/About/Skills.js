import React from 'react';

function Skills({query}) {
  return (
    <div className='secondary-block'>
      <div className='flex flex-col md:flex-row justify-between lg:justify-between text-xl md:text-base my-4 md:my-12 items-center mx-auto' style={{maxWidth: '1200px'}}>
        <div className='text flex sm:mx-0 md:mx-16 w-[11rem] md:w-auto lg:mx-0'>
          <div className='flex'>
            <h2 className='mr-5 md:mr-1 font-bold w-[6rem] md:w-auto h-[8rem]'>INTERESTS</h2>
            <div className='flex flex-col ml-6 md:ml-2 w-[4rem] md:w-auto'>
              {query.isSuccess && query.data.data.attributes.interests.map((interest) => (
                <p>{interest}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='text flex mt-10 md:mt-0 sm:mx-0 md:mx-16 w-[11rem] md:w-auto lg:mx-0'>
          <div className='flex'>
            <h2 className='mr-5 md:mr-1 font-bold w-[6rem] md:w-auto h-[8rem]'>SKILLS</h2>
            <div className='flex flex-col ml-6 md:ml-2 w-[4rem] md:w-auto'>
            {query.isSuccess && query.data.data.attributes.skills.map((skill) => (
                <p>{skill}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='hidden lg:block' style={{width: '500px', height: '380px'}}>
          <div className='relative mr-0' style={{width: '420px', height: '100%'}}>
          <div className='absolute rounded-xl h-[60%] w-[65%] bottom-[0%] right-[30px]' style={{backgroundColor: '#8cf2e3'}}></div>
          <div className='absolute rounded-xl h-[35%] w-[85%] top-[0%] right-[0px]' style={{backgroundColor: '#2B62CC'}}></div>
          <div className='absolute rounded-xl h-[30%] w-[40%] left-[0%] bottom-[5%]' style={{backgroundColor: '#D9D9D9'}}></div>

          {query.isLoading && 
            <div className='absolute rounded-xl h-[20rem] w-[17rem] top-[50%] right-[50%] mt-[-10rem] mr-[-9rem]' style={{backgroundColor: 'grey'}}></div>
          }
          {query.isSuccess && 
            <div className='absolute rounded-xl h-[20rem] w-[17rem] top-[50%] right-[50%] bg-cover bg-no-repeat mt-[-10rem] mr-[-9rem]' style={{backgroundImage: `url("http://localhost:5000${query.data.data.attributes.skills_picture.data.attributes.url}")`}}></div>
          }

          <div className='absolute h-[65px] w-[65px] bottom-[25%] right-[0%]' style={{backgroundColor: '#2AD49B', borderRadius: '50px'}}></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Skills;
