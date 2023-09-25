import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";

import { getPopularGames } from "../../api/Home/api";
import ContentBlock from './ContentBlock';


function Popular() {

    const query = useQuery({
        queryKey: ['getPopularGames'],
        queryFn: () => axios.get(getPopularGames).then((res) => (
            res.data
        ))
    });

  return (
    <ContentBlock blocktype={'primary'} header={'Popular Titles'} queryData={query} firstBlockSize={50} />
  );
}

export default Popular;
