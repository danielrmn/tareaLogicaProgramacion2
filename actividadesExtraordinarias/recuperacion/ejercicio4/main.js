// Función para generar un arreglo con diez números aleatorios enteros entre 1 y 10
const generarArregloAleatorio = () => {
    const arreglo = [];
    for (let i = 0; i < 10; i++) {
      const numero = Math.floor(Math.random() * 10) + 1;
      arreglo.push(numero);
    }
    return arreglo;
  }
  
  // Programa principal
  const numeros = generarArregloAleatorio();
  console.log("Arreglo:", numeros);
  
  // Solicitar al usuario un número entero entre 1 y 10
  const numeroIngresado = parseInt(prompt("Ingrese un número entero entre 1 y 10:"));
  
  // Contar cuántas veces se repite el número ingresado en el arreglo
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroIngresado) {
      contador++;
    }
  }
  
  // Mostrar el resultado
  console.log(`El número ${numeroIngresado} se repite ${contador} veces en el arreglo.`);
  