import Cookies from '@/components/enlacesLegales/Cookies'
import React from 'react'

export const metadata = {
  title: "Política de cookies",
  description: "Página de políticas de cookies",
};

const cookies = () => {
  return (
    <div>
        <Cookies/>
    </div>
  )
}

export default cookies