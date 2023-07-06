const lanzarDado = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  
  const esPar = numero => {
    return numero % 2 === 0;
  };
  
  // Lanzar los dados
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  
  // Solicitar al usuario su predicción
  const prediccion = prompt('¿Crees que la suma de los dados será par o impar? (par/impar)').toLowerCase();
  
  // Calcular la suma de los dados
  const suma = dado1 + dado2;
  
  // Verificar si es par o impar
  const esParSuma = esPar(suma);
  
  // Mostrar los resultados
  console.log(`Dado 1: ${dado1}`);
  console.log(`Dado 2: ${dado2}`);
  console.log(`Suma: ${suma}`);
  console.log(`¿Es par? ${esParSuma ? 'Sí' : 'No'}`);
  
  // Verificar si el usuario adivinó
  if ((prediccion === 'par' && esParSuma) || (prediccion === 'impar' && !esParSuma)) {
    console.log('¡Adivinaste!');
  } else {
    console.log('No adivinaste.');
  }