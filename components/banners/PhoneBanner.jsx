// PhoneBanner.js
import React from 'react';
import ObserverAnimations from '../layout/ObserverAnimations';

const PhoneBanner = () => {
  return (
    <section className='flex justify-center items-center'>
      <ObserverAnimations>
        <div className='flex flex-col justify-center items-center h-96 animate-duration-[1500ms] animate-ease-out'>
          <div className='md:text-4xl text-center flex flex-col justify-center mx-10'>
            <h2 className='mb-4 '>
              Póngase en contacto con nosotros a través de nuestro número de teléfono: <br />{' '}
              <span className='text-[var(--primary-color)] font-semibold'>679 551 515</span>
            </h2>
            <h3>VTC Salamanca - Servicios de chófer en Salamanca</h3>
          </div>
        </div>
      </ObserverAnimations>
    </section>
  );
};

export default PhoneBanner;
