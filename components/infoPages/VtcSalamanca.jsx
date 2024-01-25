import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VtcSalamanca = () => {
    return (
        <div className='mx-[4%] md:mx-[8%]'>
            <section className='mb-10'>
                <article>
                    <h2 className='font-bold text-2xl my-10 md:mb-5 '>Su Chófer Personal - Nuestro servicio de VTC</h2>
                    <div className='text-justify md:grid md:grid-cols-2 md:gap-10'>
                        <p className='my-10 md:mt-5'><Link href="/" className='text-[var(--secondary-color)] font-semibold'>Su Chófer Personal</Link>, con sede en <strong>Salamanca</strong>, nos dedicamos a proporcionar un servicio VTC distinguido y de alta calidad. Contamos con chóferes personales experimentados y profesionales, comprometidos a asegurar su comodidad y puntualidad en cada viaje. Ya sea para desplazamientos dentro de la ciudad o para viajes nacionales e interprovinciales, estamos a su disposición para atender sus requerimientos de transporte con la mayor eficiencia y discreción</p>
                        <p className='my-10 md:mt-5'>En <strong>Su Chófer Personal</strong>, nos distinguimos como especialistas en servicios de taxi, proporcionando vehículos de turismo con conductor de la más alta calidad. Nuestro equipo, integrado por profesionales con vasta experiencia en el sector, se dedica a ofrecer un servicio excepcional, garantizando seguridad, comodidad y eficiencia en cada trayecto.</p>
                    </div>
                </article>
                <article>
                    <h2 className='font-bold text-2xl my-10 md:my-4'>¿Por qué elegir su servicio de taxi en Salamanca?</h2>
                    <div className='text-justify md:grid md:grid-cols-2 md:gap-10'>
                        <div className=''>
                            <p className='my-10 md:mt-4'>Gracias a nuestras licencias de <strong>VTC</strong>, en <strong>Su Chófer Personal</strong> tenemos la capacidad de abarcar todo el territorio nacional, lo que nos permite ofrecer servicios tanto urbanos como interurbanos. Sin importar su punto de partida o destino, garantizamos un servicio excepcional y adaptado a sus necesidades, siempre con la condición de que nuestros vehículos se reserven con antelación.</p>
                            <p className='my-10 md:my-4'>Nuestra empresa garantiza sus viajes con cobertura ilimitada ante cualquier suceso.</p>
                            <p className='my-10 '>En <strong>Su Chófer Personal</strong> disponemos de vehículos dotados del máximo confort y con gran capacidad de hasta 8 plazas incluido el conductor, y con una vida de no más de 4 años. Estamos autorizados a prestar nuestros servicios en todo el territorio nacional.</p>
                        </div>
                        <div className=''>
                            <p className='my-10 md:mt-4'>Nuestro mejor aval es la calidad de nuestros servicios, puntualidad, amabilidad y discreción que nos hacen ser una empresa de referencia en el sector del transporte de viajeros en turismos.</p>
                            <p className='my-10  '>Si está interesado en nuestros servicios, no dude en ponerse en contacto con nosotros a través de nuestro número de teléfono,Whatsapp, formulario o visitándonos en Salamanca. Somos profesionales con experiencia y compromiso con lo que hacemos. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>Contacte con nosotros</Link>.</p>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <Image src='/mercedes.webp' width={1280} height={900} layout='responsive' alt='mercedes' className='md:px-4' />

                <Link href="tel:+34679551515" className='md:flex md:items-center md:justify-center' >  <div className='font-semibold bg-[#252525] text-white md:w-[85%] my-12 md:my-20 '>
                    <p className=' px-8 py-6 text-center leading-none md:px-2 md:m-0 md:py-6'>PÓNGASE EN CONTACTO CON NOSOTROS A TRAVÉS DE NUESTRO NÚMERO DE TELÉFONO 679 551 515</p>
                </div></Link>
            </section>
        </div>

        
    )
}

export default VtcSalamanca