import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

import { getReviewDetails } from '../api/ReviewDetails/api';
import Hero from '../components/ReviewDetails/Hero';
import ReviewText from '../components/ReviewDetails/ReviewText';


function ReviewDetails() {
const {gameId} = useParams();

const query = useQuery({
  queryKey: ['getReviewDetails'],
  queryFn: () => axios.get(getReviewDetails(gameId)).then((res) => (
      res.data
  ))
});

  return (
    <>
      <Hero query={query} />
      <ReviewText query={query} />
    </>
  );
}

export default ReviewDetails;
