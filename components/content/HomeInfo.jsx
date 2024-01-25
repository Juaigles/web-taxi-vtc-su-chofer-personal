import Image from 'next/image'
import React from 'react'
import ObserverAnimations from '../layout/ObserverAnimations'

const HomeInfo = () => {
    return (
        <section className='bg-black text-white '>
            <div className='grid md:grid-cols-2 gap-4 px-10 py-20 md:mx-[8%] '>
                <article>
                    
                    <h2 className='font-semibold text-2xl border border-[var(--primary-color)] h-20 flex justify-center items-center text-[var(--primary-color)]'>LA EMPRESA</h2>
                    <ObserverAnimations animationType='fade-right'>

                    <div className='my-8'><Image src="/Anverso.png" width={800} height={500} className='w-full' alt='Imagen representativa de Su Chofer Personal' /></div>
                    </ObserverAnimations>
                </article>
                <aside>
                    <div className='flex flex-col justify-center items-center '>

                        <p className='text-justify md:text-2xl max-w-[600px]'>
                            ¡Bienvenido a <strong>Su Chófer Personal</strong>, donde cada viaje en Salamanca se convierte en una experiencia única! Ya sea que busques un servicio eficiente y económico para tus desplazamientos diarios o una solución de transporte para esos momentos especiales, lo tenemos todo. <br /><br />

                            Desde viajes rápidos hasta traslados aeropuertos, aventuras por carretera en una ruta de vinos, nuestro servicio VTC está diseñado para adaptarse a tus necesidades. ¿Vas a una boda, un concierto o un evento corporativo? Deja que te llevemos allí con estilo y comodidad. Y para esos momentos únicos, como despedidas de soltero, bodas, comuniones o viajes a destinos turísticos, te prometemos un viaje cómmodo y un trato profesional. <br /><br />

                            Nuestra flota es una mezcla de lujo y tecnología. Contamos con un FORD CUSTOM espaciosa, con asientos tipo limusina, perfecto para grupos o para eventos. Así como un Toyota Prius + hibrído de 7 plazas y un Mercedes CLA 180 <br /><br />

                            En definitiva, nuestra filosofía es que no solo importa llegar a tu destino; se trata de disfrutar el viaje. Con <strong>Su Chófer Personal</strong>, cada viaje es una oportunidad para relajarte, disfrutar o simplemente sumergirte en la comodidad de nuestros vehículos. Contáctanos y haz de tu próximo viaje una experiencia única.
                        </p>


                        <button className='bg-[var(--primary-color)] rounded-xl my-8  custom-shadow h-10 w-40 hover:bg-[var(--secondary-color)]' role='button'>RESERVA AHORA</button>

                    </div>
                </aside>
            </div>

        </section>

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