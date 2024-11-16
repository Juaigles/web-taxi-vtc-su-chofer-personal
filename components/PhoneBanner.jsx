// PhoneBanner.js
import React from 'react';
import ObserverAnimations from './layout/ObserverAnimations';
import Link from 'next/link';

const PhoneBanner = () => {
  return (
    <section className='flex justify-center items-center'>
      <ObserverAnimations>
        <div className='flex flex-col justify-center items-center h-96 animate-duration-[1500ms] animate-ease-out'>
          <div className='md:text-4xl text-center flex flex-col justify-center mx-10'>
            <h2 className='mb-4 '>
              Póngase en contacto con nosotros a través de nuestro número de teléfono: <br />
              <Link href="tel:+34679551515" className='text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-semibold'>679 551 515</Link>
            </h2>
            <h3>VTC Salamanca - Servicios de chófer en Salamanca</h3>
          </div>
        </div>
      </ObserverAnimations>
    </section>
  );
};

export default PhoneBanner;
