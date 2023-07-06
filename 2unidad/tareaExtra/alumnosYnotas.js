
var alumnos = [];
var tareas = [];
var notas = [];
var subnotas = [];
var cursoMate = [alumnos, tareas, notas]

var cantidadAlumnos = parseInt(prompt("cuantos alumnos hay"));
var cantidadTareas = parseInt(prompt("cuantos tareas hay"));

var consulta;

for(var i = 0; i < cantidadAlumnos; i++){
    alumnos.push(prompt("nombre del alumno: " + (i+1)));
}

for(var i = 0; i < cantidadTareas; i++){
    tareas.push(prompt("nombre de la tarea: " + (i+1)));
}

for(var i = 0; i < cantidadAlumnos; i++){
    subnotas = [];
    for(var j = 0; j < cantidadTareas; j++){
        subnotas.push(parseInt(prompt("nota de: " + alumnos[i] + " en la tarea: " + tareas[j])));
    }
    notas.push(subnotas);

}

consulta = parseInt(prompt("consultar nota"))

    if(alumnos.indexOf(consulta)){
        console.log("alumno: " + alumnos[consulta]);
        for(var i = 0; i < tareas.length;i++){
            console.log("tarea: " + tareas[i] + " nota: " + notas[consulta][i]);
        }
    }else{
        console.log("numero incorrecto");
    }


console.log("************************************************")
console.log(alumnos);
console.log(tareas);
console.log(notas);
console.log(cursoMate);

// + " tarea: " + tareas[consulta-1] + ": " + notas[consulta-1]  + " " + tareas[consulta] + ": " + notas[consulta]
