import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import axios from "axios";
import { styled } from 'styled-components';

import { getSearchedGames } from "../../api/Home/api";
import MagnifyingGlass from '../Icons/MagnifyingGlass';
import SearchBlock from './SearchBlock';
import { getCategories } from '../../api/Global/api';


const InputContainer = styled.div`
  border-width: 0px 0px 2px 0px;
  width: 60%;
` 

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
` 

const FilterContainer = styled.div`
  max-width: 70%;
` 


function Search() {
  const [searchName, setSearchName] = useState('')
  const [searchCategories, setSearchCategories] = useState([])

  const searchQuery = useQuery({
    queryKey: ['getSearchedGames'],
    queryFn: () => axios.get(getSearchedGames(searchName, searchCategories)).then((res) => (
        res.data
    ))
  });

  const categoriesQuery = useQuery({
    queryKey: ['getCategories'],
    queryFn: () => axios.get(getCategories).then((res) => (
        res.data
    ))
  });

  useEffect(() => {
    searchQuery.refetch();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName, searchCategories])

  const handleInputChange = (e) => {
    setSearchName(e.target.value)
  }

  const handleCategoryClick = (e) => {
    const category = e.target.outerText

    if(searchCategories.includes(category)){
      setSearchCategories(
        searchCategories.filter((categoryName) => (
          categoryName !== category
        ))
      )
    }else{
      setSearchCategories([...searchCategories, category])
    }
  }

  return (
    <SearchBlock blocktype={'primary'} queryData={searchQuery} searchCategories={searchCategories} direction={'col'}>
      <div className='w-full'>
        <InputContainer className='pb-1 mb-12 fillable-svg'>
          <div className='flex justify-between'>
            <SearchInput placeholder='Search...' className='border-2 searchName-input text' value={searchName} onChange={handleInputChange}/>
            <MagnifyingGlass />
          </div>
        </InputContainer>
          <div>
            <div className='text my-3 md:my-6 text-xl'>Filter by</div>
              <FilterContainer className='flex flex-wrap mb-6'>
              {categoriesQuery.isSuccess && categoriesQuery.data.data.map((category, key) => {
                const name = category.attributes.name
                const isSelected = searchCategories.includes(name);
                return (
                  <div key={key} className={`${isSelected ? 'text-black' : 'text' } rounded-lg mr-2 my-1 px-2 cursor-pointer`} style={{borderColor: isSelected && category.attributes.colour,borderWidth: '1px', borderStyle: 'solid', backgroundColor: isSelected ? category.attributes.colour : 'transparent'}} onClick={handleCategoryClick}>{name}</div>
                )
                })}
              </FilterContainer>
            </div>
        </div>
    </SearchBlock>
  );
}

export default Search;
