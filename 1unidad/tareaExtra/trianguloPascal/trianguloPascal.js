const imprimirTrianguloPascal = (numFilas) => {
    const triangulo = [];
  
    for (let i = 0; i < numFilas; i++) {
      triangulo[i] = [];
  
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangulo[i][j] = 1;
        } else {
          triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
        }
      }
    }
  
    // Imprimir el triángulo de Pascal
    for (let i = 0; i < numFilas; i++) {
      let fila = "";
      for (let j = 0; j <= i; j++) {
        fila += triangulo[i][j] + " ";
      }
      console.log(fila);
    }
  };
  
  // Ejemplo de uso
  const numFilas = parseInt(prompt("Ingrese el número de filas: "));
  imprimirTrianguloPascal(numFilas);
  