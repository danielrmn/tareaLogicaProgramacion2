// Definir la tabla de registros
const registros = [
    { padre: 'Juan', hijo: 'Pedro' },
    { padre: 'Juan', hijo: 'María' },
    { padre: 'Pedro', hijo: 'Luis' },
    { padre: 'Pedro', hijo: 'Ana' },
    { padre: 'María', hijo: 'Carlos' },
    { padre: 'María', hijo: 'Laura' },
    { padre: 'Luis', hijo: 'Jorge' },
    { padre: 'Luis', hijo: 'Sofía' },
  ];
  
  // Función para obtener el número de ancestros de un estudiante
  const obtenerNumAncestros = (estudiante) => {
    // Buscar los registros donde el estudiante es hijo
    const registrosHijo = registros.filter(registro => registro.hijo === estudiante);
    
    // Verificar si el estudiante tiene ancestros
    if (registrosHijo.length === 0) {
      return 0; // No tiene ancestros
    }
    
    // Calcular el número de ancestros recursivamente
    let numAncestros = 0;
    registrosHijo.forEach(registro => {
      numAncestros += 1 + obtenerNumAncestros(registro.padre);
    });
    
    return numAncestros;
  };
  
  // Ejemplo de uso
  const estudiante = 'Jorge';
  const numAncestros = obtenerNumAncestros(estudiante);
  
  console.log(`El estudiante ${estudiante} tiene ${numAncestros} ancestros en la institución.`);
  