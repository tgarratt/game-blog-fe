import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getCurrentFavouriteGame } from "../../api/api";
import SpotlightBlock from '../Global/SpotlightBlock';


function CurrentFavourite() {

    const query = useQuery({
        queryKey: ['getCurrentFavouriteGame'],
        queryFn: () => axios.get(getCurrentFavouriteGame).then((res) => (
            res.data
        ))
    });

  return (
    <SpotlightBlock blockType={'secondary'} isLoading={query.isLoading} isSuccess={query.isSuccess} game={query.data?.data[0]} />
  );
}

export default CurrentFavourite;
