import React, { useState, useEffect } from 'react';
import { useLikes } from '../context/LikesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import IconHeart from "./IconHeart";

function Gallery({ photos }) {
  const { likes, toggleLike } = useLikes();
  
  const handleToggleLike = (photoId) => {
    toggleLike(photoId); 
  };

  console.log({ photos });

  return (
    <div className="container">
      <div className="row">
        {photos && photos.map((photo) => (
          <div key={photo.id} className="col-12 col-sm-6 col-md-4 col-mb-4">
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={photo.src.tiny} alt={photo.alt} />
              <Card.ImgOverlay>
                <div className="heartbox">
                  <IconHeart
                    liked={likes.includes(photo.id)}
                    onClick={() => handleToggleLike(photo.id)} 
                  />
                </div>
                <Card.Title>{photo.alt}</Card.Title>
                <Card.Text>
                  {photo.photographer}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;