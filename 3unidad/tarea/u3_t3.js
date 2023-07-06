// no es necesario crear una "function" ya que iria en contra de los costos de ejecucion

// inicializamos el arreglo
var arreglo =[];

// declaramos el tamano del arreglo
var numero = parseInt(prompt("ingrese el tamaño de arreglo: "));

// realizamos un bucle para llenar el arreglo con numeros aleatorios con el tamano asignado "numero"
for(var i =0; i < numero; i++){
  arreglo.push(Math.floor(Math.random() *100+1));
}

// imprimimos el arreglo afuera del for para que solo se muestre una sola vez
console.log(arreglo)