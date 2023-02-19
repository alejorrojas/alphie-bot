const { addKeyword } = require("@bot-whatsapp/bot");

const asistenciaFlow = addKeyword(["asistencia", "tomar asistencia"])

module.exports = asistenciaFlow