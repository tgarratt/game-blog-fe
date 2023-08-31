import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getPopularGames } from "../../api/api";
import ContentBlock from '../Global/ContentBlock';


function Popular() {

    const query = useQuery({
        queryKey: ['getPopularGames'],
        queryFn: () => axios.get(getPopularGames).then((res) => (
            res.data
        ))
    });

  return (
    <ContentBlock blockType={'primary'} header={'Popular'} queryData={query} />
  );
}

export default Popular;
