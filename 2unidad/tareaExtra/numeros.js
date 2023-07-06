// Solicitar los 10 números al usuario
const numeros = [];
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i+1}`));
  numeros.push(numero);
}

// Ordenar los números de forma ascendente
numeros.sort((a, b) => a - b);

// Mostrar los números ordenados
console.log("Números ordenados de forma ascendente:");
console.log(numeros);
