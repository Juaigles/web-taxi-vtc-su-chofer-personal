import Image from 'next/image'
import React from 'react'


const ChoferPrivado = () => {
    return (
        <div >
            <div className='mx-[4%] md:mx-[8%] my-8'>
                <div className='md:my-5'>
                    <h2 className='my-[4] text-2xl  font-semibold'>Chófer privado</h2>
                </div>
                <div className='my-4 md:m-0'>
                    <p className='text-justify'>El servicio de chófer privado también lo prestamos en Su Chófer Personal, nuestra empresa en Salamanca. Consiste en que pueda disponer de nosotros siempre que lo necesite. Trabajamos como chófer privado para ejecutivos, chófer privado para empresas, chófer privado para particulares y como chófer para traslados al aeropuerto de Madrid (a continuación explicamos las diferencias de cada uno de estos servicios). Siempre somos puntuales, ya que somos muy conscientes de lo importante que es para usted el tiempo.</p>
                    <Image src="/triomercedes2.webp" width={200} height={200} alt='trioMercedes' layout='responsive' className='my-10' />
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div >
                        <h3 className='font-semibold text-2xl'>Chófer privado para ejecutivos y empresas</h3>
                        <div className='text-justify'>
                            <p className='my-8'>Es un tipo de servicio que ofrecemos de manera más exclusiva y más personalizada. Recogemos a los clientes donde nos indiquen y los llevamos al aeropuerto o a la estación de tren o autobuses, hacemos traslados por la ciudad e, incluso, damos la oportunidad de que contraten nuestro servicio por horas.</p>
                            <p className='my-10'>En estas circunstancia, usted contará con un chófer privado solo y exclusivamente para usted. No tendrá que compartirlo con nadie más y permanecerá a su lado para los trayectos el tiempo que necesite. También cubrimos todo tipo de eventos, congresos y ferias.</p>
                            <p className='my-8'>Como bien sabe estamos en Salamanca aunque nos movemos a nivel nacional. La puntualidad es una de nuestras señas de identidad y que respetamos siempre.</p>
                        </div>
                    </div>
                    <div >
                        <h3 className='font-semibold text-2xl'>Chófer privado para particulares</h3>
                        <div className='text-justify'>
                            <p className='my-8'>Este servicio está especialmente recomendado para todas aquellas personas que necesitan llegar a tiempo a su destino. Se trata de una manera cómoda de hacerlo, ya que no tendrá que preocuparse de tener que aparcar el coche.</p>
                            <p className='my-8'>Disponemos de un equipo de conductores profesionales especializados que serán los encargados de llevarle donde indique.</p>
                            <p className='my-8'>Para prestar este tipo de servicios disponemos de un vehículo, en el que su trayecto será de lo más cómodo que pueda esperar.</p>
                        </div>
                    </div>
                    <div >
                        <h3 className='font-semibold text-2xl'>Chófer para traslados al aeropuerto de Madrid</h3>
                        <div className='text-justify'>

                            <p className='my-8'>Llevamos a nuestros clientes desde el lugar que nos indiquen hasta el aeropuerto. ¿Tiene previsto viajar? Llámenos si quiere estar en hora y no perder el avión. Este viaje lo hará usted solo o junto su familia o amigos con la compañía de su chófer y siempre en un vehículo cómodo y en el cual pueda llevar todas sus maletas y demás pertenencias consigo mismo, ya que disponemos de un vehículo de máxma capacidad</p>
                            <p className='my-8'>Contrátenos. No solo ofrecemos comodidad, también seguridad y un buen trato en todos nuestros servicios.</p>
                        </div>
                    </div>
                    <div >
                        <Image src="/furgoEspalda.webp" width={900} height={700} alt='furgonetaTaxi' layout='responsive' className='md:p-2' />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default ChoferPrivado



