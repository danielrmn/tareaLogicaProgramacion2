let num = parseInt(prompt("escribe el numero factorial"));
let resultado;

const factorial = num => {
  this.num = num;
  if(num < 0){
    return -1;
  }else if(num === 0){
    return 1;
  }else{
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
  }
}
factorial(num);
