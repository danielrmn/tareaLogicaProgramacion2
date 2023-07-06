const esPalindromo = cadena => {
    const cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, '');
    const cadenaReversa = cadenaSinEspacios.split('').reverse().join('');
  
    return cadenaSinEspacios === cadenaReversa;
  };
  
  // Solicitar al usuario la cadena de caracteres
  const cadenaIngresada = prompt('Ingrese una cadena de caracteres:');
  
  // Verificar si es un palíndromo
  const resultado = esPalindromo(cadenaIngresada);
  
  // Mostrar el resultado
  if (resultado) {
    console.log(`La cadena "${cadenaIngresada}" es un palíndromo.`);
  } else {
    console.log(`La cadena "${cadenaIngresada}" no es un palíndromo.`);
  }
  