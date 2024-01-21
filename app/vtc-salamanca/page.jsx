import React from 'react'
import GenericHero from '@/components/layout/GenericHero'
import Banner from '@/components/banners/Banner'
import PhotoGallery from '@/components/banners/PhotoGallery'
import VtcSalamanca from '@/components/infoPages/VtcSalamanca'

const vtc_salamanca = () => {
    return (
        <div>
            <GenericHero children="SERVICIOS VTC EN SALAMANCA" imgUrl="vtc" />
            <VtcSalamanca/>
            <Banner />
            <PhotoGallery/>
        </div>
    )
}

export default vtc_salamanca