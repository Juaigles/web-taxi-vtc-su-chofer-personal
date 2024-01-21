import React from 'react'
import Link from 'next/link'

const FormResponse = () => {
  return (
    <div  className='bg-white text-black mt-10 h-[100vh] flex justify-center items-center'>
          <div className='grid grid-cols-1 text-center'>
            <p className='font-semibold text-3xl'>Gracias por contactar con nosotros</p>
            <p className=''>En breve atenderemos a su consulta y nos pondremos en contacto con usted en la mayor brevedad posible.</p>
            <Link href="/" className=' my-4'><button className='border px-4 py-2 bg-black text-white'>Volver a inicio</button></Link>
        </div>
    </div>
  )
}

export default FormResponse