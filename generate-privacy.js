import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo de privacidad
const privacidadPath = path.join(__dirname, '..', 'privaccidad');
const content = fs.readFileSync(privacidadPath, 'utf-8');

// Dividir en líneas
const lines = content.split('\n');

// Generar el componente React
let output = `import { ArrowLeft } from 'lucide-react';
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

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
`;

let currentSection = '';
let inList = false;
let inTable = false;
let tableRows = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Saltar líneas vacías y la primera línea de instrucción
  if (line === '' || line.startsWith('Política de Privacidad crear')) continue;
  
  // Saltar encabezados ya incluidos en el template
  if (line === 'Política de Privacidad' || line === 'RLS — RBX Latam Store' || line.startsWith('Última actualización')) continue;
  
  // Detectar títulos de secciones (números seguidos de punto)
  if (/^\d+\./.test(line)) {
    if (inList) {
      output += `              </ul>\n`;
      inList = false;
    }
    if (inTable) {
      // Generar tabla
      output += `              <div className="overflow-x-auto my-6">\n`;
      output += `                <table className="w-full border border-white/10 rounded-lg overflow-hidden">\n`;
      output += `                  <thead className="bg-white/5">\n`;
      output += `                    <tr>\n`;
      output += `                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Tipo de dato</th>\n`;
      output += `                      <th className="px-4 py-3 text-left text-white font-bold border-b border-white/10">Tiempo de conservación</th>\n`;
      output += `                    </tr>\n`;
      output += `                  </thead>\n`;
      output += `                  <tbody className="text-sm">\n`;
      for (let j = 0; j < tableRows.length; j += 2) {
        const isLast = j === tableRows.length - 2;
        const isBlacklist = tableRows[j].includes('fraude') || tableRows[j].includes('blacklist');
        output += `                    <tr className="${!isLast ? 'border-b border-white/5' : ''}">\n`;
        output += `                      <td className="px-4 py-3">${tableRows[j]}</td>\n`;
        output += `                      <td className="px-4 py-3${isBlacklist ? ' text-red-400 font-semibold' : ''}">${tableRows[j + 1]}</td>\n`;
        output += `                    </tr>\n`;
      }
      output += `                  </tbody>\n`;
      output += `                </table>\n`;
      output += `              </div>\n`;
      inTable = false;
      tableRows = [];
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
  
  // Detectar inicio de tabla (sección 6)
  if (line === 'Tipo de dato') {
    inTable = true;
    continue;
  }
  
  // Detectar filas de tabla
  if (inTable && line !== 'Tiempo de conservación') {
    tableRows.push(line);
    continue;
  }
  
  // Detectar listas con dos puntos
  if (line.includes(':') && !line.includes('http') && !line.includes('@')) {
    const parts = line.split(':');
    if (parts.length === 2 && parts[0].length < 80) {
      if (!inList) {
        output += `              <ul className="space-y-2 ml-4 mb-4">\n`;
        inList = true;
      }
      output += `                <li><strong className="text-white">${parts[0]}:</strong>${parts[1]}</li>\n`;
      continue;
    }
  }
  
  // Detectar advertencias especiales
  if (line.includes('nunca solicita') || line.includes('NO recopilamos')) {
    output += `              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 my-4">\n`;
    output += `                <p className="font-bold text-green-400 mb-3">${line.includes('NO recopilamos') ? 'RLS nunca solicita ni almacena:' : line}</p>\n`;
    if (line.includes('NO recopilamos')) {
      output += `                <ul className="list-disc list-inside space-y-2 ml-4">\n`;
      // Leer las siguientes líneas hasta encontrar una vacía
      let j = i + 1;
      while (j < lines.length && lines[j].trim() !== '') {
        const item = lines[j].trim();
        if (item && !item.includes(':')) {
          output += `                  <li>${item}</li>\n`;
        }
        j++;
      }
      output += `                </ul>\n`;
      i = j - 1;
    }
    output += `              </div>\n`;
    continue;
  }
  
  // Detectar excepciones (advertencia roja)
  if (line.includes('Excepción:')) {
    output += `              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 my-4">\n`;
    output += `                <p className="font-bold text-red-400 mb-2">${line}</p>\n`;
    // Leer siguiente línea
    if (i + 1 < lines.length) {
      i++;
      output += `                <p className="mt-2">${lines[i].trim()}</p>\n`;
    }
    output += `              </div>\n`;
    continue;
  }
  
  // Detectar URLs y correos
  if (line.includes('http') || line.includes('@')) {
    if (line.includes('http')) {
      const url = line.match(/(https?:\/\/[^\s]+)/)?.[0];
      if (url) {
        const label = line.replace(url, '').replace(':', '').trim();
        output += `              <p className="mb-2"><strong className="text-white">${label}:</strong> <a href="${url}" className="text-pixel-accent hover:underline">${url}</a></p>\n`;
        continue;
      }
    }
    if (line.includes('@')) {
      const email = line.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)?.[0];
      if (email) {
        const label = line.replace(email, '').replace(':', '').trim();
        output += `              <p className="mb-2"><strong className="text-white">${label}:</strong> <a href="mailto:${email}" className="text-pixel-accent hover:underline">${email}</a></p>\n`;
        continue;
      }
    }
  }
  
  // Detectar números de teléfono
  if (line.includes('+51')) {
    const phone = line.match(/\+51\s*\d+\s*\d+\s*\d+/)?.[0];
    if (phone) {
      const label = line.replace(phone, '').replace(':', '').trim();
      output += `              <p className="mb-2"><strong className="text-white">${label}:</strong> <span className="text-pixel-accent">${phone}</span></p>\n`;
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
    
    // Detectar texto de aceptación final
    if (line.includes('Al utilizar los servicios de RLS')) {
      output += `            </section>\n\n`;
      output += `            {/* Aceptación Final */}\n`;
      output += `            <div className="bg-pixel-accent/10 border border-pixel-accent/30 rounded-2xl p-6 mt-8">\n`;
      output += `              <p className="text-center font-bold text-white">\n`;
      output += `                ${line}\n`;
      output += `              </p>\n`;
      output += `            </div>\n`;
      currentSection = '';
      continue;
    }
    
    output += `              <p className="mb-4">${line}</p>\n`;
  }
}

// Cerrar sección final si existe
if (inList) {
  output += `              </ul>\n`;
}
if (currentSection) {
  output += `            </section>\n`;
}

output += `          </div>
        </div>
      </div>
    </div>
  );
}
`;

// Escribir el archivo
const outputPath = path.join(__dirname, 'src', 'pages', 'Privacy.tsx');
fs.writeFileSync(outputPath, output, 'utf-8');

console.log('✅ Archivo Privacy.tsx generado exitosamente!');
console.log(`📁 Ubicación: ${outputPath}`);
