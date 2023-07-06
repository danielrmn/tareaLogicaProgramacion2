// Función recursiva para resolver las Torres de Hanoi
const torresDeHanoi = (n, origen, destino, auxiliar) => {
    if (n === 1) {
      console.log(`Mover disco 1 de la torre ${origen} a la torre ${destino}`);
      return;
    }
    
    torresDeHanoi(n - 1, origen, auxiliar, destino);
    console.log(`Mover disco ${n} de la torre ${origen} a la torre ${destino}`);
    torresDeHanoi(n - 1, auxiliar, destino, origen);
  };
  
  // Llamar a la función para resolver el problema con 3 discos y 3 torres
  torresDeHanoi(3, 'A', 'C', 'B');
  