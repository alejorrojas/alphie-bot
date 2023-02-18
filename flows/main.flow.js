const { addKeyword } = require("@bot-whatsapp/bot");
const { alumnoFlow, profesorFlow, asistenciaFlow} = require("./index");


const mainAnswer = ["Bienvenido! 🌄", "Mi nombre es Alphie y estoy a tu servicio para lo que necesites", "¿Como puedo ayudarte?"]
const mainOptions = {
    buttons: [{ body: 'Tomar asistencia' }, { body: 'Cargar un nuevo alumno' }, { body: 'Registrarte como profesor' }],
    capture: true
}

const mainFlow = addKeyword(["hi", "hola"])
    .addAnswer(mainAnswer, mainOptions, null, [asistenciaFlow, profesorFlow, alumnoFlow])


module.exports = mainFlow