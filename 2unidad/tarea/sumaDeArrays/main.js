// declarando arreglos
var arregloPrimero = [];
var arregloSegundo = [];
var arregloTercero = [];

// declarando variables de almacentamiento temporal
var numeroRandomPrimero;
var numeroRandomSegundo;
var numeroRandomTercero;

//bucle for para genera 10 numeros aleatorios y la dimensio del array
for(var i = 0; i < 10; i++){
    numeroRandomPrimero =  Math.floor(Math.random()*100+1);
    arregloPrimero.push(numeroRandomPrimero);

    numeroRandomSegundo =  Math.floor(Math.random()*100+1);
    arregloSegundo.push(numeroRandomSegundo);

    numeroRandomTercero = numeroRandomPrimero + numeroRandomSegundo;
    arregloTercero.push(numeroRandomTercero);

    console.log("Tercer arreglo y la suma de los dos anteriores: " + numeroRandomPrimero + " + " + numeroRandomSegundo + " = " + numeroRandomTercero);
}

// mostrar en pantalla
alert("primer arreglo: " + arregloPrimero);
alert("segundo arreglo: " + arregloSegundo);
alert("tercer arreglo y la suma de los dos anteriores: " + arregloTercero);