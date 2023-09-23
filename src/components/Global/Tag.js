import React from 'react';


function Tag({colour = '#fff', children, key = null}) {


  return (
    <div key={key} className="text-xs mt-4 mr-2 rounded-lg w-fit px-2 py-0.5" style={{border: `1px ${colour} solid`}}>{children}</div>
  );
}

export default Tag;
