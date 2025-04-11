let cantidad = prompt("Cuantos alumnos son");
let alumnosTotales = [];

// Rellenamos el array vacio con valores y creamos un array bidimensional
for(let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`Nombre del alumno ${i + 1}`), 0];
}

// Creamos una funcion para tomar asistencia de los estudiantes
const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

// Creamos un ciclo para poder pdir asistencia a los estudiantes en el mes
for(let i = 0; i < 30; i++){
    for(let alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

// Verificamos cuantas asistencias tiene cada estudiante
for(let alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;

    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "<b style='color:red'> REPROBADO POR INASISTENCIAS</b><br><br>"
    }else{
        resultado += "<br></br>"
    }
    document.write(resultado);
}