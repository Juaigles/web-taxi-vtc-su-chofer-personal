"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import StarRating from '../banners/StarRating'
import Link from 'next/link'


const ButtonApi = () => {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState([])
  useEffect(() => {

    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews')
        console.log(response.data);
        // JSON.parse(response)
        setReviews(response.data.reviews)
        setRating(response.data.rating)

        // setReviews(response.data.result.reviews)
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };
    fetchReviews()
  }, [])


  return (
    <div className=' bg-black text-white  '>
      <div className='grid grid-cols-2 gap-20 mx-[4%] md:mx-[8%] py-14 '>


        <div className='w-full flex justify-center items-center'>

          <Image src="/reviews2.png" width={1000} height={1000} className='border border-[var(--secondary-color)]' />
        </div>


        <div className=''>
          <div className='text-center my-10'>

            <h2 className='text-3xl font-bold'>RESEÑAS DE GOOGLE RAFAEL IGLESIAS</h2>
            <h3>{rating} / 5 Estrellas en Google Reviews</h3>
          </div>
          <div>
            {reviews.slice(0, 4).map((review, index) => (
              <div key={index} className='my-4'>
                <div className='grid grid-cols-3 ml-4 -mt-4'>
              
                    <img src={review.profile_photo_url} alt="Foto del autor" className='w-16 h-16 mt-10' />
                  
                  <div className=' col-span-3'>
                    <h4 className='text-2xl font-bold'>{review.author_name}</h4>
                    <StarRating rating={review.rating} />
                    <Link href="https://g.page/r/CYUWHsHsF4fMEBM/review" className=' text-blue-400'>Ir a la reseña original</Link>
                  </div>
                </div>

                <div >

                  <p className='mx-8 my-4 font-semibold'>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


  )
}

export default ButtonApi

