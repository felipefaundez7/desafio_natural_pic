import React, { useContext } from 'react';
import LikesContext from '../context/LikesContext';

import Gallery from '../components/Gallery';

const Home = ({photos}) => {
  const { likes } = useContext(LikesContext);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery  favorites={likes} photos={photos} />
    </div>
  );
};

export default Home;