import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ObserverAnimations from "../layout/ObserverAnimations"


const services = [
    {
        href: "/vtc-salamanca",
        imgSrc: "/salamanca_catedral3.jpg",
        altText: "Servicio VTC en Salamanca",
        buttonText: "VTC"
    },
    {
        href: "/taxi-salamanca",
        imgSrc: "/salamanca_catedral.jpg",
        altText: "Servicio de Taxi en Salamanca",
        buttonText: "TAXI"
    },
    {
        href: "/alquiler-con-conductor",
        imgSrc: "/Salamanca_Catedral5.jpg",
        altText: "Alquiler de Vehículo con Conductor en Salamanca",
        buttonText: "ALQUILER CON CONDUCTOR"
    },
    {
        href: "/chofer-privado",
        imgSrc: "/salamanca_catedral4.jpg",
        altText: "Servicio de Chófer Privado en Salamanca",
        buttonText: "CHÓFER PRIVADO"
    }
];



const ServiceButtons = () => {
    return (
        <section className='text-center font-bold py-14 mx-[4%] md:mx-[8%]'>
            <div className='h-20 flex-col px-2 mb-4'>
                <h2 className='font-bold text-3xl'>VTC Salamanca - Servicios de chófer Salamanca</h2>
                <h3 className='text-2xl mt-2'>Nuestros servicios</h3>
            </div>
            <div className='grid xl:grid-cols-4 items-center justify-center mt-20 md:mx-4 gap-4'>
                {services.map((service, index) => (
                    
                    <ObserverAnimations animationType='jump-in' key={index}>
                    <Link key={index} href={service.href}>
                        <div className='w-full md:w-[90%] h-full border flex flex-col items-center justify-between custom-shadow py-4 hover:bg-orange-300 text-black text-center font-bold my-2 rounded'>
                        <div className='w-full h-full '>
                                <Image src={service.imgSrc} width={800} height={800} alt={service.altText}  className=''/>
                            </div>
                            <h3 className='font-bold py-4'>{service.buttonText}</h3>
                        </div>
                    </Link>
                    </ObserverAnimations>
                ))}
            </div>
        </section>
    )
}

export default ServiceButtons
