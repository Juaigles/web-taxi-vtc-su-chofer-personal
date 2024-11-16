import React from 'react'
import AvisoLegal from '@/components/enlacesLegales/AvisoLegal'


export const metadata = {
  title: "Aviso legal",
  description: "Página de aviso legal",
};

const aviso_Legal = () => {
  return (
    <div>
        <AvisoLegal/>
    </div>
  )
}

export default aviso_Legal