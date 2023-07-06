var numeros = [];
var aux;

for(var k = 0; k < 10; k++){
    var numero = parseInt(prompt("ingresa un numero"));
    
    numeros.push(numero);
    
}
console.log("orden original: " + numeros)

for(var i = 0; i < numeros.length; i++){
    for(var j = 0; j < numeros.length-i-1; j++){
        if(numeros[j] > numeros[j+1]){
            aux = numeros[j];
            numeros[j]= numeros[j+1];
            numeros[j+1]= aux;

        }
    }
}


console.log("numeros ordenados" + numeros + " ");
console.log("numero mas bajjo: " + numeros[0] + " numero mas alto: " + numeros[9])    
    