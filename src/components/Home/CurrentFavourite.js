import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getCurrentFavouriteGame } from "../../api/Home/api";
import SpotlightBlock from './SpotlightBlock';


function CurrentFavourite() {

    const query = useQuery({
        queryKey: ['getCurrentFavouriteGame'],
        queryFn: () => axios.get(getCurrentFavouriteGame).then((res) => (
            res.data
        ))
    });

  return (
    <SpotlightBlock blocktype={'secondary'} isLoading={query.isLoading} isSuccess={query.isSuccess} game={query.data?.data[0]} />
  );
}

export default CurrentFavourite;
