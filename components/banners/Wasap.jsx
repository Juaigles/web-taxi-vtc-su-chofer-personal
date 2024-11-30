import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const Wasap = () => {
  return (
    <div className='wasapContainer'>
        <div className='wasap'>

           <Link href="https://wa.me/34679551515" className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>
                            <FaWhatsapp size={80} aria-hidden="true"/>
                        </Link>
        </div>
    </div>
  )
}

export default Wasap