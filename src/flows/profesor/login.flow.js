const { addKeyword } = require("@bot-whatsapp/bot");
const service = require("../../services/profesor.service");
const asistenciaFlow = require("../asistencia/asistencia.flow");

/* Flujo para loggear un profesor */

const buttons = [{ body: 'Tomar asistencia' }, { body: 'Cargar un nuevo alumno' }, { body: 'Actualizar pago de un alumno' }, { body: 'Menu principal' }]

const loginFlow = addKeyword(["inicia sesion"])
    .addAnswer("Ingresa tu nombre de usuario", { capture: true}, async(ctx, {flowDynamic, fallBack}) =>{
        const profesor = await service.getProfesor(ctx.body)

        if(profesor) flowDynamic([`Bienvenido ${profesor.username}`])
        else fallBack()
    })
    .addAnswer("¿Qué accion desea realizar?", {buttons, capture: true}, null, [/*@todo add flows */])
