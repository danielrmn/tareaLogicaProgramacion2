// no es necesario crear una "function" ya que iria en contra de los costos de ejecucion

// inicializamos el arreglo
var arreglo=[];

// ingresamos el elemento que queremos buscar dentro del arreglo
var numero = parseInt(prompt("ingresa el numero"));

// creamos un for para llenar el arreglo de 10 diferentes numeros
// declaramos que los numeros aleatorios sean entre el 1 y 10
for(var i = 0; i< 10; i++){
   arreglo.push(Math.floor(Math.random() *10+1));
}

// usamos indexOf para saber si el elemeto para saber si el numero ingresado esta dentro del arreglo
console.log(arreglo.indexOf(numero));

