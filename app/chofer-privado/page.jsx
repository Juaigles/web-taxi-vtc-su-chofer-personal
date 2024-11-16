import React from 'react'

import ChoferPrivado from '@/components/infoPages/ChoferPrivado'
import Banner from '@/components/banners/Banner'
import GenericHero from '@/components/layout/GenericHero'

import PhotoBanner from '@/components/banners/PhotoBanner'
import PhoneBanner from '@/components/PhoneBanner'

export const metadata = {
  title: "Chófer privad en Salamanca",
  description: "Servicio de chófer privado en salamanca, para eventos (bodas, bautizos etc) taxi/vtc",
};

const chofer_privado = () => {
  return (
    <>
      <GenericHero  imgUrl="chofer-privado">CHÓFER PRIVADO EN SALAMANCA</GenericHero>
      <ChoferPrivado/>
      <Banner/>
      <PhotoBanner/>
      <PhoneBanner/>
    </>
  )
}

export default chofer_privado