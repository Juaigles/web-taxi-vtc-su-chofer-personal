import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import TransferSalamanca from '@/components/infoPages/TransferSalamanca'

const transfer_salamanca = () => {
  return (
    <div>
        <GenericHero children="TRANSFER SALAMANCA" imgUrl="transfer"/>
        <TransferSalamanca/>

      <Banner/>
    </div>
  )
}

export default transfer_salamanca