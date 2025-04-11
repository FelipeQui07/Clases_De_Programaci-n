const materias = {
    fisica: [90, 6, 3, "fisica"],
    matematicas: [84, 8, 2, "matematicas"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo : [91, 6, 3, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]
};

const aprobo = ()=>{
    for(let materia in materias){
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencia >= 90){
            console.log("%c   Asistencias en Orden", "color:green")
        }else{
            console.log("%c   Falta de Asistencias", "color:red")
        }
        if(promedio >= 7){
            console.log("%c   Promedio en Orden", "color:green")
        }else{
            console.log("%c   Falta desaprobado", "color:red")
        }
        if(trabajos >= 3){
            console.log("%c   Trabajos practicos en Orden", "color:green")
        }else{
            console.log("%c   Faltan trabajos practicos", "color:red")
        }
    }
}

aprobo();