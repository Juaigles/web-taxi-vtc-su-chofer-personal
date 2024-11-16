import Image from 'next/image'
import React from 'react'


const ChoferPrivado = () => {
    return (
        <div >
            <section  className='mx-[4%] md:mx-[8%] my-8'>
                <div className='md:my-5'>
                    <h2 className='my-[4] text-3xl  font-semibold'>Chófer privado</h2>
                </div>
                <div className='my-4 md:m-0 text-2xl'>
                    <p className='text-justify'>El servicio de chófer privado también lo prestamos en Su Chófer Personal, nuestra empresa en Salamanca. Consiste en que pueda disponer de nosotros siempre que lo necesite. Trabajamos como chófer privado para ejecutivos, chófer privado para empresas, chófer privado para particulares y como chófer para traslados al aeropuerto de Madrid (a continuación explicamos las diferencias de cada uno de estos servicios). Siempre somos puntuales, ya que somos muy conscientes de lo importante que es para usted el tiempo.</p>
                </div>
                <div className='flex justify-center'>
                    <Image src="/mercedesPlaza.webp" width={1000} height={200} alt='trioMercedes'  className='my-10' />

                </div>

                <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div >
                        <h3 className='font-semibold text-3xl'>Chófer privado para ejecutivos y empresas</h3>
                        <div className='text-justify text-2xl'>
                            <p className='my-8'>Nuestro servicio se distingue por su exclusividad y personalización. Nos adaptamos a sus necesidades: lo recogemos en la ubicación que nos indique y le proporcionamos traslados eficientes al aeropuerto, estación de tren o autobuses. Además, ofrecemos recorridos personalizados por la ciudad y la flexibilidad de contratar nuestros servicios por horas. Con nosotros, cada trayecto está diseñado para adaptarse perfectamente a su agenda y preferencias.</p>
                            <p className='my-10'>En estas circunstancias, le ofrecemos la exclusividad de un chófer privado dedicado únicamente a usted. Disfrute de la privacidad y la comodidad de no tener que compartir su viaje, con la garantía de que su chófer estará a su completa disposición durante el tiempo que requiera. Además, nos especializamos en proporcionar transporte elegante para una variedad de eventos, incluyendo congresos y ferias, asegurando que su experiencia sea tan profesional como placentera.</p>
                            <p className='my-8'>Como bien sabe estamos en Salamanca aunque nos movemos a nivel nacional. La puntualidad es una de nuestras señas de identidad y que respetamos siempre.</p>
                        </div>
                    </div>
                    <div >
                        <h3 className='font-semibold text-3xl'>Chófer privado para particulares</h3>
                        <div className='text-justify text-2xl'>
                            <p className='my-8'>Este servicio está especialmente recomendado para todas aquellas personas que necesitan llegar a tiempo a su destino. Se trata de una manera cómoda de hacerlo, ya que no tendrá que preocuparse de tener que aparcar el coche.</p>
                            <p className='my-8'>Disponemos de un equipo de conductores profesionales especializados que serán los encargados de llevarle donde indique.</p>
                            <p className='my-8'>Para prestar este tipo de servicios disponemos de un vehículo, en el que su trayecto será de lo más cómodo que pueda esperar.</p>
                        </div>
                    </div>
                    <div >
                        <h3 className='font-semibold text-3xl'>Chófer para traslados al aeropuerto de Madrid</h3>
                        <div className='text-justify text-2xl'>

                            <p className='my-8'>En <strong>Su Chófer Personal</strong>, nos encargamos de transportar a nuestros clientes desde cualquier ubicación hasta el aeropuerto con puntualidad y eficiencia. Si planea viajar y desea asegurarse de llegar a tiempo para su vuelo, no dude en contactarnos.</p>
                            <p className='my-8'>Contrátenos. No solo ofrecemos comodidad, también seguridad y un buen trato en todos nuestros servicios.</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/furgoEspalda.webp" width={900} height={700} alt='furgonetaTaxi'  className='md:p-2' />
                    </div>
                </div>
            </section>

        </div>


    )
}

export default ChoferPrivado



