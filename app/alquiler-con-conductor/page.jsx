import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import AlquilerConductor from '@/components/infoPages/AlquilerConductor'

const alquiler_con_conductor = () => {
  return (
    <>
        <GenericHero children="ALQUILER CON CONDUCTOR" imgUrl="alquiler"/>
        <AlquilerConductor/>
    </>
  )
}

export default alquiler_con_conductor