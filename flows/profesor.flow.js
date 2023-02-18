const { addKeyword } = require("@bot-whatsapp/bot");

/* Flujo para registrar un nuevo profesor */

const profesorFlow = addKeyword(["profesor", "registrarte como profesor"])

module.exports = profesorFlow