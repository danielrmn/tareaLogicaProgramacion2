const esConsecutivo = numero => {
    const digitos = String(numero).split('').map(digito => Number(digito));
    
    for (let i = 0; i < digitos.length - 1; i++) {
      if (digitos[i] + 1 !== digitos[i + 1]) {
        return false;
      }
    }
    
    return true;
  };
  
  // Solicitar al usuario el número
  const numeroIngresado = parseInt(prompt('Ingrese un número:'));
  
  // Verificar si es consecutivo
  const resultado = esConsecutivo(numeroIngresado);
  
  // Mostrar el resultado
  if (resultado) {
    console.log(`El número ${numeroIngresado} es consecutivo.`);
  } else {
    console.log(`El número ${numeroIngresado} no es consecutivo.`);
  }
  