let calcular_promedio = [];
let numeroIngresado;
 let sum = 0;
 let promedio;
 do{
   numeroIngresado = parseInt(prompt("ingresa un numero"));
   calcular_promedio.push(numeroIngresado);
 }while(calcular_promedio.length <10 );
 
for (let i = 0; i < calcular_promedio.length; i++) {
    sum += calcular_promedio[i];
}

promedio = sum / calcular_promedio.length;

console.log("array: " + calcular_promedio);
console.log("suma de los numeros ingresados " + sum);
console.log("promedio de los numeros ingresados: " + promedio);