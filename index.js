const nombre = "Roberto"
console.log(nombre)
const apellido = 'Freitas'
console.log(apellido)
const estudiante = nombre.concat(``).concat(apellido)
console.log(estudiante)

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

const estudianteLength = estudiante.length
console.log(estudianteLength)

const inicialNombre = nombre.substring(0, 1)
console.log(inicialNombre)

const finalApellido = apellido.substring(apellido.length - 1, apellido.length)
console.log(finalApellido)

const estudianteSinEspacios = estudiante.replace(/ /g, '')
console.log(estudianteSinEspacios)

const nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante)