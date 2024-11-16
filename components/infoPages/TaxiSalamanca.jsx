import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TaxiSalamanca = () => {
    return (
        <div className='mx-[4%] md:mx-[8%] my-4 text-justify'>
            <section >
                <h2 className='my-8 font-semibold text-4xl'>Servicio de taxi</h2>
                <div className='text-2xl'>

                <p className='my-4'><Link href="/" className='text-[var(--secondary-color)] font-semibold'>En Su Chófer Personal</Link>,  brindamos también un servicio de taxi de primera clase en <strong>Salamanca</strong>. Disponibles las 24 horas del día, todos los días, estamos siempre listos para atender a nuestros clientes en cualquier momento que lo requieran. Ya sea que necesite transporte a varios destinos o un viaje específico, puede confiar en nosotros para encontrar la opción de transporte que mejor se ajuste a sus necesidades.</p>
                <p className='my-6'>En <strong>Su Chófer Personal</strong>, ofrecemos nuestros servicios tanto a clientes individuales como a empresas. Nuestra flota incluye vehículos <strong> espaciosos de hasta 7 plazas</strong>, asegurando un viaje confortable tanto para usted como para sus acompañantes. Cada uno de nuestros coches está diseñado para proporcionar el máximo confort en sus desplazamientos, ya sea en trayectos cortos o en viajes más largos. Usted tiene el control: díganos sus necesidades de transporte y nosotros nos encargaremos de cumplirlas a la perfección.</p>
                <h3 className='my-8 font-semibold text-2xl'>¿Por qué elegirnos como su servicio de taxi en Salamanca?</h3>
                <p className='my-4'>Nuestra principal prioridad es asegurar el bienestar y la comodidad de nuestros clientes en cada viaje. Por eso contamos con un equipo de conductores altamente profesionales y experimentados en el transporte de pasajeros, garantizando así no solo un viaje seguro, sino también una experiencia de viaje excepcionalmente agradable y tranquila.</p>
                <p className='my-6'>En <strong>Su Chófer Personal</strong>, prestamos especial atención al mantenimiento y estado óptimo de nuestra flota. Realizamos revisiones regulares para garantizar que cada uno de nuestros vehículos no solo se mantenga a la vanguardia en términos de modernidad y confort, sino que también funcione a la perfección. Este compromiso con la calidad y la fiabilidad es parte esencial de nuestro servicio, minimizando cualquier inconveniente durante su viaje. ¡Descubra la diferencia con nosotros. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>¡Conózcanos!</Link></p>
                </div>
                <Image src="/triomercedes.webp" width={800} height={800} alt='taxiSalamanca' />
            </section>
            <section className='bg-black m-4 h-[60vh] w-[47vw] text-white flex flex-col items-center justify-center text-left font-semibold text-2xl'>
                <div className='mx-6 pb-4'>
                    <>Descubra nuestro servicio de taxi de Su Chófer Personal</>
                </div>
                <div className='mx-5 pt-4'>
                    <p>Llame al 679 551 515</p>

                </div>
            </section>
        </div>
    )
}

export default TaxiSalamanca