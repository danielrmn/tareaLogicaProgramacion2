let altura = parseFloat(prompt("ingresa tu altura pulgadas"));
let peso = parseFloat(prompt("ingresa tu peso en Libras"));

const calculadoraIMC = (altura, peso) => {
  this.altura = altura;
  this.peso = peso;
  
  imc = 703 * peso / (altura * altura);
  console.log(imc);
}

calculadoraIMC(altura, peso);