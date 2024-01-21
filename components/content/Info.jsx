import Link from 'next/link'
import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaMobile, FaFacebook } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Info = () => {
    return (
        <div className='w-full  text-slate-800 bg-slate-300'>
            <div className='p-8 text-[14px] md:text-[18xp] lg:text-2xl text-left md:text-center '>
                <p>Ofrecemos un servicio exclusivo de Taxi VTC con choferes privados especializados en eventos como  <span className='font-bold'>despedidas de soltero, rutas de vinos, viajes a Barajas.</span> Siempre ofreciendo la maxima profesionalidad.</p>
            </div>
            <div className='grid md:grid-cols-2 justify-center items-center pb-6 gap-8  text-center'>
                <div className='flex justify-end   items-center md:pl-8 font-semibold'>
                    <Link href="mailto:vtcsuchoferpersonal@gmail.com" className='flex gap-2 hover:text-[var(--secondary-color)]'><MdEmail size={20} />vtcsuchoferpersonal@gmail.com</Link>
                </div>
                <div className='flex justify-center items-center  md:pr-8'>
                   <Link href="tel:+34679551515" ><button className='flex  rounded bg-black text-white p-5 gap-2 hover:bg-[var(--secondary-color)]'><FaPhone size={20} />¡LLÁMENOS!</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Info