import React from 'react'
import Link from 'next/link'


const Hero = ({children}) => {
  return (
    <div className='h-screen flex justify-center items-center bg-center  bg-cover hero-bg-image'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'>
        </div>
        <div className='py-5 text-white z-[2]'>
            <div className='block text-center w-[100%] p-5 my-5  overflow-hidden'>
                <h1 className='text-[2.5rem] font-bold mt-20'>{children}</h1>
                <h2 className='text-3xl mb-10 xl:text-[2.5rem] '>Queremos ser su chófer personal de confianza</h2>
            <Link href='tel:+34679551515' className=''>
                <button className='mt-10 px-10 py-4 border uppercase rounded-full bg-[var(--primary-color)] border-none text-white font-semibold hover:opacity-90 hover:lg-shadow custom-shadow  text-1xl md:text-2xl'>¡reserva tu viaje ahora!</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero