let matrizOriginal = [];
let fila = [];

console.log("Ingrese 9 números para llenar la matriz de 3x3:");

for (let i = 0; i < 3; i++) {
  fila = [];
  for (let j = 0; j < 3; j++) {
    fila.push(parseInt(prompt(`Ingrese el número para la posicion [${i},${j}]:`)));
  }
  matrizOriginal.push(fila);
}

console.log("Matriz original:");
console.log(matrizOriginal);

let matrizRespuesta = [];

for (let i = 0; i < 3; i++) {
  fila = [];
  for (let j = 0; j < 3; j++) {
    fila.push(matrizOriginal[j][i]);
  }
  matrizRespuesta.push(fila);
}

console.log("Matriz transpuesta (rotada):");
console.log(matrizRespuesta);