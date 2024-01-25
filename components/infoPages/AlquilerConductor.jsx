import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa';

const AlquilerConductor = () => {
    return (
        <div>
            <section  className='mx-[4%] my-4 md:mx-[8%] '>
                <h2 className='my-10 font-bold text-2xl md:text-center'>Alquiler de coches con conductor</h2>
                <div className='text-justify '>


                    <div className='md:grid grid-cols-2 gap-10'>
                        <p className='my-4 md:my-0 '><Link href="/" className='text-[var(--secondary-color)] font-semibold'>En Su Chófer Personal</Link>, le ofrecemos el servicio de alquiler de coche con conductor en <strong>Salamanca</strong>, que es la ciudad en la que nos encontramos situados. <br /> Nuestro servicio elimina las preocupaciones de la conducción y el estacionamiento, permitiéndole relajarse y disfrutar plenamente del viaje hasta su destino. Con <strong>nosotros al volante</strong>, cada trayecto se convierte en una experiencia de comodidad y conveniencia, asegurando que llegue a su destino de manera segura y sin estrés.</p>

                        <p className='my-6 md:m-0 '>A través de este servicio no solo tendrá la oportunidad de descubrir la belleza de Salamanca, sino también de explorar numerosos destinos encantadores en la comodidad de nuestros vehículos. Ya sea que prefiera viajar solo o disfrutar de la compañía de su <strong>familia y amigos</strong>, aseguramos un entorno exclusivo y seguro para su travesía. Priorizamos su seguridad en todo momento: cada uno de nuestros coches pasa por <strong>revisiones regulares</strong> para garantizar un funcionamiento impecable y una experiencia de viaje sin preocupaciones.</p>
                    </div>

                    <h3 className='my-8 font-semibold text-2xl text-left '>Alquiler de coches para eventos</h3>
                    <div className='md:grid grid-cols-2 gap-10'>
                        <div>

                            <p className='my-4 '>Este servicio está especialmente diseñado para eventos memorables como bodas. Con vehículos que pueden acomodar hasta 7 personas, ofrecemos la opción perfecta para viajar junto con su familia o amigos en su día especial. Nos encargaremos de llevarle a todos los lugares importantes del evento, desde la iglesia o el ayuntamiento hasta el lugar del convite, la discoteca y, finalmente, de regreso a su hogar. Con <strong>Su Chófer Personal</strong>, cada detalle de su transporte estará cuidadosamente planificado para que su día sea tan perfecto como lo imaginó.</p>
                            <p className='my-6 '>El alquiler de coches para eventos es una alternativa para que nuestros clientes puedan acudir a su celebración, sin tener que preocuparse por conducir después.</p>
                        </div>
                        <div className='md:flex justify-center items-center'>
                            <div className='border-4 border-[var(--secondary-color)] md:flex h-1/2 justify-center items-center'>
                                <p className='text-semibold text-2xl text-center p-4'>Contrate tu servicio con nosotros y despreocúpese</p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section  className='bg-black text-white'>
                <div className='mx-8 p-10'>

                    <div className='md:grid grid-cols-2 gap-5  '>
                        <div className='flex flex-col justify-center items-center md:mx-[8%]'>
                            <h2 className='font-semibold text-2xl'>Alquiler de coche para empresas con conductor</h2>
                            <p className='my-6 text-justify'>Olvídese de la complicación de buscar coches de alquiler. Nosotros simplificamos su experiencia de transporte. Nuestra flota incluye vehículos espaciosos con capacidad de hasta 7 plazas, listos para adaptarse a cualquier requerimiento que tenga, asegurando comodidad y confort en todos sus viajes.</p>
                            <Link href="tel:+34679551515"><button className='flex rounded-lg bg-gray-400 text-black p-5 gap-2 hover:bg-[var(--secondary-color)]'><FaPhone size={20} />¡LLÁMENOS!</button></Link>
                        </div>
                        <div className='hidden md:block'>
                            <Image src="/furgoEspalda.webp" width={1200} height={700} alt='alquilerCoche' layout='responsive' />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AlquilerConductor