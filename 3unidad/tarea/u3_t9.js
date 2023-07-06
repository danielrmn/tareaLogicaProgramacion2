// no es necesario crear una "function" ya que iria en contra de los costos de ejecucion

// inicializamos y declaramos el arreglo
var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ingresamos el dato que queremos ingresar
var dato = parseInt(prompt("ingresa el dato"));

//definimos en que posicion agregamos el dato
var posicion = parseInt(prompt("ingresa un posicion: "));

// declaramos en que posicion vamos a gregar y que elemento
arreglo.splice(posicion, 0, dato);

// imprimimos en pantalla
console.log(arreglo);