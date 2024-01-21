import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa';

const AlquilerConductor = () => {
    return (
        <div>
            <div className='mx-[4%] my-4 md:mx-[8%] '>
                <h2 className='my-10 font-bold text-2xl md:text-center'>Alquiler de coches con conductor</h2>
                <div className='text-justify '>


                    <div className='md:grid grid-cols-2 gap-10'>
                        <p className='my-4 md:my-0 '><Link href="/" className='text-[var(--secondary-color)] font-semibold'>En Su Chófer Personal</Link>, le ofrecemos el servicio de alquiler de coche con conductor en <strong>Salamanca</strong>, que es la ciudad en la que nos encontramos situados. La ventaja que presenta es que usted no tendrá que preocuparse por conducir ni aparcar el coche, para eso ya está el <strong>chófer</strong>. Para que usted puede disfrutar del viaje hasta llegar a su destino.</p>

                        <p className='my-6 md:m-0 '>A través de este servicio también podrá conocer la ciudad y otros muchos lugares y lo hará en uno de nuestros coches. Puede viajar solo o acompañado de familia y amigos pero no de otras personas ajenas a usted. Es una manera de disfrutar el viaje con <strong>total seguridad</strong> ya que, como bien sabe, todos nuestros coches pasan sus pertinentes revisiones con el fin de poder asegurar que no tienen problemas de funcionamiento.</p>
                    </div>

                    <h3 className='my-8 font-semibold text-2xl text-left '>Alquiler de coches para eventos</h3>
                    <div className='md:grid grid-cols-2 gap-10'>
                        <div>

                            <p className='my-4 '>Este servicio lo hemos pensando para, por ejemplo, bodas. En este caso, como los vehículos son de hasta 7 personas, puede alquilar el suyo junto con su familia o amigos. Le llevaremos a todos los sitios que quiera: iglesia o ayuntamiento, lugar donde se celebre el convite, discoteca, hasta su propia casa, etc.</p>
                            <p className='my-6 '>El alquiler de coches para eventos es una alternativa para que nuestros clientes puedan acudir a su celebración, sin tener que preocuparse por conducir después.</p>
                        </div>
                        <div className='md:flex justify-center items-center'>
                            <div className='border-4 border-[var(--secondary-color)] md:flex h-1/2 justify-center items-center'>
                                <p className='text-semibold text-2xl text-center p-4'>Contrate tu servicio con nosotros y despreocúpese</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className='bg-black text-white'>
                <div className='mx-8 p-10'>

                    <div className='md:grid grid-cols-2 gap-5  '>
                        <div className='flex flex-col justify-center items-center md:mx-[8%]'>
                            <h2 className='font-semibold text-2xl'>Alquiler de coche para empresas con conductor</h2>
                            <p className='my-6 text-justify'>Este servicio es muy similar al anterior, la diferencia está en que hacen uso de él las empresas en vez de los particulares. No piense en buscar coches de alquiler. Piense solo en ponerse en contacto con nosotros y en contarnos lo que necesita. Tenemos vehículos de hasta 7 plazas.</p>
                            <Link href="tel:+34679551515"><button className='flex rounded-lg bg-gray-400 text-black p-5 gap-2 hover:bg-[var(--secondary-color)]'><FaPhone size={20} />¡LLÁMENOS!</button></Link>
                        </div>
                        <div className='hidden md:block'>
                            <Image src="/furgoEspalda.webp" width={1200} height={700} alt='alquilerCoche' layout='responsive' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AlquilerConductor