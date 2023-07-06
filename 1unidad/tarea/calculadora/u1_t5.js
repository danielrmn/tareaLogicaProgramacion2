// Función para mostrar el menú y solicitar una opción al usuario
function mostrarMenu() {
    console.log("Calculadora Básica");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("0. Salir");
    let opcion = parseInt(prompt("Ingrese una opción:"));
    return opcion;
  }
  
  // Función para solicitar dos números al usuario
  function solicitarNumeros() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    return [numero1, numero2];
  }
  
  // Funciones para realizar las operaciones matemáticas
  function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    return a / b;
  }
  
  // Programa principal
  let opcion = mostrarMenu();
  
  while (opcion !== 0) {
    let numeros = solicitarNumeros();
    let resultado;
  
    switch (opcion) {
      case 1:
        resultado = sumar(numeros[0], numeros[1]);
        console.log("El resultado de la suma es:", resultado);
        break;
      case 2:
        resultado = restar(numeros[0], numeros[1]);
        console.log("El resultado de la resta es:", resultado);
        break;
      case 3:
        resultado = multiplicar(numeros[0], numeros[1]);
        console.log("El resultado de la multiplicación es:", resultado);
        break;
      case 4:
        resultado = dividir(numeros[0], numeros[1]);
        console.log("El resultado de la división es:", resultado);
        break;
      default:
        console.log("Opción inválida. Por favor, ingrese una opción válida.");
    }
  
    opcion = mostrarMenu();
  }
  
  console.log("¡Hasta luego!");
  