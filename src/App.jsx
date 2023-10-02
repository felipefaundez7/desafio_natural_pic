import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { LikesProvider } from './context/LikesContext';

import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.error('Error al cargar las fotos:', error);
      });
  }, []);

  return (
    <div>
      <LikesProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home photos={photos} />} />
          <Route path="/favoritos" element={<Favorites photos={photos}/>} />
        </Routes>
      </LikesProvider>
    </div>
  );
};
export default App;
