import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import Contacto from '@/components/infoPages/Contacto'

export const metadata = {
  title: "Informacion de Contacto",
  description: "Página con toda nuestra informacion y datos de contacto para que podamos resolverle cualquier duda o para resrevar un viaje",
};

const contact = () => {
  return (
    <div>
        <GenericHero imgUrl="contacto">CONTÁCTA CON NOSOTROS</GenericHero>
        <Contacto/>

      <Banner/>
    </div>
  )
}

export default contact