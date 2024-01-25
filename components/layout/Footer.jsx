import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, } from 'react-icons/fa';
import { MdPhone, MdEmail,} from 'react-icons/md';



const Footer = () => {
    return (
        <footer className='py-5 bg-[black] text-white pt-12'>
            <div className='grid  md:grid-cols-4 gap-4'>
                <div>
                    <Image
                        src="/logo.png"
                        alt='logo'
                        width={500}
                        height={500}
                    />
                </div>
                <address  className='ml-4 text-left md:text-2xl'>
                    <h2 className='my-2'>CONTACTE CON NOSOTROS</h2>
                    <ul className=''>

                        <li className='flex mb-2 '><span className='mr-4'>
                            <MdPhone size={30} aria-hidden="true" />
                        </span><Link href="tel:+34679551515" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>679 551 515</Link></li>
                        <li className='flex mb-2 '><span className='mr-4'>
                            <MdEmail size={30} aria-hidden="true"/>
                        </span><Link href="mailto:vtcsuchoferpersonal@gmail.com" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>vtcsuchoferpersonal@gmail.com</Link></li>
                        <li className='flex mb-2 '><span className='mr-4'>
                            <FaMapMarkerAlt size={30} aria-hidden="true"/>
                        </span>37003 Salamanca, Salamanca</li>
                    </ul>
                </address>
                <div className='ml-4 text-left md:text-2xl'>
                    <h2 className='my-2'>REDES SOCIALES</h2>
                    <div className='grid grid-cols-3 ' >
                        <Link href="https://wa.me/34679551515" className='mt-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>
                            <FaWhatsapp size={30} aria-hidden="true"/>
                        </Link>
                        <Link href="https://www.facebook.com/suchoferpersonal/" className='mt-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>
                            <FaFacebookF size={30} aria-hidden="true"/>
                        </Link>
                        <Link href="https://www.instagram.com/suchoferpersonal/" className='mt-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>
                            <FaInstagram size={30} aria-hidden="true"/>
                        </Link>

                    </div>
                </div>
                <div className='ml-4 text-left md:text-2xl'>
                    <h2 className='my-2'>ENLACES LEGALES</h2>
                    <div className='grid grid-rows-3'>
                        <Link href="/aviso-legal" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>Aviso Legal</Link>
                        <Link href="/politica-de-privacidad" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>Política de Privacidad</Link>
                        <Link href="/politica-de-cookies" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>Política de Cookies</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-between m-5'  >

                <p className='font-semibold text-1xl text-center text-[var(--secondary-color)]'>© 2024 SU CHÓFER PERSONAL Todos los derechos reservados.</p>
                <p>Producido por JDigital</p>
            </div>
        </footer>
    )
}

export default Footer