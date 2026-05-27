import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-pixel-bg text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Política de Privacidad
          </h1>
          <p className="text-xl text-pixel-accent font-bold mb-2">
            RLS — RBX Latam Store
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Última actualización: 26/05/2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            
            {/* 1. Introducción */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
              <p className="mb-4">
                En RLS – RBX Latam Store (en adelante, "RLS", "la Tienda" o "nosotros") respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros al utilizar nuestros servicios.
              </p>
              <p className="mb-4">
                La presente Política de Privacidad explica de manera clara y transparente qué información recopilamos, con qué finalidad la usamos, cómo la protegemos y cuáles son tus derechos como usuario.
              </p>
              <p className="font-semibold text-yellow-400">
                Al utilizar nuestra página web, contactarnos por redes sociales o realizar una compra en RLS, el Cliente declara haber leído y aceptado los términos de esta Política.
              </p>
            </section>

            {/* 2. Responsable */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Responsable del Tratamiento de los Datos</h2>
              <p className="mb-3">El responsable del tratamiento de los datos personales recopilados a través de nuestros canales es:</p>
              <ul className="space-y-2 ml-4">
                <li><strong className="text-white">Nombre comercial:</strong> RLS – RBX Latam Store</li>
                <li><strong className="text-white">Ubicación:</strong> Perú</li>
                <li><strong className="text-white">Correo de contacto:</strong> <a href="mailto:contacto@rbxlatamstore.com" className="text-pixel-accent hover:underline">contacto@rbxlatamstore.com</a></li>
                <li><strong className="text-white">Canales oficiales:</strong> Página web, Discord, Instagram, WhatsApp, Facebook</li>
              </ul>
            </section>

            {/* 3. Datos que Recopilamos */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Datos que Recopilamos</h2>
              <p className="mb-4">
                RLS recopila únicamente los datos estrictamente necesarios para procesar tus compras y brindarte un buen servicio. Los datos que podemos solicitar o recibir son:
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.1 Datos de identificación y contacto</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Nombre de usuario de Roblox</li>
                <li>Nombre o alias proporcionado al momento de la compra</li>
                <li>Correo electrónico (cuando aplique)</li>
                <li>Número de WhatsApp o usuario de Discord/Instagram/Facebook cuando el Cliente nos contacta por esos medios</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.2 Datos relacionados con la compra</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Producto adquirido (Robux, items, limiteds, etc.)</li>
                <li>Método de entrega seleccionado</li>
                <li>Comprobantes de pago enviados por el Cliente (capturas, vouchers o constancias)</li>
                <li>Historial de compras realizadas en RLS</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.3 Datos técnicos (página web)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Cookies y tecnologías similares (ver sección 8)</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.4 Datos que NO recopilamos</h3>
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                <p className="font-bold text-green-400 mb-3">RLS nunca solicita ni almacena:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contraseñas de cuentas de Roblox</li>
                  <li>Acceso directo a cuentas del Cliente</li>
                  <li>Datos completos de tarjetas de crédito o débito (los pagos se procesan mediante pasarelas externas)</li>
                  <li>Información sensible no relacionada con la compra (orientación sexual, religión, salud, etc.)</li>
                </ul>
              </div>
            </section>

            {/* 4. Finalidad */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Finalidad del Tratamiento</h2>
              <p className="mb-3">Los datos personales recopilados son utilizados exclusivamente para las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Procesar tu compra y entregar el producto adquirido</li>
                <li>Verificar pagos y validar la autenticidad de los comprobantes recibidos</li>
                <li>Brindar soporte y atención al cliente antes, durante y después de la compra</li>
                <li>Comunicarnos contigo sobre el estado de tu pedido, demoras o incidencias</li>
                <li>Prevenir fraudes, contracargos abusivos e intentos de estafa</li>
                <li>Mejorar nuestros servicios, la experiencia de compra y el funcionamiento de la página web</li>
                <li>Cumplir obligaciones legales cuando sean requeridas por autoridades competentes</li>
              </ul>
              <p className="font-semibold text-yellow-400">
                RLS no utiliza tus datos para enviar publicidad invasiva ni los comparte con terceros con fines comerciales.
              </p>
            </section>

            {/* 5. Base Legal */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Base Legal del Tratamiento</h2>
              <p className="mb-3">El tratamiento de tus datos se basa en:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tu consentimiento expreso al aceptar esta Política y los Términos y Condiciones</li>
                <li>La ejecución del contrato de compraventa entre el Cliente y RLS</li>
                <li>El interés legítimo de RLS en prevenir fraudes y proteger su negocio y comunidad</li>
                <li>El cumplimiento de obligaciones legales aplicables en Perú</li>
              </ul>
            </section>

            {/* 6. Conservación */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Conservación de los Datos</h2>
              <p className="mb-4">
                Los datos personales se conservarán únicamente por el tiempo necesario para cumplir las finalidades para las que fueron recopilados:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Tipo de dato</th>
                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Tiempo de conservación</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Datos de contacto y usuario de Roblox</td>
                      <td className="px-4 py-3">Mientras la cuenta del Cliente esté activa o exista relación comercial</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Comprobantes de pago e historial de compras</td>
                      <td className="px-4 py-3">Hasta 5 años, conforme a obligaciones contables y tributarias</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Datos asociados a fraudes o blacklist</td>
                      <td className="px-4 py-3 text-red-400 font-semibold">De forma permanente, para prevenir nuevas estafas</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Datos técnicos (cookies, IP, navegación)</td>
                      <td className="px-4 py-3">Plazos definidos por cada herramienta o cookie utilizada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm">
                Una vez vencidos estos plazos, los datos serán eliminados de forma segura o anonimizados.
              </p>
            </section>

            {/* 7. Compartir con Terceros */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Compartir Información con Terceros</h2>
              <p className="mb-4 font-semibold text-yellow-400">
                RLS no vende, alquila ni cede tus datos personales a terceros con fines comerciales. Únicamente compartimos información en los siguientes casos:
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">7.1 Proveedores de servicios</h3>
              <p className="mb-3">Compartimos los datos mínimos necesarios con:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Roblox Corporation, en la medida en que el uso de su plataforma así lo requiera para la entrega del producto</li>
                <li>Proveedores tecnológicos que dan soporte a la página web (hosting, analítica, antifraude)</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">7.2 Autoridades competentes</h3>
              <p className="mb-4">
                Podremos compartir información cuando sea requerida por una autoridad judicial, policial, administrativa o tributaria, en cumplimiento de la ley peruana.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">7.3 Casos de fraude</h3>
              <p>
                En casos de fraude comprobado, RLS podrá compartir información del usuario con tiendas aliadas del rubro (nombre de usuario de Roblox, nombre del comprador, modus operandi) con la finalidad de prevenir nuevas estafas. Esta práctica se basa en el interés legítimo de proteger a la comunidad.
              </p>
            </section>

            {/* 10. Derechos del Usuario */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Derechos del Usuario</h2>
              <p className="mb-3">Como titular de los datos personales, tienes los siguientes derechos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Acceso:</strong> conocer qué datos tuyos tenemos almacenados</li>
                <li><strong className="text-white">Rectificación:</strong> solicitar la corrección de datos inexactos o desactualizados</li>
                <li><strong className="text-white">Cancelación / Supresión:</strong> pedir la eliminación de tus datos cuando ya no sean necesarios</li>
                <li><strong className="text-white">Oposición:</strong> oponerte al tratamiento de tus datos en determinados casos</li>
                <li><strong className="text-white">Revocación del consentimiento:</strong> retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="mb-4">
                Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:contacto@rbxlatamstore.com" className="text-pixel-accent hover:underline">contacto@rbxlatamstore.com</a> o a través de nuestros canales oficiales. Responderemos en un plazo razonable, normalmente dentro de las 24 a 72 horas hábiles.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="font-bold text-red-400">Excepción:</p>
                <p className="mt-2">
                  En casos de fraude comprobado o inclusión en la Blacklist, RLS podrá conservar los datos del usuario aunque solicite su eliminación, en virtud del interés legítimo de prevenir nuevas estafas y proteger a la comunidad.
                </p>
              </div>
            </section>

            {/* 11. Menores de Edad */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Menores de Edad</h2>
              <p className="mb-4">
                Una parte importante de nuestros usuarios son menores de edad, dado el público de la plataforma Roblox. Por ello:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Los menores de edad solo deben utilizar nuestros servicios con el consentimiento de sus padres o tutores legales</li>
                <li>Los padres o tutores son responsables de supervisar las compras y el uso de los datos personales del menor</li>
                <li>RLS no recopila intencionadamente información sensible de menores más allá de lo necesario para procesar una compra (nombre de usuario de Roblox y datos básicos de contacto)</li>
              </ul>
              <p className="font-semibold text-yellow-400">
                Si un padre o tutor detecta que su hijo proporcionó datos sin autorización, puede solicitar su eliminación escribiéndonos a los canales oficiales.
              </p>
            </section>

            {/* 13. Legislación */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Legislación Aplicable</h2>
              <p className="mb-4">
                La presente Política de Privacidad se rige por las leyes de la República del Perú, en particular por la <strong className="text-white">Ley N.º 29733 – Ley de Protección de Datos Personales</strong> y su Reglamento.
              </p>
              <p>
                Cualquier controversia derivada del tratamiento de los datos personales será sometida a la jurisdicción de los tribunales competentes de la ciudad de Lima, salvo que la normativa aplicable disponga lo contrario.
              </p>
            </section>

            {/* 14. Contacto */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contacto</h2>
              <p className="mb-4">Para cualquier consulta, reclamo o ejercicio de derechos relacionados con tus datos personales, puedes contactarnos a través de:</p>
              <ul className="space-y-2">
                <li><strong className="text-white">Página web oficial:</strong> <a href="https://rbxlatamstore.com/" className="text-pixel-accent hover:underline">https://rbxlatamstore.com/</a></li>
                <li><strong className="text-white">Discord oficial:</strong> <a href="https://discord.gg/34szpZrtqE" className="text-pixel-accent hover:underline">https://discord.gg/34szpZrtqE</a></li>
                <li><strong className="text-white">WhatsApp:</strong> <span className="text-pixel-accent">+51 926 536 673</span></li>
                <li><strong className="text-white">Correo electrónico:</strong> <a href="mailto:contacto@rbxlatamstore.com" className="text-pixel-accent hover:underline">contacto@rbxlatamstore.com</a></li>
              </ul>
            </section>

            {/* Aceptación Final */}
            <div className="bg-pixel-accent/10 border border-pixel-accent/30 rounded-2xl p-6 mt-8">
              <p className="text-center font-bold text-white">
                Al utilizar los servicios de RLS – RBX Latam Store, confirmas que has leído y aceptado esta Política de Privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
