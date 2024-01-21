import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link'
import Banner from "./Banner";
import Image from "next/image";

const Featured = () => {
    return (
        <div className="bg-gray-100 ">
            <div className='grid grid-cols-1 md:grid-cols-10 md:gap-2 mt-8" '>
                <div className='md:col-span-10 text-center mt-5 mx-4 '>
                    <h2 className="text-center m-auto text-3xl font-bold">Servicios TAXI-VTC</h2>
                    <h3 className='text-black py-4 text-1xl font-bold lg:text-3xl text-center md:text-center md:ml-0'>Mas de 20 años de experiencia como taxista en Salamanca</h3>
                    <Image src="/salamancaPuente.jpg" width={700} height={400} alt="salamancaPuente"  className="w-full h-1/2 object-cover" />
                    <div className="mx-4 md:mx-8 py-4">
                        <span className='font-bold text-1xl md:text-3xl text-center text-[#555]'>SERVICIOS EN SALAMANCA:</span>
                        <p className=' uppercase py-3 font-bold text-1xl text-center md:text-3xl md:text-center md:ml-0'>Ofrecemos todo tipo de servicios de taxi y VTC para el área de Salamanca ciudad y sus pueblos. Con precios y tarifas adaptadas en todo momento al tipo de viaje y sus caracteristicas.</p>
                        <p className='  text-1xl text-[#555] text-center md:text-center md:text-2xl md:ml-0'>En Su chófer personal ofrecemos tanto servicio de taxi puntual para recojerle o llevarle a su destino, como agendar varios viajes fijos semanales programados, o cualquier imprevisto que pudiera surgir y no disponga de vehículo. También ofrecemos tarifas espaciales para nuestros viajes al aeropuerto de Machacón y Barajas. </p>

                    </div>
                </div>
                <div>

                    <Link href='' className="">
                        <button className="  font-bold p-4  rounded-full inline-flex items-center">
                            <span className="text-1xl md:text-2xl text-[var(--primary-color)] uppercase ">Contacta con nosotros sin compromiso</span>
                            <BsFillArrowRightCircleFill className="text-3xl md:pl-2" />
                        </button>
                    </Link>
                </div>

                <div className='md:col-span-10 text-center pt-5 px-4 bg-black text-white mb-0'>
                    <h3 className='text-white pb-4 text-1xl font-bold lg:text-3xl text-center   md:text-center md:ml-0'>Disfruta de una ruta de vinos sin preocupaciones</h3>
                    <Image src="/sala2.jpeg"  width={700} height={400} alt="rutas"  className="w-full h-1/2 object-cover"/>
                    <div className="mx-4 md:mx-8 p-4">
                        <span className='font-bold text-1xl md:text-3xl text-center text-white'>RUTAS DE VINOS:</span>
                        <p className=' uppercase py-3 font-bold text-1xl text-center md:text-3xl md:text-center md:ml-0'>Salamanca es bien conocida por sus viñedos y sus famosas rutas de vinos y bodegas.</p>
                        <p className='  text-1xl text-white text-center md:text-center md:text-2xl md:ml-0'>Por eso en SuChóferPersonal hemos pensado en ello y nos hemos asociado con los mejores guias de Salamanca. Para que así, disfrutes de tu aventura sin cohibirte por tener que conducir. </p>

                    </div>
                </div>
                <div className="bg-black text-white mt-0">

                    <Link href='' className="">
                        <button className="  font-bold p-4  rounded-full inline-flex items-center">
                            <span className="text-1xl md:text-2xl text-[var(--primary-color)] uppercase ">Contacta con nosotros sin compromiso</span>
                            <BsFillArrowRightCircleFill className="text-3xl md:pl-2" />
                        </button>
                    </Link>
                </div>

                <div className='md:col-span-10 text-center pt-5 px-4 '>
                    <h3 className='text-black pb-4 text-1xl font-bold lg:text-3xl text-center  md:text-center md:ml-0'>Contamos con una flota de vehículos adaptada a grupos grandes</h3>
                    <Image src="/sala3.jpeg"  width={700} height={400} alt="flota de taxis"  className="w-full h-1/2 object-cover"/>
                    <div className="mx-4 md:mx-8 pt-4">
                        <span className='font-bold text-1xl md:text-3xl text-center text-[#555]'>DESPEDIDAS DE SOLTERO Y EVENTOS FESTIVOS:</span>
                        <p className=' uppercase py-3 font-bold text-1xl text-center md:text-3xl md:text-center md:ml-0'>Ofrecemos todo tipo de servicios de taxi y VTC para el área de Salamanca ciudad y sus pueblos. Con precios y tarifas adaptadas en todo momento al tipo de viaje y sus caracteristicas.</p>
                        <p className=' text-1xl text-[#555] text-center md:text-center md:text-2xl md:ml-0'>En Su chófer personal ofrecemos tanto servicio de taxi puntual para recojerle o llevarle a su destino, como agendar varios viajes fijos semanales programados, o cualquier imprevisto que pudiera surgir y no disponga de vehículo. También ofrecemos tarifas espaciales para nuestros viajes al aeropuerto de Machacón y Barajas. </p>

                    </div>
                </div>
                <div>

                    <Link href='' className="">
                        <button className="  font-bold p-4  rounded-full inline-flex items-center">
                            <span className="text-1xl md:text-2xl text-[var(--primary-color)] uppercase ">Contacta con nosotros sin compromiso</span>
                            <BsFillArrowRightCircleFill className="text-3xl md:pl-2" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Featured