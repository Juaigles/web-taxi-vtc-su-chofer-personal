// ImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';

const images = [
  {
    original: '/images/image1.jpg',
    thumbnail: '/thumbnails/thumb1.jpg',
    description: 'Descripción de la imagen 1',
  },
  {
    original: 'mercedesCLA189_1.jpg',
    thumbnail: '/thumbnails/thumb2.jpg',
    description: 'Descripción de la imagen 2',
  },
  // Agrega más imágenes según sea necesario
];

const ImageGallery = () => {
  return <Gallery items={images} />;
};

export default ImageGallery;
