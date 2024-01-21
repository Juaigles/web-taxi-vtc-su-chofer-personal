import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import TaxiSalamanca from '@/components/infoPages/TaxiSalamanca'

const taxi_salamanca = () => {
  return (
    <div>
        <GenericHero children="TAXI SALAMANCA" imgUrl="taxi"/>
        <TaxiSalamanca/>

      <Banner/>
    </div>
  )
}

export default taxi_salamanca