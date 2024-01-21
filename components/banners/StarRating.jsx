
  import React from 'react'
  
  const StarRating = ({rating}) => {
    const totalStars = 5;
    let stars = [];
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<img src="star.png" alt="Filled Star" key={i} className='w-6 h-6' />);
      } else {
        stars.push(<img src="starEmpty.png" alt="Empty Star" key={i} />);
      }
    }
    return (
      <div className='flex'>{stars}</div>
    )
  }
  
  export default StarRating