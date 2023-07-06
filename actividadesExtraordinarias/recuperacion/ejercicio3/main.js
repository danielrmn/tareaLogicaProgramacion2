// Solicitar al usuario las cinco palabras
const palabras = [];
for (let i = 0; i < 5; i++) {
  const palabra = prompt(`Ingrese la palabra ${i + 1}:`);
  palabras.push(palabra);
}

// Solicitar al usuario el número entero
const numero = parseInt(prompt("Ingrese un número entero:"));

// Imprimir las palabras con una cantidad de caracteres mayor al número ingresado
console.log(`Palabras con más de ${numero} caracteres:`);
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > numero) {
    console.log(palabras[i]);
  }
}
