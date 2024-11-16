import React from 'react';
import Image from 'next/image'; // Importa Image de next/image

const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <Image
          src="/star.png"
          alt="Filled Star"
          key={i}
          width={24} // Define el ancho en píxeles
          height={24} // Define la altura en píxeles
          className="w-6 h-6"
        />
      );
    } else {
      stars.push(
        <Image
          src="/starEmpty.png"
          alt="Empty Star"
          key={i}
          width={24} // Define el ancho en píxeles
          height={24} // Define la altura en píxeles
        />
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
