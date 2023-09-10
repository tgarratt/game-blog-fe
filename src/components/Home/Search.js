import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import axios from "axios";
import { styled } from 'styled-components';

import { getSearchedGames, getCategories } from "../../api/api";
import SearchBlock from '../Global/SearchBlock';
import MagnifyingGlass from '../Icons/MagnifyingGlass';


const InputContainer = styled.div`
  border-width: 0px 0px 2px 0px;
  border-color: #fff;
  width: 60%;
` 

const SearchInput = styled.input`
  background-color: transparent;
  color: #fff;
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
    <SearchBlock blocktype={'primary'} queryData={searchQuery} direction={'col'}>
      <div className='w-full'>
        <InputContainer className='pb-1 mb-12'>
          <div className='flex justify-between'>
            <SearchInput placeholder='Search...' className='border-2 searchName-input' value={searchName} onChange={handleInputChange}/>
            <MagnifyingGlass fillColour={'#fff'} />
          </div>
        </InputContainer>
          <div>
            <div className='text my-3 md:my-6 text-xl'>Filter by</div>
              <FilterContainer className='flex flex-wrap mb-6'>
              {categoriesQuery.isSuccess && categoriesQuery.data.data.map((category, key) => {
                const name = category.attributes.name
                const isSelected = searchCategories.includes(name);
                return (
                  <div key={key} className={`${isSelected ? 'text-black' : 'text' } rounded-lg mr-2 my-1 px-2`} style={{borderColor: isSelected && category.attributes.colour,borderWidth: '1px', borderStyle: 'solid', backgroundColor: isSelected ? category.attributes.colour : 'transparent'}} onClick={handleCategoryClick}>{name}</div>
                )
                })}
              </FilterContainer>
            </div>
        </div>
    </SearchBlock>
  );
}

export default Search;
