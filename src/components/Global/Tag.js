import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';


function Tag({colour = '#fff', mapKey = null, isSelected = false, isLink, title}) {
  const { setFilterCategories } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleTagClick = () => {
    setFilterCategories([title]);
    navigate('/reviews');
  };

  if(isSelected){
    return (
      <div key={mapKey} className="text-xs my-1 lg:mt-2 mr-2 rounded-lg w-fit px-2 py-0.5 text-black" style={{border: `1px ${colour} solid`, backgroundColor: colour}}>{title}</div>
    );
  };
  if(isLink){
    return (
      <div key={mapKey} className="text-xs my-1 lg:mt-2 mr-2 rounded-lg w-fit px-2 py-0.5 cursor-default" style={{border: `1px ${colour} solid`}}><button onClick={handleTagClick}>{title}</button></div>
    );
  }
  return (
    <div key={mapKey} className="text-xs my-1 lg:mt-2 mr-2 rounded-lg w-fit px-2 py-0.5 cursor-default" style={{border: `1px ${colour} solid`}}>{title}</div>
  );
}

export default Tag;
