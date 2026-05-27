import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo de términos
const terminosPath = path.join(__dirname, '..', 'terminos.txt');
const content = fs.readFileSync(terminosPath, 'utf-8');

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
            RLS — Robux Latam Store
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
  if (/^\d+\./.test(line)) {
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
    currentSection = line;
    continue;
  }
  
  // Detectar subsecciones (número.número)
  if (/^\d+\.\d+/.test(line)) {
    if (inList) {
      output += `              </ul>\n`;
      inList = false;
    }
    output += `              <h3 className="text-xl font-bold text-white mb-3 mt-6">${line}</h3>\n`;
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
