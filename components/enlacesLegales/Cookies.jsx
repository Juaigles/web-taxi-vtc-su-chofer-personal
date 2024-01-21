import Link from 'next/link'
import React from 'react'

const data = [
  { thirdParty: 'Google Analytics', type: 'Ubicación: Google Maps proporciona un servicio de mapas. Registra el origen del usuario y las keywords utilizadas. Genera un prefijo único con fines analíticos. Analíticas: Google proporciona datos anónimos sobre las visitas a la página web. Vídeos: Youtube permite la subida y visualización de vídeos. Utiliza cookies para medir las visualizaciones o registrar eventos. Interacción Social: Google permite que la información de la WEB sea compartida en su red social Google +', provider: 'Google Inc.' },
  { thirdParty: 'Google maps', type: 'Ubicación: Google Maps proporciona un servicio de mapas. Registra el origen del usuario y las keywords utilizadas. Genera un prefijo único con fines analíticos. Analíticas: Google proporciona datos anónimos sobre las visitas a la página web. Vídeos: Youtube permite la subida y visualización de vídeos. Utiliza cookies para medir las visualizaciones o registrar eventos. Interacción Social: Google permite que la información de la WEB sea compartida en su red social Google +', provider: 'Google Inc.' },
  { thirdParty: 'Add to any', type: 'Interacción social: Permite que la web sea compartida en redes sociales.', provider: 'AddToAny' },
  { thirdParty: 'AddThis', type: 'Herramientas Web. Interacción social. Addthis permite que la web sea compartida en redes sociales como Google+, Facebook, etc.', provider: 'Oracle Inc.' },
  { thirdParty: 'Adobe Omniture', type: 'Analíticas: Omniture proporciona datos anónimos sobre las visitas a nuestra web y nos permite hacer pruebas y evaluar la mejor manera de presentar la web a nuestros usuarios.', provider: 'Adobe Systems Incorporated' },
  { thirdParty: 'Prestashop', type: 'Operativa – E-commerce: Permite conservar las opciones de compra seleccionadas por el usuario, así como gestionar el carrito de la compra.', provider: 'Prestashop' },
  { thirdParty: 'YouTube', type: 'Web Video', provider: 'Google Inc.' },
  { thirdParty: 'Facebook', type: 'Facebook Like, Comments, Feed', provider: 'Facebook Inc.' },
  { thirdParty: 'Twitter', type: 'Follow Us', provider: 'Facebook Inc.' },
  
]

const Cookies = () => {
  return (
    <div className='mt-[16%] md:mt-[8%] mx-[4%] md:mx-[8%] cookies '>
      <h2 className='text-2xl font-semibold py-10'>POLÍTICA DE COOKIES</h2>
      <div className=''>
        <div className='my-10'>
          <h3><strong>Objeto</strong></h3>
          <p>El objeto de la presente política es informar del uso de cookies en este sitio web de acuerdo con lo establecido en la legislación de los servicios de la sociedad de la información y de comercio electrónico.</p>
        </div>
        <div className='my-10'>
          <h3><strong>¿Qué son las Cookies y para qué se utilizan?</strong></h3>
          <p>Las cookies, son ficheros o archivos de texto que un servidor web genera y almacena en el ordenador/smartphone/tablet (en adelante equipo) de un Usuario al acceder a determinadas páginas web, para almacenar y recuperar información sobre la navegación que realiza el usuario desde dicho equipo. También pueden consistir en un código que permite identificar al Usuario inequívocamente durante su navegación. Por ello las cookies pueden almacenar información sobre el equipo de un Usuario o sobre sus sesiones de navegación de los sitios web que ha visitado, tal como página que visita, el tiempo de conexión a Internet, y otros datos según el tipo de cookie.</p>
          <p>En definitiva, el uso de cookies en la navegación a través del sitio web permite obtener información relativa a la navegación de los usuarios; mejorar la experiencia del usuario en la navegación; recoger las estadísticas de uso del sitio web por el Usuario y otras informaciones como el navegador empleado por el Usuario, el número de páginas visitadas, el número de visitas, el rastreo de los movimientos que hace el Usuario por un sitio web, el tiempo que permanece en el sitio web o en una página concreta, el llenado o vaciado de la cesta de la compra, y otras informaciones; geolocalizar al Usuario mediante la geolocalización del dispositivo conectado (información sobre la región y, potencialmente, datos de la localidad en algunos países); medir la efectividad de sus campañas de correo electrónico y mejorar las características del servicio para segmentos específicos de los usuarios y especialmente de los suscriptores de la recepción de comunicaciones electrónicas comerciales publicitarias y boletines; conocer si los receptores de comunicaciones electrónicas comerciales publicitarias y boletines han procedido a la apertura de dichas comunicaciones y el uso de los enlaces contenidos en los mismos para cada uno de los destinatarios, tal como la pulsación de los enlaces contenidos en los correos, y poder elaborar con la información recabada informes de seguimiento de las campañas.</p>
          <p>Este sitio web utiliza cookies, tanto propias como de terceros. Más adelante el Usuario puede encontrar información concreta sobre las mismas.</p>
          <p>¿Cómo se autoriza el uso de las cookies en nuestro sitio web?</p>
          <p>En relación con el uso de utilizan cookies en este sitio web, el Usuario debe saber que nos autoriza y consiente el uso de cookies de la siguiente forma:</p>
          <ul>
            <li>Acepta el uso de las cookies utilizadas en este sitio web para las finalidades indicadas en esta política si marca o pincha el aviso de ACEPTO que se publica en la primera capa de información.</li>
          </ul>
          <p>En todo caso, pese a la aceptación inicial de uso de las cookies en la navegación a través de nuestro sitio web, en cualquier momento el Usuario puede revocar su consentimiento, deshabilitando y rechazando su utilización, según se explica en el apartado correspondiente de esta política.

          </p>
          <p>En todo caso, el Usuario tiene el control sobre las cookies, pues están almacenadas en el navegador de los equipos que utilizan. Por tanto, en cualquier momento el Usuario podrá leerlas, filtrarlas, rechazarlas y eliminarlas.</p>
        </div>
        <div className='my-10'>
          <h3><strong>¿Cuáles son las cookies de terceros utilizadas y la finalidad de uso en el sitio web?</strong></h3>
          <table className='mt-4 '>
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Solución de Terceros
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo/Propósito
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Proveedor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Política de Privacidad y opciones

                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((fields, index) => (
                <tr key={index}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {fields.thirdParty}
                  </td>
                  <td className='px-6 py-4 whitespace-wrap text-sm text-gray-500'>
                    {fields.type}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {fields.provider}
                  </td>
                  <td className='flex justify-center items-center px-6 py-10 whitespace-nowrap text-sm text-gray-500'>
                    <div className='grid grid-cols-1 text-center'>

                      <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]'  href="https://support.google.com/analytics/answer/6004245?hl=es">Privacidad</Link>
                      <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="https://tools.google.com/dlpage/gaoptout">Complementos</Link>
                    </div>
                  </td>
                </tr>
              ))}


            </tbody>
          </table>
        </div>
        <div className='my-10'>
          <h3><strong>¿Cómo se puede rechazar, desactivar y eliminar las cookies utilizadas en nuestro sitio web?</strong></h3>
          <p>El Usuario tiene la opción de impedir o rechazar el uso de cookies, desactivar y eliminarlas en cualquier momento respecto de su navegación por este sitio web.</p>
          <p>La mayoría de navegadores web permite gestionar, en cualquier momento, las preferencias del Usuario sobre el uso de las Cookies. El Usuario puede ajustar su navegador para que rechace.</p>
          <p>Cookies o elimine determinadas Cookies según su criterio.</p>
          <p>Para la configuración de nuestras Cookies (permitir, bloquear o eliminar las Cookies) y las de terceros el Usuario puede hacerlo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
          <ul className='mt-10'>
            <li>Firefox <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros">https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros</Link></li>
            <li>Chrome   <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</Link></li>
            <li>Internet Explorer <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="http://windows.microsoft.com/es-es/internet-explorer/delete-managecookies#ie=ie-11">http://windows.microsoft.com/es-es/internet-explorer/delete-managecookies#ie=ie-11</Link></li>
            <li className='font-bold'>Safari - Seleccione Safari - Preferencias, haga clic en Privacidad</li>
            <li>Opera   <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="http://help.opera.com/Windows/11.50/es-ES/cookies.html">http://help.opera.com/Windows/11.50/es-ES/cookies.html</Link></li>
            <li>Windows Phone <Link className='text-[var(--links-color)] hover:text-[var(--primary-color)]' href="https://support.microsoft.com/es-es/help/10635/windows-phone-change-privacy-and-other-browser-settings">https://support.microsoft.com/es-es/help/10635/windows-phone-change-privacy-and-other-browser-settings</Link></li>
            <li className='font-bold'>Android - Ajustes del navegador utilizado - Privacidad del navegador utilizado</li>

           
          </ul>
          <p>El Usuario puede revocar su consentimiento para el uso de cookies en su navegador a través de las indicaciones anteriores.</p>
          <p>Para deshabilitar cookies y dispositivos de almacenamiento y recuperación de datos individualmente se puede instalar en el navegador la extensión “Ghostery”.</p>
          <p>El Usuario debe tener en cuenta que algunas características de los contenidos de este sitio web solo están disponibles si se permite la instalación de Cookies en su navegador. Si decide no aceptar o bloquear determinadas Cookies (en función de su finalidad), puede que esto afecte, total o parcialmente, al funcionamiento normal de la página web o que impida el acceso a algunos servicios de la misma.</p>
        </div>
          <div className='my-10'>
            <h3><strong>Actualizaciones y cambios en la Política de cookies.</strong></h3>
            <p>El responsable puede modificar esta Política de Cookies en función de cambios en el uso de Cookies en su sitio web, de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por las autoridades de control, en concreto, la Agencia Española de Protección de Datos.</p>
            <p>Es posible por tanto que se produzcan cambios significativos en esta Política de Cookies los cuales serán publicados en la misma. Pero será responsabilidad del Usuario acceder a esta Política de forma periódica para conocer cualquier cambio, sin perjuicio de la posibilidad de comunicar a los usuarios del sitio web dichos cambios mediante un aviso informativo en nuestro sitio web y/o a través de otros medios.</p>
          </div>
      </div>
    </div>
  )
}

export default Cookies