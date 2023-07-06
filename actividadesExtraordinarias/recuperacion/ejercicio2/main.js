// Solicitar al usuario las cinco palabras
const palabras = [];
for (let i = 0; i < 5; i++) {
  const palabra = prompt(`Ingrese la palabra ${i + 1}:`);
  palabras.push(palabra);
}

// Encontrar la palabra con mayor cantidad de caracteres
let palabraMasLarga = palabras[0];
for (let i = 1; i < palabras.length; i++) {
  if (palabras[i].length > palabraMasLarga.length) {
    palabraMasLarga = palabras[i];
  }
}

// Mostrar la palabra con mayor cantidad de caracteres y la cantidad de caracteres
console.log(`La palabra más larga es "${palabraMasLarga}" con ${palabraMasLarga.length} caracteres.`);
