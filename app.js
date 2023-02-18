const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')
const dotenv = require("dotenv")
const mainFlow = require('./flows/main.flow')
dotenv.config()

/* Credenciales de la database */
const MYSQL_DB_HOST = process.env.DB_HOST
const MYSQL_DB_USER = process.env.DB_USER
const MYSQL_DB_PASSWORD = process.env.DB_PASSWORD
const MYSQL_DB_NAME = process.env.DB_NAME
const MYSQL_DB_PORT = process.env.DB_PORT


const main = async () => {
    const adapterDB = new MySQLAdapter({
        host: MYSQL_DB_HOST,
        user: MYSQL_DB_USER,
        database: MYSQL_DB_NAME,
        password: MYSQL_DB_PASSWORD,
        port: MYSQL_DB_PORT,
    })
    const adapterFlow = createFlow([mainFlow])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()
