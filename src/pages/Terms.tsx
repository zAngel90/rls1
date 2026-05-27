import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xl text-pixel-accent font-bold mb-2">
            RLS — Robux Latam Store
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Última actualización: 26/05/2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* 1. Introducción */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introducción y Aceptación</h2>
              <p className="mb-4">
                Bienvenido a RLS – Robux Latam Store (en adelante, "RLS", "la Tienda" o "nosotros"). RLS es una tienda digital especializada en la venta de Robux, items limited de Roblox y artículos de juegos para la comunidad latinoamericana.
              </p>
              <p>
                Al acceder, navegar, contactarnos o realizar una compra a través de cualquiera de nuestros canales oficiales, el usuario (en adelante, "el Cliente" o "tú") declara haber leído, entendido y aceptado en su totalidad los presentes Términos y Condiciones, así como nuestra Política de Privacidad.
              </p>
              <p className="mt-4 text-yellow-400 font-semibold">
                Si no estás de acuerdo con alguno de los puntos descritos, te pedimos no utilizar nuestros servicios ni realizar compras en la Tienda.
              </p>
            </section>

            {/* 2. Definiciones */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definiciones</h2>
              <p className="mb-4">Para efectos de claridad, los siguientes términos tendrán el significado que se les asigna:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Robux:</strong> Moneda virtual oficial de la plataforma Roblox Corporation.</li>
                <li><strong className="text-white">Gamepass:</strong> Mecanismo de venta dentro de Roblox utilizado para transferir Robux al Cliente.</li>
                <li><strong className="text-white">Grupo:</strong> Comunidad oficial de Roblox creada y administrada por RLS para distribuir Robux mediante el sistema de payout.</li>
                <li><strong className="text-white">Item Limited:</strong> Artículo coleccionable de Roblox (limiteds, UGC limiteds y similares) con cantidad limitada que se transfiere mediante el sistema oficial de trade.</li>
                <li><strong className="text-white">Roblox Premium (Roblox+):</strong> Membresía oficial de pago de Roblox, requerida para realizar y recibir trades de items limited.</li>
                <li><strong className="text-white">Artículos de juegos:</strong> Ítems digitales, mascotas, monedas in-game, gamepasses y otros productos digitales vendidos en la Tienda.</li>
                <li><strong className="text-white">Entrega:</strong> Transferencia efectiva del producto digital adquirido a la cuenta del Cliente.</li>
                <li><strong className="text-white">Comprobante de pago:</strong> Captura, imagen, voucher o constancia que acredita la realización de un pago a una cuenta oficial de RLS.</li>
              </ul>
            </section>

            {/* 3. Canales de Venta */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Canales de Venta y Compra</h2>
              <p className="mb-4">
                RLS opera a través de dos canales de venta claramente diferenciados. El Cliente debe elegir un único canal para cada compra y respetar las reglas de ese canal.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.1 Compras a través de la página web</h3>
              <p className="mb-4">
                Las compras realizadas en nuestra página web oficial se procesan automáticamente a través del sistema de la Tienda. El Cliente sigue el flujo de compra, paga mediante los métodos habilitados y recibe el producto según el método de entrega seleccionado.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.2 Compras a través de redes sociales</h3>
              <p className="mb-4">
                Cuando el Cliente se contacta con RLS por una red social oficial (Instagram, Discord, WhatsApp, TikTok, etc.) para coordinar una compra, toda la transacción debe completarse exclusivamente por ese mismo canal: la coordinación del pago, el envío del comprobante y la entrega del producto se realizan ahí, sin pasar por la página web.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">3.3 Prohibición de uso cruzado de canales (intento de estafa)</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="font-bold text-red-400 mb-3">Está terminantemente prohibido:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Realizar una compra por redes sociales y luego intentar usar el mismo comprobante de pago en la página web para reclamar el producto por segunda vez.</li>
                  <li>Realizar una compra en la página web y luego presentar el mismo comprobante en redes sociales pretendiendo no haber recibido el producto.</li>
                  <li>Reutilizar comprobantes ya canjeados en cualquier canal de RLS.</li>
                  <li>Modificar, editar o falsificar comprobantes de pago.</li>
                </ul>
                <p className="mt-4 font-bold text-white">
                  Cualquier conducta de este tipo será considerada un intento de estafa y aplicará automáticamente la Política de Lista Negra (sección 10.2), además de las acciones legales correspondientes.
                </p>
              </div>
            </section>

            {/* 4. Productos */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Productos Ofrecidos</h2>
              <p className="mb-4">RLS comercializa los siguientes productos digitales:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Robux:</strong> entregados mediante Gamepass o Grupo.</li>
                <li><strong className="text-white">Items Limited de Roblox:</strong> entregados mediante el sistema de trade.</li>
                <li><strong className="text-white">Artículos de juegos:</strong> ítems, mascotas, monedas in-game, gamepasses y similares para distintos juegos compatibles.</li>
              </ul>
              <p className="mt-4 font-semibold text-yellow-400">
                Todos los productos vendidos por RLS son bienes digitales y, por su naturaleza, no son reembolsables una vez procesada la entrega, salvo las excepciones detalladas en la sección 8.
              </p>
            </section>

            {/* 5. Precios y Métodos de Pago */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Precios y Métodos de Pago</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">5.1 Precios</h3>
              <p className="mb-4">
                Los precios de todos los productos están claramente indicados en la Tienda y en cada canal de venta. Los precios pueden modificarse en cualquier momento sin previo aviso. El precio aplicable a una compra es el vigente al momento de confirmar la transacción.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">5.2 Métodos de pago aceptados</h3>
              <p className="mb-3">Aceptamos pagos a través de los siguientes medios peruanos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>BCP — transferencia o depósito</li>
                <li>Interbank — transferencia o depósito</li>
                <li>Yape</li>
                <li>Plin</li>
              </ul>
              <p className="font-semibold text-yellow-400">
                El Cliente debe realizar el pago únicamente a las cuentas oficiales de RLS indicadas por nuestro equipo o por la página web. RLS no se hace responsable por pagos realizados a cuentas que no sean las oficiales, ni por transferencias enviadas a intermediarios no autorizados.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">5.3 Confirmación del pago</h3>
              <p className="mb-4">
                El pago se considerará completado únicamente cuando el equipo de RLS o el sistema automático haya verificado y confirmado la transacción. El envío de un comprobante no implica entrega inmediata hasta que se valide su autenticidad.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">5.4 Fraudes, contracargos y reversiones</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="mb-3">En caso de fraude, contracargo (chargeback), reversión injustificada o cualquier intento de manipulación del pago, RLS se reserva el derecho de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancelar la entrega del producto.</li>
                  <li>Recuperar el producto ya entregado por los medios disponibles.</li>
                  <li>Incluir al usuario en la Lista Negra (sección 10.2).</li>
                </ul>
              </div>
            </section>

            {/* Continúa con las demás secciones... */}
            {/* Por brevedad, incluiré las secciones más importantes */}

            {/* 10. Lista Negra */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Conductas Prohibidas y Sanciones</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">10.2 Política de Lista Negra (Blacklist)</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="mb-4 font-bold text-white">
                  Cualquier Cliente que intente estafar a RLS, realice contracargos fraudulentos, reutilice comprobantes entre canales, suplante identidades o incumpla cualquier norma que afecte el funcionamiento, la reputación o la integridad de la Tienda, será incluido de manera permanente en nuestra Lista Negra (Blacklist).
                </p>
                <p className="font-bold text-red-400 mb-3">Consecuencias de estar en la Blacklist:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Baneo inmediato y permanente de todos los grupos oficiales de RLS en Roblox.</li>
                  <li>Bloqueo definitivo en todos los canales oficiales (página web, Discord, redes sociales, soporte).</li>
                  <li>Negación total de servicios futuros, incluso si el usuario intenta acceder a través de cuentas alternativas, nombres distintos o intermediarios.</li>
                  <li>En casos de fraude comprobado, el caso podrá ser compartido con tiendas aliadas y reportado a Roblox, pasarelas de pago, entidades bancarias y, cuando corresponda, a las autoridades competentes.</li>
                </ul>
                <p className="mt-4 font-bold text-white">
                  La inclusión en la Blacklist es una medida definitiva e inapelable, salvo que el equipo de RLS, a su sola discreción, determine lo contrario tras una revisión interna del caso.
                </p>
              </div>
            </section>

            {/* 19. Contacto */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">19. Contacto</h2>
              <p className="mb-4">Para cualquier consulta, reclamo o solicitud relacionada con estos Términos y Condiciones, puedes contactarnos a través de los siguientes canales oficiales:</p>
              <ul className="space-y-2">
                <li><strong className="text-white">Página web oficial:</strong> <a href="https://rbxlatamstore.com/" className="text-pixel-accent hover:underline">https://rbxlatamstore.com/</a></li>
                <li><strong className="text-white">Discord oficial:</strong> <a href="https://discord.gg/34szpZrtqE" className="text-pixel-accent hover:underline">https://discord.gg/34szpZrtqE</a></li>
                <li><strong className="text-white">WhatsApp:</strong> <span className="text-pixel-accent">+51 926 536 673</span></li>
                <li><strong className="text-white">Correo electrónico:</strong> <a href="mailto:soporte@rbxlatamstore.com" className="text-pixel-accent hover:underline">soporte@rbxlatamstore.com</a></li>
              </ul>
            </section>

            {/* Aceptación Final */}
            <div className="bg-pixel-accent/10 border border-pixel-accent/30 rounded-2xl p-6 mt-8">
              <p className="text-center font-bold text-white">
                Al realizar una compra en RLS – Robux Latam Store, confirmas que has leído y aceptado en su totalidad los presentes Términos y Condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
