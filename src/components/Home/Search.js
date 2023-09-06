import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import axios from "axios";

import { getSearchedGames } from "../../api/api";
import ContentBlock from '../Global/ContentBlock';


function Search() {
  const [search, setSearch] = useState('')

  const query = useQuery({
    queryKey: ['getSearchedGames'],
    queryFn: () => axios.get(getSearchedGames(search)).then((res) => (
        res.data
    ))
  });

  useEffect(() => {
    query.refetch();
  }, [search])

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
    <ContentBlock blockType={'primary'} header={'Search'} queryData={query} direction={'col'}>
    <input placeholder='Search...' className='border-2' value={search} onChange={handleInputChange}/>
    </ContentBlock>
    </>
  );
}

export default Search;
