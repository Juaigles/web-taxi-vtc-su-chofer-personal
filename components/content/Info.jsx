import Link from 'next/link'
import React from 'react'
import { FaPhone, } from 'react-icons/fa';
import {  MdEmail } from 'react-icons/md';

const Info = () => {
    return (
        <section className='w-full  text-slate-800 bg-slate-300' role='información'>
            <div className='p-8 text-[14px] md:text-[18xp] lg:text-2xl text-left md:text-center '>
                <p>Ofrecemos un servicio exclusivo de Taxi VTC con choferes privados especializados en eventos como  <span className='font-bold'>despedidas de soltero, rutas de vinos, viajes a Barajas.</span> Siempre ofreciendo la maxima profesionalidad.</p>
            </div>
            <div className='grid md:grid-cols-2 justify-center items-center pb-6 gap-8  text-center'>
                <div className='flex justify-end   items-center md:pl-8 font-semibold'>
                    <Link href="mailto:vtcsuchoferpersonal@gmail.com" aria-label="Email de contacto" className='flex gap-2 hover:text-[var(--secondary-color)]'><MdEmail size={20} aria-hidden="true" />vtcsuchoferpersonal@gmail.com</Link>
                </div>
                <div className='flex justify-center items-center  md:pr-8'>
                   <Link href="tel:+34679551515" aria-label="Telefono de contacto" ><button className='flex  rounded bg-black text-white p-5 gap-2 hover:bg-[var(--secondary-color)]'><FaPhone size={20} aria-hidden="true" />¡LLÁMENOS!</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Info