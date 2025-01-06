"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import StarRating from '../banners/StarRating';
import Link from 'next/link';
import ObserverAnimations from '../layout/ObserverAnimations';

const ButtonApi = () => {
  const [reviews, setReviews] = useState([]); // Estado para las reseñas
  const [rating, setRating] = useState(0);   // Estado para el rating promedio

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews'); // Petición a tu API local
        const { reviews, rating } = response.data;

        setReviews(reviews || []); // Evita valores undefined
        setRating(rating || 0);    // Evita valores undefined
      } catch (err) {
        console.error('Error al obtener las reseñas:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className='bg-black text-white'>
      <div className='text-center pt-10 '>
        <h2 className='text-3xl font-bold '>RESEÑAS DE GOOGLE RAFAEL IGLESIAS</h2>
        <h3>{rating} / 5 Estrellas en Google Reviews</h3>
      </div>

      <div className='grid md:grid-cols-2 gap-20 mx-[4%] md:mx-[8%]'>
        <ObserverAnimations animationType='fade-right'>
          <div className='w-full max-w-[100%] flex justify-center items-start mt-10'>
            <Image src="/reviews2.png" alt='reviews' width={1000} height={1000} className='border border-[var(--secondary-color)]' />
          </div>
        </ObserverAnimations>

        <section className='md:my-10'>
          {reviews.slice(0, 5).map((review, index) => (
            review.rating > 3 && (
              <article key={index} className='mb-10'>
                <div className='flex gap-4 items-center'>
                  <Image src={review.profile_photo_url} width={400} height={400} alt="Foto del autor" className='w-16 h-16' />
                  <div>
                    <h4 className='text-2xl font-bold'>{review.author_name}</h4>
                    <StarRating rating={review.rating} />
                    <Link href="https://g.page/r/CYUWHsHsF4fMEBM/review" className='text-blue-400'>Ir a la reseña original</Link>
                  </div>
                </div>
                <p className='mx-8 my-4 font-semibold'>{review.text}</p>
              </article>
            )
          ))}
        </section>
      </div>
      <div className='flex justify-center items-center '>

      <div className='mb-8 px-4 py-4 border uppercase rounded-full bg-[var(--primary-color)] border-none text-white font-semibold hover:opacity-90 hover:lg-shadow custom-shadow  text-1xl md:text-1xl'>
        <Link href="https://www.google.com/search?sca_esv=598c226b643eedfc&rlz=1C1UEAD_esES1046ES1046&q=vtcsuchoferpersonal&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7iClEzc0W5OvvqfyE3VnAK5FU8PYmMbip5OH2WQFLqsGE9nYukvdpDZAQiJ4GB7pmc4WM-w%3D&uds=ADvngMgcma2krFDWAfXM9WWaYuEssLcFcKCd90MdeQRoudr8x025m6RiXgagY9ZzmVAbj820ac1Ns4bKPPg0Zt1gSIGJESbCzEtHzt-LWwMac7N_EvaMu2E&sa=X&ved=2ahUKEwjI-N_ttuGKAxWCQvEDHVp8F54Q3PALegQIGhAE&biw=1360&bih=599&dpr=1">DEJA TU RESEÑA EN GOOGLE</Link>
      </div>
      </div>
    </div>
  );
};

export default ButtonApi;
