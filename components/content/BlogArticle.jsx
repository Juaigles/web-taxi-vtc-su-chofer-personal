import Image from 'next/image'
import React from 'react'

const BlogArticle = () => {
  return (
    <div className=' mx-[4%] md:mx-[8%] text-justify flex-auto my-10'>
      <h2 className='font-bold text-2xl mb-4 text-center'>¿QUÉ ES UN VTC?</h2>
      <h3 className='font-semibold my-2 text-center'>Descubre las Ventajas de las VTC sobre los Taxis</h3>
      <p className='mb-10'>Las Vehículos de Transporte con Conductor (VTC) han revolucionado la movilidad urbana, ofreciendo una alternativa eficiente y sostenible al tradicional servicio de taxis. <br /> Seguro conoce servicios como <strong>UBER</strong> o <strong>CABIFY</strong>, pues una VTC es en esencia lo mismo. Exploraremos las razones por las cuales elegir una VTC puede ser no solo más conveniente sino también más económico y amigable con el medio ambiente.
      </p>
      <div className='max-w-sm mx-auto'>

      <Image src="/vtcSalamanca.png" alt='vtcSalamanca' width={1000} height={1000} layout='responsive'/>
      </div>
      <h3 className='font-semibold my-2'>1. Eficiencia y Conveniencia:</h3>
      <p>Las VTC ofrecen un servicio eficiente y conveniente gracias a la tecnología de reserva y seguimiento en tiempo real. Con solo unos clics en tu dispositivo móvil, puedes solicitar y rastrear tu vehículo, evitando esperas innecesarias y garantizando una experiencia de viaje sin contratiempos.
      </p>
      <h3 className='font-semibold my-2'>2. Economía de Costos</h3>
      <p>A diferencia de los taxis tradicionales, las VTC a menudo presentan tarifas más competitivas. La transparencia en la fijación de precios y la ausencia de recargos adicionales en situaciones de tráfico intenso o eventos especiales hacen que las VTC sean una opción económica para los usuarios conscientes del presupuesto.
      </p>
      <h3 className='font-semibold my-2'>3. Sostenibilidad Ambiental:
      </h3>
      <p>Las VTC suelen incluir en sus flotas vehículos más modernos y eficientes desde el punto de vista energético. Esta elección no solo reduce las emisiones de carbono, sino que también contribuye a la sostenibilidad ambiental a largo plazo. Optar por una VTC es, por lo tanto, una elección consciente para aquellos que buscan minimizar su huella ecológica.

      </p>
      <h className='font-semibold my-2'>4. Comodidad y Experiencia del Usuario:
      </h>
      <p>La comodidad es una prioridad en los servicios de VTC, con vehículos limpios y conductores profesionales. Además, la posibilidad de evaluar y dejar comentarios sobre el servicio contribuye a mantener altos estándares de calidad y mejorar la experiencia del usuario.
      </p>
      <h3 className='font-semibold my-2'>5. Flexibilidad y Personalización:</h3>
      <p>Las VTC ofrecen flexibilidad en cuanto a la elección del tipo de vehículo según tus necesidades y preferencias. Desde opciones más económicas hasta vehículos de gama alta, puedes personalizar tu experiencia de viaje de acuerdo con tus preferencias.
      </p>
      <p className='my-10'>En conclusión, las VTC no solo representan una alternativa eficiente al servicio de taxis, sino que también ofrecen ventajas económicas y medioambientales significativas. Al abrazar la tecnología, la transparencia de precios y la sostenibilidad, las VTC se posicionan como la elección óptima para aquellos que buscan un transporte urbano moderno y consciente. ¡Descubre la transformación del transporte con las Vehículos de Transporte con Conductor!</p>
    </div>
  )
}

export default BlogArticle