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

const periodo1 = [
    { calificacion: 90, observacion: "Es muy participativo en clases" },
    { calificacion: 95, observacion: "Se recomienda que se practique un examen de optometría" },
    { calificacion: 92, observacion: "Se recomienda que se practique un examen de optometría" }
  ];
  
  const periodo2 = [
    { calificacion: 80, observacion: "Puede mejorar en su enfoque" },
    { calificacion: 85, observacion: "Necesita practicar más lectura" },
    { calificacion: 92, observacion: "Se recomienda que se practique un examen de optometría" }
  ];
  
  const periodo3 = [
    { calificacion: 88, observacion: "Buena participación en actividades" },
    { calificacion: 92, observacion: "Mejorando en lenguaje" },
    { calificacion: 92, observacion: "Se recomienda que se practique un examen de optometría" }
  ];

  const periodo4 = [
    { calificacion: 88, observacion: "Buena participación en actividades" },
    { calificacion: 92, observacion: "Mejorando en lenguaje" },
    { calificacion: 92, observacion: "Se recomienda que se practique un examen de optometría" }
  ];
  
  const estudiantes = [
    { estudiante: { documento: "123456789", nombre: "Juan", apellido: "Pérez" }, periodos: [periodo1, periodo2, periodo3, periodo4] },
    { estudiante: { documento: "987654321", nombre: "María", apellido: "Rodríguez" }, periodos: [periodo1, periodo2, periodo3, periodo4] },
    { estudiante: { documento: "567890123", nombre: "Carlos", apellido: "García" }, periodos: [periodo1, periodo2, periodo3, periodo4] }
  ];
  

  // Función para buscar el estudiante por número de documento
function buscarEstudiantePorDocumento(documento) {
  return estudiantes.find(function(estudiante) {
    return estudiante.estudiante.documento === documento;
  });
}

// Función para actualizar los campos de salida
function actualizarCampos(estudiante) {
  if (estudiante) {
    outputNombre.textContent = estudiante.estudiante.nombre;
    outputApellido.textContent = estudiante.estudiante.apellido;
  } else {
    outputNombre.textContent = "";
    outputApellido.textContent = "";
  }
}

// Escuchar el evento de cambio en el input de documento de identidad
documentoInput.addEventListener('input', function() {
  var documento = documentoInput.value;
  var estudianteEncontrado = buscarEstudiantePorDocumento(documento);
  actualizarCampos(estudianteEncontrado);
});

// Inicializar campos de salida
actualizarCampos(null);



  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i].estudiante;
    const periodosEstudiante = estudiantes[i].periodos;
  
    console.log("Estudiante:", estudiante.nombre, estudiante.apellido);
  
    for (let j = 0; j < periodosEstudiante.length; j++) {
      const periodo = periodosEstudiante[j];
  
      console.log("Periodo", j + 1);
      console.log("Matemáticas:", periodo[0].calificacion);
      console.log("Lenguaje:", periodo[1].calificacion);
      console.log("Inglés:", periodo[1].calificacion);
      console.log("---------------");
    }
  }