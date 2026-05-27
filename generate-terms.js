import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo de términos
const terminosPath = path.join(__dirname, '..', 'terminos.txt');
let content = fs.readFileSync(terminosPath, 'utf-8');

// Reemplazar Robux Latam Store por RBX Latam Store
content = content.replace(/Robux Latam Store/g, 'RBX Latam Store');

// Dividir en líneas
const lines = content.split('\n');

// Generar el componente React
let output = `import { ArrowLeft } from 'lucide-react';
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
`;

let currentSection = '';
let inList = false;
let inWarningBox = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Saltar las primeras líneas de instrucción
  if (i < 8) continue;
  
  // Detectar títulos de secciones (números seguidos de punto)
  if (/^\d+\./.test(line) && !/^\d+\.\d+/.test(line)) {
    if (inList) {
      output += `              </ul>\n`;
      inList = false;
    }
    if (inWarningBox) {
      output += `              </div>\n`;
      inWarningBox = false;
    }
    if (currentSection) {
      output += `            </section>\n\n`;
    }
    output += `            {/* ${line} */}\n`;
    output += `            <section>\n`;
    output += `              <h2 className="text-2xl font-bold text-white mb-4">${line}</h2>\n`;
    
    // Sección 7: Agregar tabla de plazos
    if (line.includes('7. Plazos y Proceso de Entrega')) {
      output += `              <div className="overflow-x-auto my-6">\n`;
      output += `                <table className="w-full border border-white/10 rounded-lg overflow-hidden">\n`;
      output += `                  <thead className="bg-white/5">\n`;
      output += `                    <tr>\n`;
      output += `                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Producto</th>\n`;
      output += `                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Método</th>\n`;
      output += `                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Plazo</th>\n`;
      output += `                    </tr>\n`;
      output += `                  </thead>\n`;
      output += `                  <tbody className="text-sm">\n`;
      output += `                    <tr className="border-b border-white/5">\n`;
      output += `                      <td className="px-4 py-3">Robux</td>\n`;
      output += `                      <td className="px-4 py-3">Gamepass</td>\n`;
      output += `                      <td className="px-4 py-3">5 días hábiles (los Robux quedan pendientes en Roblox hasta su liberación)</td>\n`;
      output += `                    </tr>\n`;
      output += `                    <tr className="border-b border-white/5">\n`;
      output += `                      <td className="px-4 py-3">Robux</td>\n`;
      output += `                      <td className="px-4 py-3">Grupo</td>\n`;
      output += `                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato (cumpliendo los 15 días de permanencia)</td>\n`;
      output += `                    </tr>\n`;
      output += `                    <tr className="border-b border-white/5">\n`;
      output += `                      <td className="px-4 py-3">Items Limited</td>\n`;
      output += `                      <td className="px-4 py-3">Trade</td>\n`;
      output += `                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato (cumpliendo los requisitos de la sección 6.2)</td>\n`;
      output += `                    </tr>\n`;
      output += `                    <tr>\n`;
      output += `                      <td className="px-4 py-3">Artículos de juegos</td>\n`;
      output += `                      <td className="px-4 py-3">Gift / Trade / in-game</td>\n`;
      output += `                      <td className="px-4 py-3 text-green-400 font-semibold">Inmediato</td>\n`;
      output += `                    </tr>\n`;
      output += `                  </tbody>\n`;
      output += `                </table>\n`;
      output += `              </div>\n`;
      // Saltar las líneas de la tabla en el archivo original
      while (i < lines.length && !lines[i].trim().includes('Demoras por causas externas')) {
        i++;
      }
      if (i < lines.length) {
        output += `              <p className="mt-6 mb-4">\n`;
        output += `                <span className="text-yellow-400 font-semibold">Demoras por causas externas:</span> ${lines[i].trim().replace('Demoras por causas externas: ', '')}\n`;
        output += `              </p>\n`;
      }
      currentSection = line;
      continue;
    }
    
    // Sección 19: Formato especial de contacto
    if (line.includes('19. Contacto')) {
      output += `              <p className="mb-4">Para cualquier consulta, reclamo o solicitud relacionada con estos Términos y Condiciones, puedes contactarnos a través de los siguientes canales oficiales:</p>\n`;
      output += `              <ul className="space-y-2 mb-4">\n`;
      output += `                <li><span className="text-gray-400">Página web oficial:</span> <a href="https://rbxlatamstore.com/" className="text-pixel-accent hover:underline">https://rbxlatamstore.com/</a></li>\n`;
      output += `                <li><span className="text-gray-400">Discord oficial:</span> <a href="https://discord.gg/hCbXgCGJWr" className="text-pixel-accent hover:underline">https://discord.gg/hCbXgCGJWr</a></li>\n`;
      output += `                <li><span className="text-gray-400">WhatsApp:</span> <a href="https://wa.me/message/VZYKMCR3JCGCP1" className="text-pixel-accent hover:underline">+51 926 536 673</a></li>\n`;
      output += `                <li><span className="text-gray-400">TikTok:</span> <a href="https://www.tiktok.com/@rlsrobuxstore" className="text-pixel-accent hover:underline">@rlsrobuxstore</a></li>\n`;
      output += `                <li><span className="text-gray-400">Correo electrónico:</span> <a href="mailto:soporte@rbxlatamstore.com" className="text-pixel-accent hover:underline">soporte@rbxlatamstore.com</a></li>\n`;
      output += `              </ul>\n`;
      // Saltar las líneas de contacto en el archivo original
      while (i < lines.length && !lines[i].trim().includes('Al realizar una compra')) {
        i++;
      }
      currentSection = line;
      continue;
    }
    
    currentSection = line;
    continue;
  }
  
  // Detectar subsecciones (número.número)
  if (/^\d+\.\d+/.test(line)) {
    if (inList) {
      output += `              </ul>\n`;
      inList = false;
    }
    output += `              <h3 className="text-base font-normal text-gray-400 mb-3 mt-6">${line}</h3>\n`;
    continue;
  }
  
  // Detectar líneas vacías
  if (line === '') continue;
  
  // Detectar inicio de listas de advertencia
  if (line.includes('terminantemente prohibido') || line.includes('Está terminantemente prohibido')) {
    output += `              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">\n`;
    output += `                <p className="font-bold text-red-400 mb-3">${line}</p>\n`;
    output += `                <ul className="list-disc list-inside space-y-2 ml-4">\n`;
    inWarningBox = true;
    inList = true;
    continue;
  }
  
  // Detectar listas (líneas que empiezan con conceptos clave)
  if (line.includes(':') && !line.includes('http') && !line.includes('@')) {
    const parts = line.split(':');
    if (parts.length === 2 && parts[0].length < 50) {
      if (!inList) {
        output += `              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">\n`;
        inList = true;
      }
      output += `                <li><strong className="text-white">${parts[0]}:</strong>${parts[1]}</li>\n`;
      continue;
    }
  }
  
  // Líneas normales de texto
  if (inList && !line.includes(':')) {
    output += `                <li>${line}</li>\n`;
  } else {
    if (inList) {
      output += `              </ul>\n`;
      inList = false;
    }
    if (inWarningBox && !line.includes('Consecuencias')) {
      output += `                <p className="mt-4">${line}</p>\n`;
    } else {
      output += `              <p className="mb-4">${line}</p>\n`;
    }
  }
}

// Cerrar sección final
if (inList) {
  output += `              </ul>\n`;
}
if (inWarningBox) {
  output += `              </div>\n`;
}
if (currentSection) {
  output += `            </section>\n`;
}

// Agregar aceptación final
output += `
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
`;

// Escribir el archivo
const outputPath = path.join(__dirname, 'src', 'pages', 'Terms.tsx');
fs.writeFileSync(outputPath, output, 'utf-8');

console.log('✅ Archivo Terms.tsx generado exitosamente!');
console.log(`📁 Ubicación: ${outputPath}`);
