import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TransferSalamanca = () => {
    return (
        <div className='mx-[4%] md:mx-[8%] '>
            <h2 className='mt-10 font-semibold text-2xl'>Servicio de transfer privado desde Salamanca a nivel nacional</h2>
            <div className='text-justify'>
                <p className='my-5'>En <Link href="/" className='text-[var(--secondary-color)] font-semibold'>Su Chófer Personal</Link>, nuestra empresa en <strong>Salamanca</strong>, no solo ofrecemos un <strong>servicio VTC</strong>, sino también servicio de transfer. Estamos <strong>disponible las 24 horas</strong>, es decir, todos nuestros clientes pueden contar con nosotros a cualquier hora y en cualquier día que ahí estaremos. Podemos llevarle a múltiples destinos. Contacte con nosotros para definir el viaje.</p>
                <p className='my-5'>Toda nuestra labor la ofrecemos tanto a las personas particulares como a las empresas. Disponemos de <strong>vehículos de hasta 7 plazas</strong> para que puedan viajar tanto usted como su compañía sin problema alguno. Todos los coches que tenemos son de gran capacidad para que sus trayectos sean lo más cómodos posibles. Además, también llevamos a cabo traslados cortos o viajes de mayor distancia. Usted elige. Díganos qué es lo que necesita y así haremos.</p>
               

                    <Image src="/rafaChofer2.jpg" width={800} height={700} layout='responsive' alt='transfer' className='my-10' />
               
                <h3 className='mt-6 font-semibold text-2xl'>¿Por qué elegirnos como su servicio de transfer en Salamanca?</h3>
                <p className='my-5'>En la ciudad de Salamanca, contar con un servicio de transporte confiable y eficiente es esencial para los residentes y visitantes por igual. Y es aquí donde entra en juego el servicio de transfer en VTC de Rafael Iglesias.

                    Rafael Iglesias es un conductor de VTC (vehículo de transporte con conductor) experimentado y profesional, que ha estado ofreciendo servicios de traslado en Salamanca durante varios años. Su enfoque se centra en brindar un servicio de alta calidad a sus clientes, lo que significa que siempre está dispuesto a ir más allá para garantizar que sus necesidades de transporte se satisfagan completamente.

                    El servicio de transfer de Rafael Iglesias es perfecto para aquellos que buscan un servicio de transporte confiable y personalizado. Ya sea que necesite trasladarse desde el aeropuerto de Salamanca a su hotel o viceversa, o que necesite transporte para un evento especial, Rafael estará allí para ayudarlo. Su flota de vehículos incluye una amplia variedad de opciones, desde sedanes hasta SUV, lo que significa que puede adaptarse a cualquier necesidad de transporte.

                    Además, Rafael Iglesias se asegura de que su servicio sea asequible y transparente. Sus tarifas son competitivas y no hay cargos ocultos adicionales. Incluso ofrece una tarifa fija para traslados desde el aeropuerto, lo que significa que no hay sorpresas en la factura final.

                    Por último, pero no menos importante, Rafael Iglesias es un conductor profesional con una sólida reputación en la ciudad de Salamanca. Es amable, cortés y siempre se asegura de que sus clientes se sientan cómodos y seguros durante todo el viaje.

                    En resumen, si busca un servicio de transfer confiable y eficiente en Salamanca, no busque más allá del servicio de Rafael Iglesias. Con su flota de vehículos de alta calidad, tarifas asequibles y servicio personalizado, puede estar seguro de que estará en buenas manos.

                    Nuestra máxima prioridad en el día a día es que los clientes realmente se sientan bien y vaya cómodos. No importa si el trayecto es largo o más corto, queremos siempre su satisfacción. Para ello contamos con conductores profesionales y muy experimentados en el transporte de pasajeros. En ese sentido puede estar muy tranquilo.</p>
                <p className='my-10'>Otro punto que también cuidamos mucho es el estado de conservación de toda nuestra flota de vehículos. La revisamos con regularidad y, como ya hemos indicado anteriormente, todos nuestros coches son modernos y confortables. Esto lo hacemos así con el fin de poder asegurar su buen funcionamiento y para reducir, lo máximo posible, la aparición de cualquier problema. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>¡Conózcanos!</Link></p>
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

export default TransferSalamanca