import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VtcSalamanca = () => {
    return (
        <div className='mx-[4%] md:mx-[8%]'>
            <div className='mb-10'>
                <div>
                    <h2 className='font-bold text-2xl my-10 md:mb-5 '>Su Chófer Personal - Nuestro servicio de VTC</h2>
                    <div className='text-justify md:grid md:grid-cols-2 md:gap-10'>
                        <p className='my-10 md:mt-5'><Link href="/" className='text-[var(--secondary-color)] font-semibold'>Su Chófer Personal</Link> prestamos un servicio de VTC en <strong>Salamanca</strong>, que es donde nos encontramos ubicados. Con nosotros contará con un chófer personal que le llevará al sitio que necesita y cuando lo pida. Si necesita un viaje nacional o interprovincial, consúltenos.</p>
                        <p className='my-10 md:mt-5'>En <strong>Su Chófer Personal</strong> somos especialistas en servicios de taxi, que son vehículos de turismo con conductor. Nuestro equipo de profesionales cuenta con una amplia experiencia en el sector.</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl my-10 md:my-4'>¿Por qué elegir su servicio de taxi en Salamanca?</h2>
                    <div className='text-justify md:grid md:grid-cols-2 md:gap-10'>
                        <div className=''>
                            <p className='my-10 md:mt-4'>Con la licencias de <strong>VTC</strong> cubrimos todo el territorio nacional, por eso podemos prestar un servicio urbano e interurbano independientemente de la procedencia del cliente o el lugar de destino, ya que nuestros vehículos se han debido de contratar anteriormente.</p>
                            <p className='my-10 md:my-4'>Nuestra empresa garantiza sus viajes con cobertura ilimitada ante cualquier suceso.</p>
                            <p className='my-10 '>En <strong>Su Chófer Personal</strong> disponemos de vehículos dotados del máximo confort y con gran capacidad de hasta 8 plazas incluido el conductor, y con una vida de no más de 4 años. Estamos autorizados a prestar nuestros servicios en todo el territorio nacional.</p>
                        </div>
                        <div className=''>
                            <p className='my-10 md:mt-4'>Nuestro mejor aval es la calidad de nuestros servicios, puntualidad, amabilidad y discreción que nos hacen ser una empresa de referencia en el sector del transporte de viajeros en turismos.</p>
                            <p className='my-10  '>Si está interesado en nuestros servicios, no dude en ponerse en contacto con nosotros a través de nuestro número de teléfono,Whatsapp, formulario o visitándonos en Salamanca. Somos profesionales con experiencia y compromiso con lo que hacemos. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>Contacte con nosotros</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src='/mercedes.webp' width={1280} height={900} layout='responsive' alt='mercedes' className='md:px-4' />

                <Link href="tel:+34679551515" className='md:flex md:items-center md:justify-center' >  <div className='font-semibold bg-[#252525] text-white md:w-[85%] my-12 md:my-20 '>
                    <p className=' px-8 py-6 text-center leading-none md:px-2 md:m-0 md:py-6'>PUEDE PONERSE EN CONTACTO CON NOSOTROS A TRAVÉS DE NUESTRO NÚMERO DE TELÉFONO 679 551 515</p>
                </div></Link>
            </div>
        </div>

        
    )
}

export default VtcSalamanca