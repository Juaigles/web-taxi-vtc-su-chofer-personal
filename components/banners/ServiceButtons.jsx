import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceButtons = () => {
    return (
        <div className='text-center font-bold   py-14'>
            <div className='h-20 flex-col px-2 mb-4'>
                <h2 className='font-bold text-3xl'>VTC Salamanca - Servicios de chófer Salamanca</h2>
                <h3 className='text-2xl mt-2'>Nuestros servicios</h3>
            </div>
            <div className=' grid-cols-1  xl:flex items-center justify-center mt-20 mx-4 '>
                <Link href="/vtc-salamanca"><button className='w-[350px] h-[250px] border flex-col items-center justify-center custom-shadow py-4 hover:bg-orange-300 text-black text-center font-bold my-2 mx-2  rounded'>
                    <div className='w-[350px] h-[200px] '>
                        <Image
                            src="/sala4.jpg"
                            width={700}
                            height={400}
                            className="w-[350px] h-[200px] object-cover"
                            alt='servicesButton'
                        />
                    </div>
                    <h3 className='font-bold py-4'>VTC</h3>
                </button></Link>
                <Link href="/taxi-salamanca"> <button className='w-[350px] h-[250px] border flex-col items-center  justify-center custom-shadow py-4  hover:bg-orange-300 text-black text-center font-bold my-2 mx-2  rounded'>
                    <div className='w-[350px] h-[200px]'>
                        <Image
                            src="/sala5.jpg"
                            width={700}
                            height={400}
                            className="w-[350px] h-[200px] object-cover"
                            alt='servicesButton'
                        />
                    </div>
                    <h3 className='font-bold py-4'>TAXI</h3>
                </button> </Link>
                <Link href="/alquiler-con-conductor"> <button className='w-[350px] h-[250px] border flex-col items-center  justify-center custom-shadow py-4 hover:bg-orange-300 text-black text-center font-bold my-2 mx-2  rounded'>
                    <div className='w-[350px] h-[200px]'>
                        <Image
                            src="/sala3.jpeg"
                            width={700}
                            height={400}
                            className="w-[350px] h-[200px] object-cover"
                            alt='servicesButton'
                        />
                    </div>
                    <h3 className='font-bold py-4'>ALQUILER CON CONDUCTOR</h3>
                </button></Link>
                <Link href="/chofer-privado">  <button className='w-[350px] h-[250px] border flex-col items-center  justify-center custom-shadow py-4 hover:bg-orange-300 text-black text-center font-bold my-2 mx-2  rounded'>
                    <div className='w-[350px] h-[200px]'>
                        <Image
                            src="/sala2.jpeg"
                            width={700}
                            height={400}
                            className="w-[350px] h-[200px] object-cover"
                            alt='servicesButton'
                        />
                    </div>
                    <h3 className='font-bold py-4'>CHÓFER PRIVADO</h3>
                </button></Link>
            </div>

        </div>
    )
}

export default ServiceButtons