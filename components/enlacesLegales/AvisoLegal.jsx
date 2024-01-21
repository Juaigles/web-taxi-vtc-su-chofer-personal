import React from 'react'

const AvisoLegal = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] mx-[8%]'>
      <div>
        <h2 className='font-semibold text-3xl mb-5'>AVISO LEGAL</h2>
        <ol className='list-decimal pl-5 space-y-2'>
          <li className='mb-5'>
            El titular de este sitio web es <strong>SU CHÓFER PERSONAL</strong>, con <strong>N.I.F. 30622963G</strong>, con domicilio en <strong>Calle Alonso Del Castillo, 1 Ptal.2 -2º C, código postal 37003 de Salamanca (SALAMANCA)</strong>.
          </li>
          <li className='mb-5'>
            El acceso al site de <strong>SU CHÓFER PERSONAL</strong> es gratuito. Todo el contenido es propiedad intelectual de SU CHÓFER PERSONAL. Cualquier utilización de los mismos contraria a las normas en materia de propiedad intelectual será perseguida con arreglo a la legislación vigente.
          </li>
        </ol>
      </div>
    </div>
    
  )
}

export default AvisoLegal