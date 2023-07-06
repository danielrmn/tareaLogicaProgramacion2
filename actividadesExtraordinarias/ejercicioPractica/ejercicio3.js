const validarNumeroBinario = numero => {
    const patronBinario = /^[01]+$/; // Expresión regular para validar binario
  
    if (patronBinario.test(numero)) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Ejemplo de uso
  const numero1 = '101010'; // Número binario
  const numero2 = '12345'; // No es un número binario
  
  console.log(validarNumeroBinario(numero1)); // Salida: 1
  console.log(validarNumeroBinario(numero2)); // Salida: 0
  