import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'

const PhotoBanner = () => {
  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center px-10'>
        <div className='grid grid-cols-1'>
          <div className='flex flex-col text-center justify-center items-center px-8 '>
            <h2 className='text-2xl'>
Contrate el servicio de chófer privado que le ofrecemos en Su Chófer Personal, nuestra empresa ubicada en Salamanca.</h2>
            <p className='my-10'>¡Llámenos y disfrute del viaje. Le esperamos!</p>
           <Link href="tel:+34679551515" ><button className='flex  rounded-lg bg-gray-400 text-black p-5 gap-2 hover:bg-[var(--secondary-color)]'><FaPhone size={20} />¡LLÁMENOS!</button></Link>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <Image src="/vehculo7.jpg" alt='coche' width={900} height={900} layout='responsive' className=''/>
        </div>
      </div>
    </div>
  )
}

export default PhotoBanner