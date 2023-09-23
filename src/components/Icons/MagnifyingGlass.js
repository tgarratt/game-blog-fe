import React from 'react';


function MagnifyingGlass({size = '28'}) {


  return (
      <>
        <svg width={`${size}`} height={`${size}`} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.95 28.875L18.2875 20.2125C17.6 20.7625 16.8094 21.1979 15.9156 21.5187C15.0219 21.8396 14.0708 22 13.0625 22C10.5646 22 8.45075 21.1347 6.721 19.404C4.99125 17.6733 4.12592 15.5595 4.125 13.0625C4.125 10.5646 4.99033 8.45075 6.721 6.721C8.45167 4.99125 10.5655 4.12592 13.0625 4.125C15.5604 4.125 17.6743 4.99033 19.404 6.721C21.1338 8.45167 21.9991 10.5655 22 13.0625C22 14.0708 21.8396 15.0219 21.5187 15.9156C21.1979 16.8094 20.7625 17.6 20.2125 18.2875L28.875 26.95L26.95 28.875ZM13.0625 19.25C14.7812 19.25 16.2424 18.6482 17.446 17.4446C18.6496 16.241 19.2509 14.7803 19.25 13.0625C19.25 11.3438 18.6482 9.88258 17.4446 8.679C16.241 7.47542 14.7803 6.87408 13.0625 6.875C11.3438 6.875 9.88258 7.47679 8.679 8.68038C7.47542 9.88396 6.87408 11.3447 6.875 13.0625C6.875 14.7812 7.47679 16.2424 8.68038 17.446C9.88396 18.6496 11.3447 19.2509 13.0625 19.25Z" />
        </svg>
      </>
  );
}

export default MagnifyingGlass;
