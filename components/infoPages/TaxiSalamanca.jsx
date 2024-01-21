import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TaxiSalamanca = () => {
    return (
        <div className='mx-[4%] md:mx-[8%] my-4 text-justify'>
            <div >
                <h2 className='my-8 font-semibold text-2xl'>Servicio de taxi</h2>
                <p className='my-4'><Link href="/" className='text-[var(--secondary-color)] font-semibold'>En Su Chófer Personal</Link>, nuestra empresa en <strong>Salamanca</strong>, no solo ofrecemos un <strong>servicio VTC</strong>, sino también servicio de taxi. Estamos <strong>disponible las 24 horas</strong>, es decir, todos nuestros clientes pueden contar con nosotros a cualquier hora y en cualquier día que ahí estaremos. Podemos llevarle a múltiples destinos. Escoja el servicio que mejor le convenga.</p>
                <p className='my-6'>Toda nuestra labor la ofrecemos tanto a las personas particulares como a las empresas. Disponemos de <strong>vehículos de hasta 7 plazas</strong> para que puedan viajar tanto usted como su compañía sin problema alguno. Todos los coches que tenemos son de gran capacidad para que sus trayectos sean lo más cómodos posibles. Además, también llevamos a cabo traslados cortos o viajes de mayor distancia. Usted elige. Díganos qué es lo que necesita y así haremos.</p>
                <h3 className='my-8 font-semibold text-2xl'>¿Por qué elegirnos como su servicio de taxi en Salamanca?</h3>
                <p className='my-4'>Nuestra máxima prioridad en el día a día es que los clientes realmente se sientan bien y vaya cómodos. No importa si el trayecto es largo o más corto, queremos siempre su satisfacción. Para ello contamos con conductores profesionales y muy experimentados en el transporte de pasajeros. En ese sentido puede estar muy tranquilo.</p>
                <p className='my-6'>Otro punto que también cuidamos mucho es el estado de conservación de toda nuestra flota de vehículos. La revisamos con regularidad y, como ya hemos indicado anteriormente, todos nuestros coches son modernos y confortables. Esto lo hacemos así con el fin de poder asegurar su buen funcionamiento y para reducir, lo máximo posible, la aparición de cualquier problema. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>¡Conózcanos!</Link></p>
                <Image src="/triomercedes.webp" width={800} height={800} alt='taxiSalamanca' layout='responsive' className='' />
            </div>
            <div className='bg-black m-4 h-[60vh] w-[47vw] text-white flex flex-col items-center justify-center text-left font-semibold text-2xl'>
                <div className='mx-6 pb-4'>
                    <p>Conozca nuestro servicio de taxi de Su Chófer Personal</p>
                </div>
                <div className='mx-5 pt-4'>
                    <p>Llame al 679 551 515</p>

                </div>
            </div>
        </div>
    )
}

export default TaxiSalamanca