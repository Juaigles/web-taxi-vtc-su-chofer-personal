import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import TaxiSalamanca from '@/components/infoPages/TaxiSalamanca'
import ServiceButtons from '@/components/banners/ServiceButtons';

export const metadata = {
  title: "TAXI en Salamanca",
  description: "Descubra la opción mas personalizada y con otro nivel de comodidad en los servicios de Taxi/VTC en Salamanca",
};

const taxi_salamanca = () => {
  return (
    <div>
        <GenericHero  imgUrl="taxi">TAXI SALAMANCA</GenericHero>
        <TaxiSalamanca/>

      <Banner/>
      <ServiceButtons/>
    </div>
  )
}

export default taxi_salamanca