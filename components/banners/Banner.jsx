import React from 'react'
import {FaCar, FaMapMarkerAlt, FaMapSigns, FaMap, FaFlag, FaGlobe, FaPlane} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='bg-black text-white h-full md:h-96 flex items-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-[8%] w-full my-4'>
                <article className='flex flex-col justify-center items-center max-w-fit'>
                    <FaMap size={50} aria-hidden="true" className='text-[var(--primary-color)]'  />
                    <h2 className='text-3xl my-4'>PROVINCIA</h2>
                    <p className='md:text-2xl mt-2'>En Su Chófer Personal prestamos servicio en toda la provincia de Salamanca.</p>
                </article>
                <article className='flex flex-col justify-center items-center max-w-fit my-2'>
                    <FaFlag size={50} aria-hidden="true" className='text-[var(--primary-color)]' />
                    <h2 className='text-3xl my-4'>NACIONAL</h2>
                    <p className='md:text-2xl mt-2'>¿Necesita un conductor experto a nivel nacional? Nosotros nos encargamos de ello.</p>
                </article>
                <article className='flex flex-col justify-center items-center max-w-fit'>
                    <FaCar size={50} aria-hidden="true" className='text-[var(--primary-color)]'/>
                    <h2 className='text-3xl my-4'>CHÓFER PERSONAL</h2>
                    <p className='md:text-2xl mt-2'>Equipo de profesionales con mas de 20 años de experiencia a tu servicio. </p>
                </article>
            </div>
        </div>

    )
}

export default Banner