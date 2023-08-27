import React from 'react';
import { useQuery } from "react-query";

import axios from "axios";

import { getGames } from "../api/api";


function Home() {

    const query = useQuery({
        queryKey: ['getGames'],
        queryFn: () => axios.get(getGames).then((res) => (
            res.data
        ))
    });

  return (
    <div>
      <nav>
        <div className='flex'>
          <div>Logo</div>
          <div className='flex'>
            <div>Home</div>  
            <div>About</div>
            <div>Games</div>
            <div>Top 10</div>
          </div>
        </div>
      </nav>
      <header className='text-3xl font-bold underline'>Games</header>
      {query.isLoading && <p>Loading...</p>}
      {query.isSuccess && query.data.data.map(
        (game, key) => <li key={key}>{game.attributes['Name']} - {game.attributes['Rating']}</li>
      )}
    </div>
  );
}

export default Home;
