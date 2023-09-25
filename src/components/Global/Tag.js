import React from 'react';


function Tag({colour = '#fff', children, mapKey = null}) {


  return (
    <div key={mapKey} className="text-xs mt-4 mr-2 rounded-lg w-fit px-2 py-0.5" style={{border: `1px ${colour} solid`}}>{children}</div>
  );
}

export default Tag;
