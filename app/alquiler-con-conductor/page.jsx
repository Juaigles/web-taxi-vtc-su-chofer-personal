import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import AlquilerConductor from '@/components/infoPages/AlquilerConductor'
import PhoneBanner from '@/components/PhoneBanner';

export const metadata = {
  title: "Alquiler con conductor",
  description: "Pruebe el servicio de Alquiler con conductor para viajes cortos o largos. Nosotros conducimos por usted.",
};

const alquiler_con_conductor = () => {
  return (
    <>
        <GenericHero imgUrl="alquiler">ALQUILER CON CONDUCTOR </GenericHero>
        <AlquilerConductor/>
        <PhoneBanner/>
    </>
  )
}

export default alquiler_con_conductor