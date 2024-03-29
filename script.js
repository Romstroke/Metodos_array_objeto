// document.write('<p>Estadisticas centro medico ñuñoa</p>');

const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

//Copias de arrays para no trabajar sobre el original y asi no arriesgarme a eliminar algo
// const copiaRadiologia = [radiologia] //aqui se agregan despues del array
// const copiaDental = dental; //referencia 
const copiaRadiologia = [...radiologia];
const copiaTraumatologia = [...traumatologia]; //... operador spread toma todo y lo une a los nuevos elementos agregados, y todo en un mismo array 
const copiaDental = [...dental];

//1. Agregar las siguientes horas al arreglo de Traumatología (2 Puntos):  

copiaTraumatologia.push(
    {
        hora: '9:00',
        especialista: 'RENÉ POBLETE',
        paciente: 'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE'
    },
    {
        hora: '9:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:00',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONASA'
    },
);

//Para comprobar que se esté manipulando la copia y no el original
// console.log(traumatologia);
// console.log(copiaTraumatologia);

//2. Eliminar el primer y último elemento del arreglo de Radiología (1 Punto). 

copiaRadiologia.pop();
copiaRadiologia.shift();

//Para comprobar que se esté manipulando la copia y no el original
// console.log(radiologia);
// console.log(copiaRadiologia);

// 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, 
//la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado
//y cada fila de información debe estar separada por un párrafo (2 Puntos).  

// for (let i = 0; i < copiaDental.length; i++) {
//     document.write(`<p>${copiaDental[i].hora} - ${copiaDental[i].especialista} - ${copiaDental[i].paciente} -  ${copiaDental[i].rut} -  ${copiaDental[i].prevision} </p>`);
// }

//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.  
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo (3 Puntos).  

const pacientesRadiologia = copiaRadiologia.map(function (paciente) {
    return paciente.paciente;
});

const pacientesTraumatologia = copiaTraumatologia.map(function (paciente) {
    return paciente.paciente;
});

const pacientesDental = copiaDental.map(function (paciente) {
    return paciente.paciente;
});

const pacientesTotal = pacientesRadiologia.concat(pacientesTraumatologia, pacientesDental);

// console.log(typeof pacientesTotal)
// console.log(pacientesTotal.length)

//Anteriormente en ejercicio 2, se ha eliminado a FRANCISCA ROJAS y RAMON ULLOA(por estar dentro del primer y último objeto del array)

// for(let i=0;i < pacientesTotal.length;i++){
//     document.write(`<p>${pacientesTotal[i]}</p>`)
// };

//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental (1 Punto)

const isapre = copiaDental.filter(paciente => paciente.prevision == 'ISAPRE');
// console.log(isapre)

//Luego de filtrar los objetos que contienen la prevision isapre, agrupo sólo los pacientes y su previsión en un nuevo array
const pacientesYPrevisionIsapre = [];

isapre.forEach(paciente => {
    pacientesYPrevisionIsapre.push({ paciente: paciente.paciente, prevision: paciente.prevision });
});

// console.log(pacientesYPrevisionIsapre);

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología (1 Punto).   

const fonasa = copiaTraumatologia.filter(paciente => paciente.prevision == 'FONASA');
// console.log(fonasa);

//Luego de filtrar los objetos que contienen la prevision fonasa, agrupo sólo los pacientes y su previsión en un nuevo array
const pacientesYPrevisionFonasa = [];

fonasa.forEach(paciente => {
    pacientesYPrevisionFonasa.push({ paciente: paciente.paciente, prevision: paciente.prevision });
});

// console.log(pacientesYPrevisionFonasa);

//FUNCIÓN ÚNICA PARA IMPRIMIR
//(comenté el código que se imprimía afuera para no desarmar el orden original del ejercicio)

function imprimirManipulaciones() {
    //Línea 1 que venia con el documento
    document.write('<p>Estadisticas centro medico ñuñoa</p>');
    //Ejercicio 3
    document.write('<p>Lista de consultas médicas dentales</p>');

    for (let i = 0; i < copiaDental.length; i++) {
        document.write(`<p>${copiaDental[i].hora} - ${copiaDental[i].especialista} - ${copiaDental[i].paciente} -  ${copiaDental[i].rut} -  ${copiaDental[i].prevision} </p>`);
    };
    //Ejercicio 4
    document.write(`<p>Total de pacientes atendidos: ${pacientesTotal.length}</p>`);

    for (let i = 0; i < pacientesTotal.length; i++) {
        document.write(`<p>${pacientesTotal[i]}</p>`)
    };

    //Ejercicio 5
    document.write(`<p>Total de pacientes con ISAPRE en atenciones dentales: ${pacientesYPrevisionIsapre.length}</p>`);

    for (let i = 0; i < pacientesYPrevisionIsapre.length; i++) {
        document.write(`<p>${pacientesYPrevisionIsapre[i].paciente} - ${pacientesYPrevisionIsapre[i].prevision} </p>`)
    }
    //Ejercicio 6
    document.write(`<p>Total de pacientes con FONASA en traumatología: ${pacientesYPrevisionFonasa.length}</p>`);

    for (let i = 0; i < pacientesYPrevisionFonasa.length; i++) {
        document.write(`<p>${pacientesYPrevisionFonasa[i].paciente} - ${pacientesYPrevisionFonasa[i].prevision} </p>`)
    }

}

imprimirManipulaciones()

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
