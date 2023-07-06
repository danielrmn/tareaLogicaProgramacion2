const contarOcurrencias = (texto, subtexto) => {
  const regex = new RegExp(subtexto, 'gi');
  const ocurrencias = texto.match(regex);
  
  if (ocurrencias) {
    return ocurrencias.length;
  } else {
    return 0;
  }
};

// Solicitar al usuario los textos
const textoPrincipal = prompt('Ingrese el texto principal:');
const textoBuscado = prompt('Ingrese el texto a buscar:');

// Contar las ocurrencias
const cantidadOcurrencias = contarOcurrencias(textoPrincipal, textoBuscado);

// Mostrar el resultado
console.log(`El texto "${textoBuscado}" se encuentra ${cantidadOcurrencias} veces en el texto principal.`);
