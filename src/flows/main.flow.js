const { addKeyword } = require("@bot-whatsapp/bot");
const alumnoFlow = require("./alumno/alumno.flow");
const asistenciaFlow = require("./asistencia/asistencia.flow");
const loginFlow = require("./profesor/login.flow")
const registerFlow = require("./profesor/register.flow")


const mainAnswer = ["Bienvenido! 🌄", "Mi nombre es Alphie y estoy a tu servicio para lo que necesites", "¿Como puedo ayudarte?"]
const mainOptions = {
    buttons: [{ body: 'Registrarte profesor' }, { body: 'Incia sesión' }],
    capture: true
}

const mainFlow = addKeyword(["hi", "hola", "menu principal"]).addAnswer(mainAnswer, mainOptions, null, [loginFlow, registerFlow])


module.exports = mainFlow