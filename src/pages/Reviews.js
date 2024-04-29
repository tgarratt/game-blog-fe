import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { getAllGames } from '../api/Reviews/api';
import ReviewsResults from '../components/Reviews/ReviewsResults';
import ReviewsFilter from '../components/Reviews/ReviewsFilter';
import { getCategories } from '../api/Global/api';
import { GlobalContext } from '../contexts/GlobalContext';


function Reviews() {
  const [orderDir, setOrderBy] = useState('publishedAt:desc');
  const [filterName, setFilterName] = useState('');

  const {filterCategories, setFilterCategories} = useContext(GlobalContext);

  const allGamesQuery = useQuery({
    queryKey: ['getAllGames'],
    queryFn: () => axios.get(getAllGames(orderDir, filterCategories, filterName)).then((res) => (
        res.data
    ))
  });
  
  const categoriesQuery = useQuery({
    queryKey: ['getCategories'],
    queryFn: () => axios.get(getCategories).then((res) => (
        res.data
    ))
  });

  const handleOrderChange = (e) => {
    const direction = e.target.value

    if(direction === 'publishedAsc') {
        // order by oldest entry first
        setOrderBy('publishedAt:asc')
      } else if(direction === 'ratingDesc') {
        setOrderBy('rating:desc')
        // order by oldest entry first
      } else if(direction === 'ratingAsc') {
        setOrderBy('rating:asc')
      } else {
        // order by newest entry first
        setOrderBy('publishedAt:desc')
      }
  }

  const handleCategoryClick = (e) => {
    const category = e.target.outerText

    if(filterCategories.includes(category)){
      setFilterCategories(
        filterCategories.filter((categoryName) => (
          categoryName !== category
        ))
      )
    }else{
      setFilterCategories([...filterCategories, category])
    }
  }

  const handleInputChange = (e) => {
    setFilterName(e.target.value)
  }


useEffect(() => {
  allGamesQuery.refetch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [orderDir, filterCategories, filterName])

  return (
    <>
      <ReviewsFilter 
      categories={categoriesQuery}
      handleOrderChange={handleOrderChange}
      handleCategoryClick={handleCategoryClick}
      filterCategories={filterCategories}
      handleInputChange={handleInputChange}
      filterName={filterName}/>
      <ReviewsResults query={allGamesQuery} />
    </>
  );
}

export default Reviews;
