import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import TransferSalamanca from '@/components/infoPages/TransferSalamanca'
import Form2 from '@/components/content/Form2';

export const metadata = {
  title: "Transfer Salamanca/Madrid",
  description: "Información sobre nuestros servicios de transfer en Salamanca-Madrid, o cualquier aeropuerto que necesite. ",
};

const transfer_salamanca = () => {
  return (
    <div>
        <GenericHero imgUrl="transfer">TRANSFER SALAMANCA</GenericHero>
        <TransferSalamanca/>

      <Banner/>
      <Form2/>
    </div>
  )
}

export default transfer_salamanca