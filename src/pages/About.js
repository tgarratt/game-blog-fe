import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { getAboutInfo } from '../api/About/api';
import Introduction from '../components/About/Introduction';
import Skills from '../components/About/Skills';
import Background from '../components/About/Background';


function About() {

  const query = useQuery({
    queryKey: ['getAboutInfo'],
    queryFn: () => axios.get(getAboutInfo).then((res) => (
        res.data
    ))
  });

  return (
    <div>
      <Introduction query={query} />
      <Skills query={query} />
      <Background query={query} />
    </div>
  );
}

export default About;
