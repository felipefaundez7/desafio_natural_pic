import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

export function useLikes() {
  return useContext(LikesContext);
};

export function LikesProvider({ children }) {
  const [likes, setLikes] = useState([]);

  const toggleLike = (photoId) => {
    setLikes((prevLikes) => {
      if (prevLikes.includes(photoId)) {
        return prevLikes.filter((id) => id !== photoId);
      } else {
        return [...prevLikes, photoId];
      }
    });
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export default LikesContext;