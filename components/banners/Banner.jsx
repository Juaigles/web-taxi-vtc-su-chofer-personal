import React from 'react'
import {FaCar, FaMapMarkerAlt, FaMapSigns, FaMap, FaFlag, FaGlobe, FaPlane} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='bg-black text-white h-full md:h-96 flex items-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-[8%] w-full my-4'>
                <div className='flex flex-col justify-center items-center max-w-fit'>
                    <FaMap size={50} className='text-[var(--primary-color)]'  />
                    <h2 className='text-3xl my-4'>PROVINCIA</h2>
                    <p className='md:text-2xl mt-2'>En Su Chófer Personal prestamos servicio en toda la provincia de Salamanca.</p>
                </div>
                <div className='flex flex-col justify-center items-center max-w-fit my-2'>
                    <FaFlag size={50} className='text-[var(--primary-color)]' />
                    <h2 className='text-3xl my-4'>NACIONAL</h2>
                    <p className='md:text-2xl mt-2'>¿Necesita un conductor especialista a nivel nacional? Nosotros nos encargamos.</p>
                </div>
                <div className='flex flex-col justify-center items-center max-w-fit'>
                    <FaCar size={50} className='text-[var(--primary-color)]'/>
                    <h2 className='text-3xl my-4'>CHÓFER PERSONAL</h2>
                    <p className='md:text-2xl mt-2'>Contamos con un equipo de profesionales que disponen de una amplia experiencia. </p>
                </div>
            </div>
        </div>

    )
}

export default Banner