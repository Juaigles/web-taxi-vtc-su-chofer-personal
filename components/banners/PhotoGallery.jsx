"use client"

import React, { useState } from 'react';

const images = [
  {src: '/Sala1.jpg', alt: 'Sala'},
  {src: '/Sala1.jpg', alt: 'Sala'},
  {src: '/Sala1.jpg', alt: 'Sala'},
  {src: '/Sala1.jpg', alt: 'Sala'},
  
]

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid  md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-full cursor-pointer" onClick={() => openModal(image.src)}>
                        <img src={image.src} alt={image.alt} className="object-cover md:h-48  md:w-full"/>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div id="modal" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closeModal}>
                    <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center flex justify-center ">
                            <img src={selectedImage} alt="Amplified view" className="w-auto h-auto max-w-full max-h-full"/>
                            <span className="absolute top-0 right-0 cursor-pointer p-4 text-white" onClick={closeModal}>&times;</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
