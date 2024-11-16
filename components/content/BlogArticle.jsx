import Image from 'next/image'
import React from 'react'

const BlogArticle = () => {
  return (
    <div className=' mx-[8%] md:mx-[12%]  flex-auto'>
      <h2 className='font-bold text-4xl pt-10 m-4 text-left'>¿Qué es un VTC? Descubre las Ventajas de las VTC sobre los Taxis</h2>
      <p>Por Barbara Gutiérrez</p>

      <div className='my-6 flex justify-center items-center '>

        <Image src="/BlogCover.webp" alt='vtcSalamanca' width={1000} height={1000}  />
      </div>
      <p className='mb-10 text-2xl text-justify'>
        Los Vehículos de Transporte con Conductor (VTC) han transformado la dinámica de la movilidad urbana al proporcionar una alternativa eficiente y sostenible al servicio de taxis convencional. Seguramente esté familiarizado con plataformas como <strong>UBER</strong> o <strong>CABIFY</strong>, ya que una VTC es esencialmente lo mismo. <br /> <br /> A continuación, analizaremos las razones por las cuales optar por una VTC no solo puede resultar más conveniente, sino también más económico y respetuoso con el medio ambiente.</p>
      <h3 className='font-bold text-3xl my-2'>1. Eficiencia y Conveniencia:</h3>
      <p className='my-10 text-justify text-2xl'>Las Vehículos de Transporte con Conductor (VTC) destacan por brindar un servicio altamente eficiente y conveniente, impulsado por tecnologías avanzadas de reserva y seguimiento en tiempo real. Con tan solo unos clics en tu dispositivo móvil, puedes solicitar y monitorizar tu vehículo de manera instantánea, eliminando esperas innecesarias y asegurando un viaje sin contratiempos.
      </p>
      <div className='flex justify-center items-center'>

        <div className='w-full md:max-w-[60%] mb-10 '>
          <Image src="/reservar.webp" alt='Eficiencia y Covenciencia' width={1000} height={1000} />
        </div>
      </div>
      <h3 className='font-bold text-3xl my-2'>2. Economía de Costos</h3>
      <p className='my-10 text-2xl text-justify'>A diferencia de los taxis convencionales, las Vehículos de Transporte con Conductor (VTC) frecuentemente ofrecen tarifas más competitivas. La transparencia en la estructuración de precios y la ausencia de recargos adicionales durante períodos de tráfico intenso o eventos especiales convierten a las VTC en una elección económica para aquellos usuarios que valoran la administración cuidadosa del presupuesto.
      </p>
      <div className='flex justify-center items-center'>

        <div className='w-full md:max-w-[60%] mb-10'>
          <Image src="/eficiencia_coste.webp" alt='logo' width={1000} height={1000}  />
        </div>
      </div>
      <h3 className='font-bold text-3xl my-2'>3. Sostenibilidad Ambiental:
      </h3>
      <p className='my-10 text-2xl text-justify'>Las VTC suelen incluir en sus flotas vehículos más modernos y eficientes desde el punto de vista energético. Esta elección no solo reduce las emisiones de carbono, sino que también contribuye a la sostenibilidad ambiental a largo plazo. Optar por una VTC es, por lo tanto, una elección consciente para aquellos que buscan minimizar su huella ecológica.

      </p>
      <div className='flex justify-center items-center'>

        <div className='w-full md:max-w-[60%] mb-10'>
          <Image src="/priusBosqueBlog.webp" alt='logo' width={1000} height={1000}  />
        </div>
      </div>
      <h3 className='font-bold text-3xl my-2'>4. Comodidad y Experiencia del Usuario:
      </h3>
      <p className='mt-10 text-2xl text-justify'>La prioridad en los servicios de Vehículos de Transporte con Conductor (VTC) es la comodidad, garantizada por vehículos impecables y conductores altamente profesionales. Además, la capacidad de evaluar y dejar comentarios sobre el servicio no solo permite a los usuarios expresar sus opiniones, sino que también fomenta la preservación de estándares de calidad elevados y mejora continua en la experiencia del usuario.
      </p>
      <ul className='ml-4 mt-4 mb-10 text-2xl text-justify'>
        <li className=''><span className='font-bold text-2xl'>·</span> Personalización del Servicio: Los usuarios pueden disfrutar de un servicio más personalizado, ya que las preferencias individuales, como la temperatura del vehículo o la elección de la música, pueden ser atendidas de manera específica.</li>
        <li className='my-2'><span className='font-bold text-2xl'>·</span> Seguridad Aumentada: Las VTC suelen implementar sistemas de seguridad adicionales, como la grabación de viajes o la opción de compartir la ruta en tiempo real, proporcionando una capa adicional de tranquilidad para los pasajeros.</li>
        <li><span className='font-bold text-2xl'>·</span> Acceso a Información del Conductor: Antes del viaje, los usuarios pueden acceder a información sobre el conductor asignado, como su nombre y calificaciones previas, lo que brinda una sensación de seguridad y confianza antes de embarcarse en el trayecto.</li>
      </ul>
      <div className='flex justify-center items-center'>

        <div className='w-full md:max-w-[60%] mb-10'>
          <Image src="/adaptado.webp" alt='logo' width={1000} height={1000} />
        </div>
      </div>
      <h3 className='font-bold text-3xl my-2'>5. Flexibilidad y Personalización:</h3>
      <p className='text-2xl text-justify'>Las Vehículos de Transporte con Conductor (VTC) brindan flexibilidad al permitirte elegir el tipo de vehículo que mejor se adapte a tus necesidades y preferencias. Desde opciones más asequibles hasta vehículos de alta gama, tienes la posibilidad de personalizar tu experiencia de viaje de acuerdo con tus gustos y requerimientos individuales.
      </p>
      <div className='flex justify-center items-center'>

        <div className='w-full md:max-w-[60%] my-10'>
          <Image src="/mercedesCiudad.webp" alt='logo' width={1000} height={1000}  />
        </div>
      </div>
      <p className='my-10 text-2xl text-justify'>En conclusión, las VTC no solo representan una alternativa eficiente al servicio de taxis, sino que también ofrecen ventajas económicas y medioambientales significativas. Al abrazar la tecnología, la transparencia de precios y la sostenibilidad, las VTC se posicionan como la elección óptima para aquellos que buscan un transporte urbano moderno y consciente. ¡Descubre la transformación del transporte con las Vehículos de Transporte con Conductor!</p>
    </div>
  )
}

export default BlogArticle