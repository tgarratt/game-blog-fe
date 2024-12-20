import React from 'react';
import { styled } from 'styled-components';

import MagnifyingGlass from '../Icons/MagnifyingGlass';


const InputContainer = styled.div`
  border-width: 0px 0px 2px 0px;
` 

const FilterInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
` 

const FilterSelect = styled.select`
  background-color: transparent;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
` 

function ReviewsFilter({
  categories,
  handleOrderChange,
  handleCategoryClick,
  filterCategories,
  handleInputChange,
  filterName
}) {
    
  return (
    <div className='primary-block'>
      {categories.isLoading && <div className='text'>Loading...</div>}
      <div className='flex flex-col mt-8 mx-auto' style={{maxWidth: '2000px'}}>
        <div>
          <InputContainer className='pb-1 mb-6 fillable-svg w-2/3 md:w-1/2 lg:w-1/3'>
            <div className='flex justify-between'>
              <FilterInput placeholder='Search...' className='border-2 searchName-input text text-xl' value={filterName} onChange={handleInputChange}/>
              <MagnifyingGlass size={'50'} />
            </div>
          </InputContainer>
        </div>
        <div className='flex flex-wrap items-center max-w-full lg:max-w-[60%]'>
          <p className='text pr-4'>Filter by:</p>
        {categories.isSuccess && categories.data.data.map((category, key) => {
            const name = category.attributes.name
            const isSelected = filterCategories.includes(name);
            return (
              <div key={key} className={`${isSelected ? 'text-black' : 'text' } rounded-lg mr-2 my-1 px-2 w-fit cursor-pointer`} style={{borderColor: isSelected && category.attributes.colour,borderWidth: '1px', borderStyle: 'solid', backgroundColor: isSelected ? category.attributes.colour : 'transparent'}} onClick={handleCategoryClick} >{name}</div>
            )
            })}
        </div>
        <div className='self-end my-2 text text-lg'>
          <FilterSelect onChange={handleOrderChange}>
            <option value='publishedDesc' className='text-black'>Newest First</option>
            <option value='publishedAsc' className='text-black'>Oldest First</option>
            <option value='ratingDesc' className='text-black'>Highest Rating</option>
            <option value='ratingAsc' className='text-black'>Lowest Rating</option>
          </FilterSelect>
        </div>
      </div>

    </div>
  );
}

export default ReviewsFilter;

