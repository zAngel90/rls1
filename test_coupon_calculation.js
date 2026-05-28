// Test para verificar el bug del cupón de porcentaje
// Escenario del cliente: 7.84 PEN cobrado, debería ser 8.40 PEN

console.log('=== ANÁLISIS DEL BUG ===');
console.log('Cliente reporta:');
console.log('- 300 robux = 9 PEN sin descuento');
console.log('- Descuento: 6.65%');
console.log('- Precio cobrado: 7.84 PEN');
console.log('- Precio esperado: 8.40 PEN');
console.log('');

// Trabajemos al revés para entender el problema
console.log('=== VERIFICACIÓN MATEMÁTICA ===');
console.log('Si 9 PEN es el precio sin descuento:');
console.log(`9 - (9 * 0.0665) = 9 - 0.60 = ${(9 - (9 * 0.0665)).toFixed(2)} PEN ✅ (correcto)`);
console.log('');

console.log('Pero el sistema cobra 7.84 PEN. ¿De dónde sale?');
console.log('Probemos si el descuento se aplica dos veces o sobre base incorrecta:');
console.log('');

// Hipótesis 1: El descuento se aplica sobre el precio en USD antes de convertir
console.log('=== HIPÓTESIS 1: Descuento en USD primero ===');
const robux = 300;
const rateUSD = 0.03;
const baseUSD = robux * rateUSD;
console.log(`Base USD: ${robux} * ${rateUSD} = $${baseUSD} USD`);

const discountUSD = baseUSD * 0.0665;
const afterDiscountUSD = baseUSD - discountUSD;
console.log(`Después de descuento: $${baseUSD} - $${discountUSD.toFixed(2)} = $${afterDiscountUSD.toFixed(2)} USD`);

// Ahora convertir a PEN - pero ¿cuál es el rate?
// Si 9 USD = 9 PEN, rate = 1 (no tiene sentido)
// Si 300 robux = 9 PEN y 300 robux = 9 USD, entonces... espera

// El problema es que NO sabemos el rate PEN real
// Calculémoslo al revés:
console.log('');
console.log('=== CALCULANDO RATE PEN REAL ===');
console.log('Sabemos que el cliente paga 7.84 PEN');
console.log('Y esperaba pagar 8.40 PEN');
console.log('');

// Si el precio correcto es 8.40 PEN con descuento:
// 8.40 = 9 * (1 - 0.0665) ✅
// Entonces el precio sin descuento es 9 PEN

// Ahora, si 7.84 es lo que cobra:
// Opción A: 7.84 = X * (1 - 0.0665)
// X = 7.84 / 0.9335 = 8.40 (no, eso daría el precio correcto)

// Opción B: El descuento se aplicó sobre un precio base diferente
const wrongBase = 7.84 / (1 - 0.0665);
console.log(`Si 7.84 PEN es después del 6.65% descuento:`);
console.log(`Base sería: 7.84 / 0.9335 = ${wrongBase.toFixed(2)} PEN`);
console.log('');

// Opción C: El descuento se calculó en USD y luego se convirtió mal
console.log('=== OPCIÓN C: Descuento en USD, conversión incorrecta ===');
const discountPct = 6.65;
const discountInUSD = (baseUSD * discountPct) / 100;
console.log(`Descuento en USD: $${baseUSD} * ${discountPct}% = $${discountInUSD.toFixed(4)} USD`);

// Si el rate PEN es diferente para el descuento que para el precio base...
// Necesitamos saber el rate real

// Probemos con rate PEN común (3.7)
const penRate = 3.7;
console.log(`\nUsando rate PEN = ${penRate}:`);
console.log(`Precio base: $${baseUSD} * ${penRate} = ${(baseUSD * penRate).toFixed(2)} PEN`);
console.log(`Descuento: $${discountInUSD.toFixed(4)} * ${penRate} = ${(discountInUSD * penRate).toFixed(2)} PEN`);
console.log(`Final: ${(baseUSD * penRate).toFixed(2)} - ${(discountInUSD * penRate).toFixed(2)} = ${((baseUSD * penRate) - (discountInUSD * penRate)).toFixed(2)} PEN`);
console.log('');

console.log('=== CONCLUSIÓN ===');
console.log('El problema está en el ORDEN de las operaciones:');
console.log('');
console.log('❌ INCORRECTO (lo que hace ahora):');
console.log('1. baseUSD * rate = subtotalPEN');
console.log('2. subtotalPEN * discount% = discountPEN');
console.log('3. subtotalPEN - discountPEN = finalPEN');
console.log('');
console.log('✅ CORRECTO (lo que debería hacer):');
console.log('1. baseUSD * discount% = discountUSD');
console.log('2. baseUSD - discountUSD = finalUSD');
console.log('3. finalUSD * rate = finalPEN');
console.log('');
console.log('O alternativamente:');
console.log('1. baseUSD * rate = subtotalPEN');
console.log('2. baseUSD * discount% = discountUSD');
console.log('3. discountUSD * rate = discountPEN');
console.log('4. subtotalPEN - discountPEN = finalPEN');
