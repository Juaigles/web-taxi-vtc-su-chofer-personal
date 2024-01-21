"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import CookiesBanner from '../banners/CookiesBanner'

const VerifyCookies = () => {
    
    const [showBanner, setShowBanner] = useState(false)

    useEffect(()=>{
      const consent = localStorage.getItem('cookiesAccepted');
      if(!consent){
        setShowBanner(true)
      }
    },[])
  
    const acceptCookies = () => {
      localStorage.setItem('cookiesAccepted', 'true');
      setShowBanner(false)
    }
      return (
          <div>

              {showBanner && <CookiesBanner onAccept={acceptCookies}/>}
          </div>
  )
}

export default VerifyCookies