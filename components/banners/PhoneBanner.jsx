import React from 'react'

const PhoneBanner = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center h-96'>
        <div className='md:text-4xl text-center  flex flex-col justify-center mx-10 '>
          <h2 className='mb-4'>Puede ponerse en contacto con nosotros a través de nuestro número de teléfono: <br /> <span className='text-[var(--primary-color)] font-semibold'>679 551 515</span></h2>
          <h3>VTC Salamanca - Servicios de chófer en Salamanaca</h3>
        </div>
      </div>
    </div>

  )
}

export default PhoneBanner