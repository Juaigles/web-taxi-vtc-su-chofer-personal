"use client"
// ImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: '/mercedesCLA180_1.jpg',
    thumbnail: '/mercedesCLA180_1.jpg',
    description: 'Mercedes CLA 180',
  },


  {
    original: '/furgoEspalda.webp',
    thumbnail: '/furgoEspalda.webp',
    description: 'Ford Custom tournament',
  },
  {
    original: '/fordPlaza.webp',
    thumbnail: '/fordPlaza.webp',
    description: 'Ford en plaza Mayor Salamanca',
  },
  {
    original: '/fordPuente.webp',
    thumbnail: '/fordPuente.webp',
    description: 'Ford Custom Tourneo en el puente Romano de salamanca',
  },
  {
    original: '/mercedesPlaza.webp',
    thumbnail: '/mercedesPlaza.webp',
    description: 'Mercedes CLA 180 en plaza Mayor Salamanca',
  },

  {
    original: '/mercedesCiudad.webp',
    thumbnail: '/mercedesCiudad.webp',
    description: 'Mercedes CLA 180 en ciudad futurista',
  },
  {
    original: '/priusBosqueBlog.webp',
    thumbnail: '/priusBosqueBlog.webp',
    description: 'Prius Plus en Río Tormes Salamanca',
  },
  {
    original: '/logosucho.png',
    thumbnail: '/logosucho.png',
    description: 'Su chófer personal',
  },
  // Agrega más imágenes según sea necesario
];

const ImageGallery = () => {
  return (
      <div className='py-10  flex justify-center items-center border'>
        <div className='w-[50vw]'>

      <Gallery items={images}
      showBullets={true} 
      showPlayButton={false}
      className="border"
      />
      </div>
    </div>  
    
  )
};

export default ImageGallery;
