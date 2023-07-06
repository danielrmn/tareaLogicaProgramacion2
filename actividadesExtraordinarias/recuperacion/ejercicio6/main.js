const encontrarElementoMasFrecuente = (arreglo) => {
    const conteo = {};
    let elementoMasFrecuente = '';
    let maximoFrecuencia = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
      const elemento = arreglo[i];
      if (conteo[elemento]) {
        conteo[elemento]++;
      } else {
        conteo[elemento] = 1;
      }
      
      if (conteo[elemento] > maximoFrecuencia) {
        elementoMasFrecuente = elemento;
        maximoFrecuencia = conteo[elemento];
      }
    }
    
    return {
      elemento: elementoMasFrecuente,
      frecuencia: maximoFrecuencia
    };
  };
  
  // Ejemplo de uso
  const palabras = ['manzana', 'pera', 'manzana', 'manzana', 'naranja', 'pera', 'manzana'];
  const resultado = encontrarElementoMasFrecuente(palabras);
  
  console.log(`El elemento más frecuente es "${resultado.elemento}" y se repite ${resultado.frecuencia} veces.`);
  