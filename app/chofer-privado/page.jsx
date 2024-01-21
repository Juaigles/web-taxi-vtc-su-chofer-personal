import React from 'react'

import ChoferPrivado from '@/components/infoPages/ChoferPrivado'
import Banner from '@/components/banners/Banner'
import GenericHero from '@/components/layout/GenericHero'

import PhotoBanner from '@/components/banners/PhotoBanner'

const chofer_privado = () => {
  return (
    <>
      <GenericHero children="CHÓFER PRIVADO EN SALAMANCA" imgUrl="chofer-privado"/>
      <ChoferPrivado/>
      <Banner/>
      <PhotoBanner/>
    </>
  )
}

export default chofer_privado