// Obtén una referencia al input de documento de identidad
const documentoInput = document.getElementById('documentoIdentidad');
const periodoInput = document.getElementById('periodo');
const outputNombre = document.getElementById('outputNombre');
const outputApellido = document.getElementById('outputApellido');


const calificacionMatematicas = document.getElementById('calMat');
const observacionMatematicas = document.getElementById('obMat');
const calificacionLenguaje = document.getElementById('calLen');
const observacionLenguaje = document.getElementById('obLen');
const calificacionIngles = document.getElementById('calIng');
const observacionIngles = document.getElementById('obIng');

// Definición de objetos tipo periodo para cada persona
const persona1Periodos = [
    { materia: "Matemáticas", calificacion: 90, observacion: "Buena participación en clases" },
    { materia: "Lenguaje", calificacion: 85, observacion: "Necesita mejorar en redacción" },
    { materia: "Ingles", calificacion: 92, observacion: "Destaca en experimentos" }
];

const persona2Periodos = [
    { materia: "Matemáticas", calificacion: 95, observacion: "Se recomienda estudio adicional" },
    { materia: "Lenguaje", calificacion: 88, observacion: "Falta de atención en clases" },
    { materia: "Ingles", calificacion: 91, observacion: "Mejorando en trabajos prácticos" }

];

const persona3Periodos = [
    { materia: "Matemáticas", calificacion: 85, observacion: "Necesita más práctica en problemas" },
    { materia: "Lenguaje", calificacion: 92, observacion: "Buenas habilidades de escritura" },
    { materia: "Ingles", calificacion: 89, observacion: "Interés en experimentos" }

];

// Definición de objetos tipo persona con sus respectivos periodos
const persona1 = {
    numeroDocumento: "123456789",
    nombre: "Juan",
    apellido: "Pérez",
    periodos: persona1Periodos
};

const persona2 = {
    numeroDocumento: "987654321",
    nombre: "María",
    apellido: "Rodríguez",
    periodos: persona2Periodos
};

const persona3 = {
    numeroDocumento: "567890123",
    nombre: "Carlos",
    apellido: "García",
    periodos: persona3Periodos
}

// Evento para detectar cambios en el documento de identidad
documentoInput.addEventListener('input', function() {
    const numeroDocumento = documentoInput.value;

    if (numeroDocumento === persona1.numeroDocumento) {
        outputNombre.innerText = persona1.nombre;
        outputApellido.innerText = persona1.apellido;

        calificacionMatematicas.innerText = persona1.periodos[0].calificacion;
        observacionMatematicas.innerText = persona1.periodos[0].observacion;
        calificacionLenguaje.innerText = persona1.periodos[1].calificacion;
        observacionLenguaje.innerText = persona1.periodos[1].observacion;
        calificacionIngles.innerText = persona1.periodos[2].calificacion;
        observacionIngles.innerText = persona1.periodos[2].observacion;
    } else if (numeroDocumento === persona2.numeroDocumento) {
        outputNombre.innerText = persona2.nombre;
        outputApellido.innerText = persona2.apellido;

        calificacionMatematicas.innerText = persona2.periodos[0].calificacion;
        observacionMatematicas.innerText = persona2.periodos[0].observacion;
        calificacionLenguaje.innerText = persona2.periodos[1].calificacion;
        observacionLenguaje.innerText = persona2.periodos[1].observacion;
        calificacionIngles.innerText = persona2.periodos[2].calificacion;
        observacionIngles.innerText = persona2.periodos[2].observacion;
    } else if (numeroDocumento === persona3.numeroDocumento) {
        outputNombre.innerText = persona3.nombre;
        outputApellido.innerText = persona3.apellido;

        calificacionMatematicas.innerText = persona3.periodos[0].calificacion;
        observacionMatematicas.innerText = persona3.periodos[0].observacion;
        calificacionLenguaje.innerText = persona3.periodos[1].calificacion;
        observacionLenguaje.innerText = persona3.periodos[1].observacion;
        calificacionIngles.innerText = persona3.periodos[2].calificacion;
        observacionIngles.innerText = persona3.periodos[2].observacion;
    } else {
        // Limpiar valores si el número de documento no coincide
        outputNombre.innerText = '';
        outputApellido.innerText = '';
        calificacionMatematicas.innerText = '';
        observacionMatematicas.innerText = '';
        calificacionLenguaje.innerText = '';
        observacionLenguaje.innerText = '';
        calificacionIngles.innerText = '';
        observacionIngles.innerText = '';
    }
});
