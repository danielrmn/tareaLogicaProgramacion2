const decimalABinario = (numero) => {
    let binario = '';
  
    while (numero > 0) {
      binario = (numero % 2) + binario;
      numero = Math.floor(numero / 2);
    }
  
    return binario;
  };
  
  // Generar dos números aleatorios entre 1 y 5000
  const numero1 = Math.floor(Math.random() * 5000) + 1;
  const numero2 = Math.floor(Math.random() * 5000) + 1;
  
  // Llamar a la función con los números aleatorios
  const binario1 = decimalABinario(numero1);
  const binario2 = decimalABinario(numero2);
  
  // Imprimir los resultados
  console.log(`El número ${numero1} en binario es: ${binario1}`);
  console.log(`El número ${numero2} en binario es: ${binario2}`);
  