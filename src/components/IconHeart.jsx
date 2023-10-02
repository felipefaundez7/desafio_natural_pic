import React from 'react';

function IconHeart({ liked, onClick }) {
  const heartColor = liked ? 'red' : 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick} 
      style={{ cursor: 'pointer', fill: heartColor }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 16.54 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.75-3.4 7.04-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export default IconHeart;