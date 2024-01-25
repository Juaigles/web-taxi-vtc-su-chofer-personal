"use client"

import Link from 'next/link';
import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';



const Contacto = () => {
    const handleSubmit = async (event) =>{
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
          };

          const JSONdata = JSON.stringify(data)
          const endpoint = "/api/contact"

          const options = {
            method: 'POST',
            content: {
                'Content-Type' : 'application/json'
            },
            body: JSONdata,
          };

          const response = await fetch(endpoint, options);
          const result = await response.json()
          console.log(result.status)
          if (result.error) {
            // Redirigir a la página de éxito
        } else {
              window.location.href = '/success';
            // Mostrar mensaje de error o manejar el error
          }


    }
    return (
        <div className='m-[4%] md:mx-[8%]'>
            <div >
                <div className='md:flex text-left gap-10  '>

                    <div>
                        <h2 className='text-bold text-2xl my-6'>Contacto</h2>
                        <p className='my-6'>Somos <Link href="/" className='text-[var(--secondary-color)] font-semibold'>En Su Chófer Personal</Link>, ubicados en Salamanca, nos especializamos en brindar servicios de chófer de alta calidad. Contáctenos para experimentar un transporte excepcional adaptado a sus necesidades.</p>
                        <p className='my-6 '>Contacte con nosotros. Estaremos encantados de atenderle.</p>
                    </div>
                    <div className='w-[70%] my-6'>
                            <h2 className='text-bold text-2xl md:mb-5 '>Ubicación</h2>
                        <ul className='my-6 md:my-0 '>
                            <li>Dirección: 37003 Salamanca, Salamanca</li>
                            <li>E-mail:<Link href="mailto:vtcsuchoferpersonal@gmail.com" className='text-[var(--secondary-color)] font-semibold'> vtcsuchoferpersonal@gmail.com</Link></li>
                            <li>Móvil: <Link href="tel:+34679551515" className='text-[var(--secondary-color)] font-semibold'>679 551 515</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='md:grid grid-cols-2 gap-10 my-10 '>

                    <div className=''>
                        <h2 className='text-bold text-2xl text-center'>Formulario de Contacto</h2>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 m-4'>
                            <div className='md:flex md:gap-5'>
                             
                                <input type="text" id="name" name="name" required placeholder='Nombre*' className='border p-2 mt-4' />
                                <input type="tel" name="phone" id="phone"  placeholder='Teléfono*' className='border p-2 mt-4 md:w-full' />

                            </div>
                            <div className=''>

                            </div>
                            <input type="email" id="email" name="email" required placeholder='E-mail*' className='border p-2 mt-4' />
                            <textarea id="message" name="message" required cols="30" rows="10" placeholder='Escribe tu mensaje' className='border p-2 mt-4'></textarea>
                        <div className='flex justify-center items-center my-10'>

                            <button type='submit' className='border rounded-lg px-4 py-2 bg-black text-white'>Enviar</button>
                        </div>
                        </form>
                    </div>
                    <div className='my-8 md:p-5 md:m-10 bg-[var(--secondary-color)] '>
                        <div className='text-white px-6 py-16'>
                            <h2 className='my-4'>Datos de contacto</h2>
                            <hr />
                            <ul className=' '>
                                <li className='flex items-center gap-4 my-4'><FaMapMarkerAlt size={20} />Salamanca, Salamanca</li>
                                <li className='flex items-center gap-4 my-2'><FaPhone size={20} />679 551 515</li>
                                <li className='flex items-center gap-4 my-4'><FaEnvelope size={20} />vtcsuchoferpersonal@gmail.com</li>
                            </ul>
                            <hr />
                            <div className='flex gap-2 mt-4'>
                                <FaFacebook size={30} />
                                <FaWhatsapp size={30} />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto