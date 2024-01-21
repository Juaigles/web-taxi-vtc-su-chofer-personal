import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import Contacto from '@/components/infoPages/Contacto'

const contact = () => {
  return (
    <div>
        <GenericHero children="CONTÁCTA CON NOSOTROS" imgUrl="contacto"/>
        <Contacto/>

      <Banner/>
    </div>
  )
}

export default contact