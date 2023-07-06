const obtenerFibonacciRecursivo = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return obtenerFibonacciRecursivo(n - 1) + obtenerFibonacciRecursivo(n - 2);
    }
  };
  
  const termino = parseInt(prompt("Ingresa el término n"));
  
  const resultado = obtenerFibonacciRecursivo(termino);
  
  console.log("El término", termino, "de la sucesión de Fibonacci es:", resultado);
  