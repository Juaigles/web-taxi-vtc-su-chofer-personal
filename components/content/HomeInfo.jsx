import Image from 'next/image'
import React from 'react'

const HomeInfo = () => {
    return (
        <div className='bg-black text-white '>
            <div className='grid md:grid-cols-2 gap-4 px-10 py-20 md:mx-[8%] '>
                <div>
                    <div>
                        <h2 className='font-semibold text-2xl border border-[var(--primary-color)] h-20 flex justify-center items-center text-[var(--primary-color)]'>LA EMPRESA</h2>
                    </div>
                    <div className=''>
                        <div className='my-8'><Image src="/Anverso.png" width={800} height={500} className='w-full' alt='Su Chofer Personal' /></div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center '>
                        <div >
                            <p className='text-justify md:text-2xl max-w-[600px]'>Conozca los servicios de chófer que ofrecemos en Su Chófer Personal, nuestra empresa en Salamanca. Prestamos servicio de transporte para viajes en la ciudad y nacionales de medio y largo recorrido. <br /><br />



                                En Su Chófer Personal también realizamos servicios en despedidas de solteros y en todo tipo de celebraciones. Prestamos servicio a empresas y a particulares. <br /><br />


                                Disponemos de un vehículo dotado de las mayores comodidades y que cuenta con 7 plazas más el conductor y asientos enfrentados tipo limusina. Trabajamos con una amplia variedad de agencias como Fenetravel en Galicia, Kierotravel, Ecobus, Elmantour. <br /><br />


                                Si está interesado en nuestros servicios, no dude en ponerse en contacto con nosotros. Le esperamos.</p></div>
                        <div>
                            <button className='bg-[var(--primary-color)] rounded-xl my-8  custom-shadow h-10 w-40 hover:bg-[var(--secondary-color)]'>RESERVA AHORA</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        //         <div className='bg-black text-white grid md:grid-cols-2'>

        //             <div className='mx-5 p-8'>
        //                 <div>
        //                     <h2 className='font-semibold text-2xl mt-10 border border-[var(--primary-color)] h-20 flex justify-center items-center text-[var(--primary-color)]'>LA EMPRESA</h2>

        //                 </div>
        //                 <div className=''>
        //                     <div className='my-8'><Image src="/furgoEspalda.webp" width={800} height={500} className='w-full' /></div>
        //                 </div>
        //             </div>
        //             <div className='flex flex-col justify-center items-center mx-4 border'>
        //                 <div >
        //                     <p className='text-center border'>Conozca los servicios de chófer que ofrecemos en Su Chófer Personal, nuestra empresa en Salamanca. Prestamos servicio de transporte para viajes en la ciudad y nacionales de medio y largo recorrido. <br /><br />



        // En Su Chófer Personal también realizamos servicios en despedidas de solteros y en todo tipo de celebraciones. Prestamos servicio a empresas y a particulares. <br /><br />


        // Disponemos de un vehículo dotado de las mayores comodidades y que cuenta con 7 plazas más el conductor y asientos enfrentados tipo limusina. Trabajamos con una amplia variedad de agencias como Fenetravel en Galicia, Kierotravel, Ecobus, Elmantour. <br /><br />


        // Si está interesado en nuestros servicios, no dude en ponerse en contacto con nosotros. Le esperamos.</p></div>
        //                 <div>
        //                     <button className='bg-[var(--primary-color)] rounded-xl my-8 custom-shadow h-10 w-40'>RESERVA AHORA</button>
        //                 </div>
        //             </div>

        //         </div>

    )
}

export default HomeInfo