// Función para generar un arreglo con números aleatorios
const generarArregloAleatorio = (cantidad) => {
    const arreglo = [];
    for (let i = 0; i < cantidad; i++) {
      const numero = Math.floor(Math.random() * 100) + 1;
      arreglo.push(numero);
    }
    return arreglo;
  }
  
  // Generar dos arreglos con números aleatorios
  const arreglo1 = generarArregloAleatorio(5);
  const arreglo2 = generarArregloAleatorio(5);
  
  // Combinar los dos arreglos alternando sus elementos
  const arregloCombinado = [];
  for (let i = 0; i < 5; i++) {
    arregloCombinado.push(arreglo1[i]);
    arregloCombinado.push(arreglo2[i]);
  }
  
  // Mostrar el arreglo combinado
  console.log("Arreglo combinado:", arregloCombinado);