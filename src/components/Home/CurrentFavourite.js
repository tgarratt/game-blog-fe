import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getCurrentFavouriteGame } from "../../api/api";
import ContentBlock from '../Global/ContentBlock';


function CurrentFavourite() {

    const query = useQuery({
        queryKey: ['getCurrentFavouriteGame'],
        queryFn: () => axios.get(getCurrentFavouriteGame).then((res) => (
            res.data
        ))
    });

  return (
    <ContentBlock blockType={'secondary'} header={'Current Favourite'} queryData={query} firstBlockSize={100} />
  );
}

export default CurrentFavourite;
