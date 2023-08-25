const documentoInput = document.getElementById('documento');
const periodoInput = document.getElementById('periodo');
const outputNombre = document.getElementById('outputNombre');
const outputApellido = document.getElementById('outputApellido');

const notas = document.querySelectorAll('.nota');
const observacion = document.querySelectorAll('.observacion');

console.log();

const reporteAnual = {
  estudiante: estudiantes,
  periodos: periodos
};

const estudiantes = [
  { nombre: "Juan Pérez", documento: "12345678" },
  { nombre: "María Rodríguez", documento: "98765432" },
];



const periodo1 = [
  { calificacion: 90, observacion: "Es muy participativo en clases" },
  { calificacion: 95, observacion: "Se recomienda que se practique un examen de optometría" },
];

const periodo2 = [
  { calificacion: 90, observacion: "Es muy participativo en clases" },
  { calificacion: 95, observacion: "Se recomienda que se practique un examen de optometría" },
];

const periodo3 = [
  { calificacion: 90, observacion: "Es muy participativo en clases" },
  { calificacion: 95, observacion: "Se recomienda que se practique un examen de optometría" },
];

const periodo4 = [
  { calificacion: 90, observacion: "Es muy participativo en clases" },
  { calificacion: 95, observacion: "Se recomienda que se practique un examen de optometría" },
];
