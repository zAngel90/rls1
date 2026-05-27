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
      <div className="max-w-5xl mx-auto px-6 py-12 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xl text-pixel-accent font-bold mb-2">
            RLS — RBX Latam Store
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Última actualización: 26/05/2026
          </p>

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            {/* 1. Introducción y Aceptación */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introducción y Aceptación</h2>
              <p className="mb-4">Bienvenido a RLS – RBX Latam Store (en adelante, "RLS", "la Tienda" o "nosotros"). RLS es una tienda digital especializada en la venta de Robux, items limited de Roblox y artículos de juegos para la comunidad latinoamericana.</p>
              <p className="mb-4">Al acceder, navegar, contactarnos o realizar una compra a través de cualquiera de nuestros canales oficiales, el usuario (en adelante, "el Cliente" o "tú") declara haber leído, entendido y aceptado en su totalidad los presentes Términos y Condiciones, así como nuestra Política de Privacidad.</p>
              <p className="mb-4">Si no estás de acuerdo con alguno de los puntos descritos, te pedimos no utilizar nuestros servicios ni realizar compras en la Tienda.</p>
            </section>

            {/* 2. Definiciones */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definiciones</h2>
              <p className="mb-4">Para efectos de claridad, los siguientes términos tendrán el significado que se les asigna:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
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

            {/* 3. Canales de Venta y Compra */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Canales de Venta y Compra</h2>
              <p className="mb-4">RLS opera a través de dos canales de venta claramente diferenciados. El Cliente debe elegir un único canal para cada compra y respetar las reglas de ese canal.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">3.1 Compras a través de la página web</h3>
              <p className="mb-4">Las compras realizadas en nuestra página web oficial se procesan automáticamente a través del sistema de la Tienda. El Cliente sigue el flujo de compra, paga mediante los métodos habilitados y recibe el producto según el método de entrega seleccionado.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">3.2 Compras a través de redes sociales</h3>
              <p className="mb-4">Cuando el Cliente se contacta con RLS por una red social oficial (Instagram, Discord, WhatsApp, TikTok, etc.) para coordinar una compra, toda la transacción debe completarse exclusivamente por ese mismo canal: la coordinación del pago, el envío del comprobante y la entrega del producto se realizan ahí, sin pasar por la página web.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">3.3 Prohibición de uso cruzado de canales (intento de estafa)</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="font-bold text-red-400 mb-3">Está terminantemente prohibido:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Realizar una compra por redes sociales y luego intentar usar el mismo comprobante de pago en la página web para reclamar el producto por segunda vez.</li>
                <li>Realizar una compra en la página web y luego presentar el mismo comprobante en redes sociales pretendiendo no haber recibido el producto.</li>
                <li>Reutilizar comprobantes ya canjeados en cualquier canal de RLS.</li>
                <li>Modificar, editar o falsificar comprobantes de pago.</li>
                <li>Cualquier conducta de este tipo será considerada un intento de estafa y aplicará automáticamente la Política de Lista Negra (sección 10.2), además de las acciones legales correspondientes.</li>
              </ul>
              </div>
            </section>

            {/* 4. Productos Ofrecidos */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Productos Ofrecidos</h2>
              <p className="mb-4">RLS comercializa los siguientes productos digitales:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Robux:</strong> entregados mediante Gamepass o Grupo.</li>
                <li><strong className="text-white">Items Limited de Roblox:</strong> entregados mediante el sistema de trade.</li>
                <li><strong className="text-white">Artículos de juegos:</strong> ítems, mascotas, monedas in-game, gamepasses y similares para distintos juegos compatibles.</li>
                <li>Todos los productos vendidos por RLS son bienes digitales y, por su naturaleza, no son reembolsables una vez procesada la entrega, salvo las excepciones detalladas en la sección 8.</li>
              </ul>
            </section>

            {/* 5. Precios y Métodos de Pago */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Precios y Métodos de Pago</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">5.1 Precios</h3>
              <p className="mb-4">Los precios de todos los productos están claramente indicados en la Tienda y en cada canal de venta. Los precios pueden modificarse en cualquier momento sin previo aviso. El precio aplicable a una compra es el vigente al momento de confirmar la transacción.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">5.2 Métodos de pago aceptados</h3>
              <p className="mb-4">Aceptamos pagos a través de los siguientes medios peruanos:</p>
              <p className="mb-4">BCP — transferencia o depósito</p>
              <p className="mb-4">Interbank — transferencia o depósito</p>
              <p className="mb-4">Yape</p>
              <p className="mb-4">Plin</p>
              <p className="mb-4">El Cliente debe realizar el pago únicamente a las cuentas oficiales de RLS indicadas por nuestro equipo o por la página web. RLS no se hace responsable por pagos realizados a cuentas que no sean las oficiales, ni por transferencias enviadas a intermediarios no autorizados.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">5.3 Confirmación del pago</h3>
              <p className="mb-4">El pago se considerará completado únicamente cuando el equipo de RLS o el sistema automático haya verificado y confirmado la transacción. El envío de un comprobante no implica entrega inmediata hasta que se valide su autenticidad.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">5.4 Fraudes, contracargos y reversiones</h3>
              <p className="mb-4">En caso de fraude, contracargo (chargeback), reversión injustificada o cualquier intento de manipulación del pago, RLS se reserva el derecho de:</p>
              <p className="mb-4">Cancelar la entrega del producto.</p>
              <p className="mb-4">Recuperar el producto ya entregado por los medios disponibles.</p>
              <p className="mb-4">Incluir al usuario en la Lista Negra (sección 10.2).</p>
            </section>

            {/* 6. Métodos de Entrega */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Métodos de Entrega</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">6.1 Entrega de Robux</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Vía Gamepass:</strong> Los Robux se entregan mediante la compra de un Gamepass del Cliente. Este método cubre el 30 % de comisión que cobra Roblox.</li>
              </ul>
              <p className="mb-4">Vía Grupo: Los Robux se entregan a través del sistema de payout de nuestros grupos oficiales. Requisito obligatorio: el Cliente debe haber estado dentro del grupo por un mínimo de 15 días antes de realizar la compra.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">6.2 Entrega de Items Limited</h3>
              <p className="mb-4">La entrega se realiza únicamente a través del sistema oficial de trade (intercambio) de Roblox. Para poder recibir el producto, el Cliente debe cumplir obligatoriamente con los siguientes requisitos antes de la compra:</p>
              <p className="mb-4">Roblox Premium (Roblox+) activo en la cuenta, ya que Roblox solo permite trades a cuentas con membresía Premium.</p>
              <p className="mb-4">Poseer al menos un item limited de bajo valor en su inventario, necesario para que RLS pueda ejecutar el intercambio.</p>
              <p className="mb-4">Tener las solicitudes de trade habilitadas en la configuración de privacidad de la cuenta.</p>
              <p className="mb-4">Si el Cliente no cumple con alguno de estos requisitos, la entrega quedará en espera hasta su regularización. No se otorgarán reembolsos por imposibilidad de entrega derivada del incumplimiento de estos requisitos.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">6.3 Entrega de Artículos de Juegos</h3>
              <p className="mb-4">La entrega de artículos, gamepasses, mascotas, ítems y demás productos de juegos se realiza de manera inmediata mediante el sistema interno del juego correspondiente (regalo, trade, gift o similar) una vez confirmado el pago.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">6.4 Responsabilidad del Cliente sobre el método elegido</h3>
              <p className="mb-4">El Cliente es responsable de elegir correctamente el método de entrega al momento de la compra y de cumplir con sus requisitos. RLS no se hace responsable por errores derivados de una selección incorrecta.</p>
            </section>

            {/* 7. Plazos y Proceso de Entrega */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Plazos y Proceso de Entrega</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Producto</th>
                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Método</th>
                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Plazo</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Robux</td>
                      <td className="px-4 py-3">Gamepass</td>
                      <td className="px-4 py-3">5 días hábiles (los Robux quedan pendientes en Roblox hasta su liberación)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Robux</td>
                      <td className="px-4 py-3">Grupo</td>
                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato (cumpliendo los 15 días de permanencia)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3">Items Limited</td>
                      <td className="px-4 py-3">Trade</td>
                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato (cumpliendo los requisitos de la sección 6.2)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Artículos de juegos</td>
                      <td className="px-4 py-3">Gift / Trade / in-game</td>
                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 mb-4">
                <span className="text-yellow-400 font-semibold">Demoras por causas externas:</span> Si la entrega se ve retrasada por motivos ajenos a RLS (caídas de Roblox, mantenimiento, fallas del juego, lentitud de la pasarela de pago, etc.), el Cliente acepta esperar un plazo razonable hasta completar la transacción. Estas demoras no se considerarán incumplimiento por parte de RLS.
              </p>
            </section>

            {/* 8. Política de Reembolsos y Devoluciones */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Política de Reembolsos y Devoluciones</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">8.1 Regla general</h3>
              <p className="mb-4">Por tratarse de bienes digitales de entrega irreversible, todos los productos vendidos por RLS son no reembolsables una vez procesada la entrega.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">8.2 Excepciones</h3>
              <p className="mb-4">RLS podrá evaluar un reembolso parcial o total únicamente en los siguientes casos:</p>
              <p className="mb-4">El pago fue cobrado pero la entrega no se inició por causa imputable a RLS.</p>
              <p className="mb-4">El producto entregado no corresponde al adquirido y el error fue verificado por nuestro equipo.</p>
              <p className="mb-4">Imposibilidad técnica permanente para entregar el producto por causa exclusiva de RLS.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">8.3 Casos no reembolsables</h3>
              <p className="mb-4">No se otorgarán reembolsos cuando la imposibilidad de entrega o el error se deba a:</p>
              <p className="mb-4">Nombre de usuario mal escrito o cuenta incorrecta proporcionada por el Cliente.</p>
              <p className="mb-4">No cumplir con los 15 días de permanencia en el grupo.</p>
              <p className="mb-4">Falta de Roblox Premium, item limited en inventario o solicitudes de trade desactivadas.</p>
              <p className="mb-4">No aceptar el trade o gift dentro del plazo establecido por Roblox.</p>
              <p className="mb-4">Arrepentimiento, cambio de opinión o errores propios del Cliente.</p>
            </section>

            {/* 9. Responsabilidades del Cliente */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Responsabilidades del Cliente</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">El Cliente se compromete a:</strong></li>
                <li>Mantener su cuenta de Roblox segura, activa y debidamente configurada.</li>
                <li>Proporcionar información veraz al momento de la compra (nombre de usuario, método de entrega, datos de contacto, etc.).</li>
                <li>Cumplir con todos los requisitos del método de entrega elegido.</li>
                <li>Verificar que está pagando a una cuenta oficial de RLS.</li>
                <li>No realizar compras fraudulentas, contracargos abusivos ni violar las políticas de Roblox.</li>
                <li>No utilizar bots, scripts, VPNs ni herramientas externas para manipular precios, promociones o el sistema de entregas.</li>
                <li>No revender productos haciéndose pasar por RLS ni utilizar nuestra marca sin autorización.</li>
              </ul>
            </section>

            {/* 10. Conductas Prohibidas y Sanciones */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Conductas Prohibidas y Sanciones</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">10.1 Conductas prohibidas</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <p className="font-bold text-red-400 mb-3">Queda terminantemente prohibido:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Intentar estafar a RLS por cualquier medio, incluyendo el uso cruzado de comprobantes entre canales (ver sección 3.3).</li>
                <li>Suplantar la identidad de RLS, su personal o sus colaboradores.</li>
                <li>Realizar amenazas, insultos o acoso al equipo de soporte o miembros de los grupos.</li>
                <li>Difundir información falsa, difamatoria o engañosa sobre RLS en redes sociales, foros, reseñas o cualquier otro medio.</li>
                <li>Intentar vulnerar la seguridad de la Tienda, los grupos o cualquier sistema asociado.</li>
                <li>Falsificar, editar o manipular comprobantes de pago.</li>
                <li>Utilizar los servicios de RLS para fines ilegales.</li>
              </ul>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">10.2 Política de Lista Negra (Blacklist)</h3>
                <p className="mt-4">Cualquier Cliente que intente estafar a RLS, realice contracargos fraudulentos, reutilice comprobantes entre canales, suplante identidades o incumpla cualquier norma que afecte el funcionamiento, la reputación o la integridad de la Tienda, será incluido de manera permanente en nuestra Lista Negra (Blacklist).</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Consecuencias de estar en la Blacklist:</strong></li>
                <li>Baneo inmediato y permanente de todos los grupos oficiales de RLS en Roblox.</li>
                <li>Bloqueo definitivo en todos los canales oficiales (página web, Discord, redes sociales, soporte).</li>
                <li>Negación total de servicios futuros, incluso si el usuario intenta acceder a través de cuentas alternativas, nombres distintos o intermediarios.</li>
                <li>En casos de fraude comprobado, el caso podrá ser compartido con tiendas aliadas y reportado a Roblox, pasarelas de pago, entidades bancarias y, cuando corresponda, a las autoridades competentes.</li>
                <li>La inclusión en la Blacklist es una medida definitiva e inapelable, salvo que el equipo de RLS, a su sola discreción, determine lo contrario tras una revisión interna del caso.</li>
              </ul>
              </div>
            </section>

            {/* 11. Cuentas, Verificación y Menores de Edad */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Cuentas, Verificación y Menores de Edad</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">11.1 RLS podrá solicitar verificación adicional (captura del comprobante, confirmación de usuario, validación de identidad, etc.) cuando una transacción presente indicios de fraude o cuando lo considere necesario.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">11.2 Los menores de edad solo podrán realizar compras con el consentimiento expreso de sus padres o tutores legales, quienes serán los responsables últimos de la transacción.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">11.3 RLS nunca solicita contraseñas ni acceso directo a la cuenta de Roblox del Cliente. Cualquier persona que diga representar a RLS y pida tu contraseña debe ser reportada de inmediato; RLS no se hace responsable por estafas cometidas por terceros que se hacen pasar por la Tienda.</h3>
            </section>

            {/* 12. Disponibilidad del Servicio */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Disponibilidad del Servicio</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">12.1 RLS hará lo razonablemente posible para mantener la Tienda y sus canales operativos de manera continua, pero no garantiza la disponibilidad ininterrumpida del servicio.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">12.2 Podrán existir periodos de mantenimiento, actualizaciones o interrupciones por causas externas (caídas de Roblox, fallas del proveedor de pagos, problemas de conectividad, etc.).</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">12.3 RLS se reserva el derecho de suspender, modificar o discontinuar cualquier producto, promoción, método de pago o método de entrega en cualquier momento y sin previo aviso.</h3>
            </section>

            {/* 13. Propiedad Intelectual y Marca */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Propiedad Intelectual y Marca</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">13.1 La marca RLS – RBX Latam Store, su logotipo, nombre comercial, así como los diseños, banners, gráficos y materiales creados por RLS para eventos, campañas y promociones, son de propiedad exclusiva de RLS y se encuentran protegidos por las leyes de propiedad intelectual aplicables.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">13.2 La mayoría de los productos comercializados (Robux, items, gamepasses, limiteds, avatares, juegos y demás contenido relacionado) son propiedad de Roblox Corporation o de sus respectivos creadores dentro de la plataforma. RLS actúa únicamente como intermediario para facilitar su adquisición y entrega.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">13.3 Roblox® y todas sus marcas, logos y elementos asociados son propiedad de Roblox Corporation. RLS no está oficialmente afiliada, asociada, autorizada ni respaldada por Roblox Corporation. Los nombres de juegos, items y productos mencionados se utilizan únicamente con fines descriptivos e informativos.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">13.4 Queda prohibida la reproducción total o parcial de la marca, logotipos o diseños propios de RLS sin autorización previa por escrito.</h3>
            </section>

            {/* 14. Privacidad y Protección de Datos */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Privacidad y Protección de Datos</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">14.1 RLS se compromete a proteger la privacidad de sus usuarios. Los datos personales proporcionados (nombre de usuario de Roblox, contacto, comprobantes de pago) serán utilizados exclusivamente para:</h3>
              <p className="mb-4">Procesar la compra y la entrega del producto.</p>
              <p className="mb-4">Brindar soporte al cliente.</p>
              <p className="mb-4">Mejorar la experiencia de compra.</p>
              <p className="mb-4">Prevenir fraudes y abusos.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">14.2 No compartimos, vendemos ni cedemos información personal a terceros, salvo cuando sea estrictamente necesario para procesar pagos a través de pasarelas autorizadas, o cuando una autoridad competente lo requiera por ley.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">14.3 El Cliente podrá solicitar la modificación o eliminación de sus datos personales escribiéndonos por los canales oficiales.</h3>
            </section>

            {/* 15. Soporte y Resolución de Disputas */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Soporte y Resolución de Disputas</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">15.1 Cualquier inconveniente, queja o reclamo debe comunicarse directamente al equipo de soporte de RLS a través de los canales oficiales, antes de iniciar contracargos, denuncias en redes sociales o cualquier acción externa.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">15.2 RLS se compromete a responder y dar seguimiento a los reclamos en un plazo razonable, normalmente dentro de las 24 a 72 horas hábiles.</h3>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">15.3 El Cliente acepta que la resolución directa con RLS es la vía prioritaria antes de recurrir a cualquier otra instancia.</h3>
            </section>

            {/* 16. Limitación de Responsabilidad */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Limitación de Responsabilidad</h2>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">16.1 RLS no se hace responsable por daños o pérdidas, directos o indirectos, derivados de:</h3>
              <p className="mb-4">El uso o imposibilidad de uso de nuestros servicios.</p>
              <p className="mb-4">Cambios en las políticas, precios o sistemas de Roblox u otras plataformas.</p>
              <p className="mb-4">Pérdida, suspensión o baneo de cuentas de Roblox por causas ajenas a RLS.</p>
              <p className="mb-4">Errores cometidos por el Cliente al ingresar datos al momento de la compra.</p>
              <p className="mb-4">Estafas cometidas por terceros que se hagan pasar por RLS fuera de nuestros canales oficiales.</p>
              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">16.2 La responsabilidad total de RLS frente a cualquier reclamo se limitará, como máximo, al monto pagado por el Cliente en la transacción objeto del reclamo.</h3>
            </section>

            {/* 17. Modificaciones de los Términos */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">17. Modificaciones de los Términos</h2>
              <p className="mb-4">RLS se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la Tienda o en los canales oficiales. Se recomienda revisar esta sección periódicamente. El uso continuado de los servicios después de cualquier modificación implica la aceptación de los nuevos términos.</p>
            </section>

            {/* 18. Legislación Aplicable y Jurisdicción */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">18. Legislación Aplicable y Jurisdicción</h2>
              <p className="mb-4">Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia derivada de su interpretación o ejecución será sometida a la jurisdicción de los tribunales competentes de la ciudad de Lima, salvo que la normativa de protección al consumidor aplicable disponga lo contrario.</p>
            </section>

            {/* 19. Contacto */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">19. Contacto</h2>
              <p className="mb-4">Para cualquier consulta, reclamo o solicitud relacionada con estos Términos y Condiciones, puedes contactarnos a través de los siguientes canales oficiales:</p>
              <ul className="space-y-2 mb-4">
                <li><span className="text-gray-400">Página web oficial:</span> <a href="https://rbxlatamstore.com/" className="text-pixel-accent hover:underline">https://rbxlatamstore.com/</a></li>
                <li><span className="text-gray-400">Discord oficial:</span> <a href="https://discord.gg/hCbXgCGJWr" className="text-pixel-accent hover:underline">https://discord.gg/hCbXgCGJWr</a></li>
                <li><span className="text-gray-400">WhatsApp:</span> <a href="https://wa.me/message/VZYKMCR3JCGCP1" className="text-pixel-accent hover:underline">+51 926 536 673</a></li>
                <li><span className="text-gray-400">TikTok:</span> <a href="https://www.tiktok.com/@rlsrobuxstore" className="text-pixel-accent hover:underline">@rlsrobuxstore</a></li>
                <li><span className="text-gray-400">Correo electrónico:</span> <a href="mailto:soporte@rbxlatamstore.com" className="text-pixel-accent hover:underline">soporte@rbxlatamstore.com</a></li>
              </ul>
            </section>

            {/* Aceptación Final */}
            <div className="bg-pixel-accent/10 border border-pixel-accent/30 rounded-2xl p-6 mt-8">
              <p className="text-center font-bold text-white">
                Al realizar una compra en RLS – RBX Latam Store, confirmas que has leído y aceptado en su totalidad los presentes Términos y Condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
