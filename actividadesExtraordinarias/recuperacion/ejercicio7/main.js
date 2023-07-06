const multiplicarNumeros = (arreglo) => {
    let resultado = 1;
    
    for (let i = 0; i < arreglo.length; i++) {
      resultado *= arreglo[i];
    }
    
    return resultado;
  };
  
  // Ejemplo de uso
  const numeros = [2, 4, 6, 8];
  const resultado = multiplicarNumeros(numeros);
  
  console.log(`El resultado de la multiplicación es: ${resultado}`);
  