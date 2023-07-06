let numeroEntero = parseInt(prompt("ingresa un numero entero"));

const imprimir_tabla_multiplicar = numeroEntero => {
  this.numeroEntero = numeroEntero;
  for(let i = 1; i <=10; i++){
    results = numeroEntero * i;
    console.log(numeroEntero + " x " + i + " = " + results);
  }
}

imprimir_tabla_multiplicar(numeroEntero);