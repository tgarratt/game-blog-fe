import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getRecentGames } from "../../api/api";
import ContentBlock from '../Global/ContentBlock';


function Recent() {

  const query = useQuery({
      queryKey: ['getRecentGames'],
      queryFn: () => axios.get(getRecentGames).then((res) => (
          res.data
      ))
  });
  

  return (
    <ContentBlock blockType={'primary'} header={'Recent Posts'} queryData={query} firstBlockSize={60} />
  );
}

export default Recent;
