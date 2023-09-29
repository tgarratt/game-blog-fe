import React from 'react';


function PageNotFound() {
  return (
    <div className='primary-block'>
        <div className='flex flex-col items-center justify-center h-[80vh]'>
            <div className='text text-9xl mb-2'>
                <h1>404</h1>
            </div>
            <div className='text'>
                <p className='text-center'>It's not safe out here in the wild... <a href='/' className='underline'>come home</a></p>
            </div>
        </div>
    </div>
  );
}

export default PageNotFound;
