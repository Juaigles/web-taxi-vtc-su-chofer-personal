import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import PhotoGallery from '@/components/banners/PhotoGallery'
import VtcSalamanca from '@/components/infoPages/VtcSalamanca'

export const metadata = {
    title: "VTC en Salamanca",
    description: "Descubra que son las VTC viajando con nosotros. Una extra de comodidad y personalización en su trayeco, a otro nivel",
  };

const vtc_salamanca = () => {
    return (
        <div>
            <GenericHero imgUrl="vtc" >SERVICIOS VTC EN SALAMANCA</GenericHero>
            <VtcSalamanca/>
            <Banner />
            <PhotoGallery/>
        </div>
    )
}

export default vtc_salamanca