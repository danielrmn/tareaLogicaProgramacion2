const generarArregloAleatorio = (n, min, max) => {
    const arreglo = [];
  
    for (let i = 0; i < n; i++) {
      arreglo.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  
    return arreglo;
  };
  
  const intercalarArreglos = (arreglo1, arreglo2) => {
    const arregloIntercalado = [];
  
    const longitud = Math.max(arreglo1.length, arreglo2.length);
  
    for (let i = 0; i < longitud; i++) {
      if (i < arreglo1.length) {
        arregloIntercalado.push(arreglo1[i]);
      }
      if (i < arreglo2.length) {
        arregloIntercalado.push(arreglo2[i]);
      }
    }
  
    return arregloIntercalado;
  };
  
  // Obtener la dimensión 'n' del usuario
  const n = parseInt(prompt('Ingrese la dimensión de los arreglos:'));
  
  // Generar los arreglos aleatorios
  const arregloPositivos = generarArregloAleatorio(n, 1, 99);
  const arregloNegativos = generarArregloAleatorio(n, -99, -1);
  
  // Intercalar los valores de los arreglos
  const arregloIntercalado = intercalarArreglos(arregloPositivos, arregloNegativos);
  
  // Mostrar los valores intercalados
  console.log('Valores intercalados:', arregloIntercalado);
  
  