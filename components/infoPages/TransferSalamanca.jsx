import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TransferSalamanca = () => {
    return (
        <div className=' '>
            
            <div className='mx-[4%] md:mx-[8%]'>

            
            <h2 className='mt-10 font-semibold text-3xl'>Servicio de transfer privado desde Salamanca a nivel nacional</h2>
            <section className='text-justify text-2xl'>
                <p className='my-5'>En <Link href="/" className='text-[var(--secondary-color)] font-semibold'>Su Chófer Personal</Link>, nuestra empresa en <strong>Salamanca</strong>, no solo ofrecemos un <strong>servicio VTC</strong>, sino también servicio de transfer. Estamos <strong>disponible las 24 horas</strong>,todos los días, garantizamos nuestra presencia siempre que nos necesite. No importa el destino, estamos preparados para llevarle a donde necesite ir, adaptándonos a sus horarios y preferencias. Para planificar su viaje perfecto, solo tiene que ponerse en contacto con nosotros.</p>
                <p className='my-5'>Toda nuestra labor la ofrecemos tanto a las personas particulares como a las empresas. Disponemos de <strong>vehículos de hasta 7 plazas</strong> para que puedan viajar tanto usted como su compañía sin problema alguno. Todos los coches que tenemos son de gran capacidad para que sus trayectos sean lo más cómodos posibles. Además, también llevamos a cabo traslados cortos o viajes de mayor distancia. Usted elige. Díganos qué es lo que necesita y así haremos.</p>

<div className='flex justify-center'>

                <Image src="/rafaChofer2.jpg" width={800} height={700}  alt='transfer' className='my-10' />
</div>

                <h3 className='mt-6 font-semibold text-2xl text-left'>¿Por qué elegirnos como su servicio de transfer en Salamanca?</h3>
                <p className='my-5'>En el corazón de Salamanca, un servicio de transporte confiable y de alta calidad es una necesidad tanto para los residentes como para los visitantes. Aquí es donde Rafael Iglesias, con su sobresaliente servicio de VTC (vehículo de transporte con conductor), marca la diferencia. <br /><br />

                    Rafael Iglesias, un conductor experimentado y dedicado, ha estado al frente de ofrecer servicios de transfer excepcionales en Salamanca durante años. Su compromiso no es solo cumplir, sino superar las expectativas de sus clientes, asegurándose de que cada aspecto de sus necesidades de transporte sea atendido con la mayor atención.

                    Ya sea que necesite un traslado eficiente desde el aeropuerto de Salamanca a su hotel, o un transporte elegante para un evento especial, puede contar con la profesionalidad de Rafael. <br /> Su flota diversa, que incluye desde un monovolumen FORD custom, un Toyota Prius + y un Mercedes CLA 180, está perfectamente equipada para adaptarse a cualquier requerimiento.

                    Rafael Iglesias también se destaca por su transparencia y asequibilidad. Ofrece tarifas competitivas y claras, eliminando la preocupación de cargos ocultos, con una <strong>tarifa fija</strong> para traslados desde y hacia el aeropuerto, garantizando así una total claridad en los costos. <br /><br />

                    Además, Rafael es conocido en Salamanca por su cordialidad y profesionalismo. Se dedica a crear un ambiente en el que los clientes se sientan relajados, seguros y bien atendidos en cada viaje.

                    En resumen, si está en busca de un servicio de transfer en Salamanca que combine fiabilidad, calidad y una atención personalizada, el servicio de Rafael Iglesias es su mejor elección. Con vehículos de primer nivel, precios justos y un servicio al cliente insuperable, cada viaje promete ser una experiencia placentera y satisfactoria.</p>
                <p className='my-10'>Otro punto que también cuidamos mucho es el estado de conservación de toda nuestra flota de vehículos. La revisamos con regularidad y, como ya hemos indicado anteriormente, todos nuestros coches son modernos y confortables. Esto lo hacemos así con el fin de poder asegurar su buen funcionamiento y para reducir, lo máximo posible, la aparición de cualquier problema. <Link href="/" className='text-[var(--secondary-color)] font-semibold'>¡Conózcanos!</Link></p>
            </section>
            <div className='flex justify-center'>
            <Image src="/fordPlaza.webp" width={800} height={700}  alt='transfer' className='my-10 ' />

            </div>

            </div>
            <section className=' flex justify-start items-center avion'>
               
                 
                <div className='bg-black m-24 h-[60vh] w-[47vw]  text-white flex flex-col items-center justify-center text-left font-semibold text-2xl'>

                    <div className='mx-6 pb-4'>
                        <p>Descubra nuestro servicio de taxi de Su Chófer Personal</p>
                    </div>
                    <div className='mx-5 pt-4'>
                        <p>Llame al 679 551 515</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default TransferSalamanca