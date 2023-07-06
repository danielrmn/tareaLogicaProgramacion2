// Función para crear una matriz 3x3 con números aleatorios
const crearMatrizAleatoria = () => {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
      const fila = [];
      for (let j = 0; j < 3; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 100); // Generar número aleatorio entre 0 y 99
        fila.push(numeroAleatorio);
      }
      matriz.push(fila);
    }
    return matriz;
  };
  
  // Función para mostrar la matriz en un formato definido
  const mostrarMatriz = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join(" | "));
    }
  };
  
  // Crear la matriz aleatoria
  const matriz = crearMatrizAleatoria();
  
  // Mostrar la matriz inicial
  console.log("Matriz inicial:");
  mostrarMatriz(matriz);
  
  // Eliminar los valores de la primera fila
  matriz[1] = [null, null, null];
  
  // Solicitar los números al usuario para la primera fila
  for (let i = 0; i < 3; i++) {
    const numero = parseInt(prompt(`Ingresa el número para la posición [1][${i}]`));
    matriz[1][i] = numero;
  }
  
  // Reemplazar el dato en la posición [2][2] por el nombre
  const nombre = prompt("ingrese el nombre: ");
  matriz[2][2] = nombre;
  
  // Mostrar la matriz modificada
  console.log("Matriz modificada:");
  mostrarMatriz(matriz);
  