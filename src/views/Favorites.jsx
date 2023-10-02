
import React, { useContext } from 'react';
import LikesContext from '../context/LikesContext';

import Gallery from '../components/Gallery';

const Favorites = ({ photos }) => {
  const { likes } = useContext(LikesContext);

  const likedFavorites = likes.map((photoId) => photos.find((photo) => photo.id === photoId));
  
  return (
    <div className="App">
      <h1>Favoritos</h1>
      <Gallery favorites={likedFavorites} />
    </div>
  );
};

export default Favorites;