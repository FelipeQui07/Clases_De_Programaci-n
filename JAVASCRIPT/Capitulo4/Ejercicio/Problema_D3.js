let materias = {
    fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
    programacion: ["Dalto", "Pedro", "Pepito", "Juan"],
    logica: ["Rodriguez", "Pedro", "Pepito", "Juan", "Cofla", "Maria"],
    quimica: ["Halonso", "Pedro", "Pepito", "Juan", "Cofla", "Maria"]
}

const Inscribir = (alumno, materia) =>{
    let personas = materias[materia];
    if(personas.length >= 21){
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas. <br><br>`)
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }else if(materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }else if(materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }else if(materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente <br><br>`);
    }
}

document.write(materias["fisica"] + "<br><br>");
Inscribir("diana", "fisica");
Inscribir("oscar", "fisica");
Inscribir("cris", "fisica");
Inscribir("jorge", "fisica");
Inscribir("diego", "fisica");
Inscribir("vanesa", "fisica");
Inscribir("xiomara", "fisica");
Inscribir("sara", "fisica");
Inscribir("andres", "fisica");
Inscribir("mateo", "fisica");
Inscribir("angel", "fisica");
Inscribir("isaac", "fisica");
Inscribir("david", "fisica");
Inscribir("lucas", "fisica");
Inscribir("jhonattan", "fisica");
Inscribir("andrea", "fisica");
Inscribir("jessica", "fisica");
Inscribir("aleja", "fisica");
Inscribir("lorena", "fisica");
document.write("<br>" + materias["fisica"]);