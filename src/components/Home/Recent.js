import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";

import { getRecentGames } from "../../api/Home/api";
import ContentBlock from './ContentBlock';


function Recent() {

  const query = useQuery({
      queryKey: ['getRecentGames'],
      queryFn: () => axios.get(getRecentGames).then((res) => (
          res.data
      ))
  });
  

  return (
    <ContentBlock blocktype={'primary'} queryData={query} firstBlockSize={60} />
  );
}

export default Recent;
