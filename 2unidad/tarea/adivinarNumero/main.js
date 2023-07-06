var arrayRandom = [];
var numeroRandom = parseInt(prompt("ingrese un numero aletorio"));

for(var i = 0; i < 10; i++){
    arrayRandom.push(Math.floor(Math.random()*10+1));
}

console.log(arrayRandom)
console.log((arrayRandom.indexOf(numeroRandom)));







