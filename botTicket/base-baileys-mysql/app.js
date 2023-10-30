

// const {
//     createBot,
//     createProvider,
//     createFlow,
//     addKeyword
// } = require('@bot-whatsapp/bot');

// const QRPortalWeb = require('@bot-whatsapp/portal');
// const BaileysProvider = require('@bot-whatsapp/provider/baileys');
// const MySQLAdapter = require('@bot-whatsapp/database/mysql');

// const MYSQL_DB_HOST = 'localhost';
// const MYSQL_DB_USER = 'root';
// const MYSQL_DB_PASSWORD = '123456789';
// const MYSQL_DB_NAME = 'bot';
// const MYSQL_DB_PORT = '3306';

// const flowDatosReserva = addKeyword(['reservar', '3'])
//     .addAnswer('Entendido. Hemos registrado tu interés. Pronto nos pondremos en contacto para confirmar tu reserva. Gracias por confiar en nuestra inmobiliaria.');

// const flowVerPropiedades = addKeyword(['propiedades', '1'])
//     .addAnswer([
//         '🏠 Aquí tienes una lista de propiedades exclusivas disponibles:',
//         '1. Mansión con vista al mar - $1,500,000',
//         '2. Penthouse en el centro de la ciudad - $1,000,000',
//         '3. Residencia en zona exclusiva con campo de golf - $2,000,000',
//         '\nSi deseas reservar alguna, escribe "reservar".'
//     ], null, null, [flowDatosReserva]);

// const flowConsultasGenerales = addKeyword(['consultas', '2'])
//     .addAnswer('Nos enorgullece ofrecer propiedades de la más alta calidad. Si tienes alguna pregunta sobre nuestras propiedades o servicios, no dudes en preguntar. Estamos aquí para ayudarte.');

// const flowBienvenida = addKeyword(['hola', 'ole', 'alo', 'buenas', 'saludo'])
//     .addAnswer('🙌 ¡Hola! Bienvenido a *Inmobiliaria de Prestigio*. ¿En qué puedo ayudarte hoy?')
//     .addAnswer([
//         '👉 *1* para ver nuestras propiedades exclusivas.',
//         '👉 *2* si tienes consultas generales.',
//     ], null, null, [flowVerPropiedades, flowConsultasGenerales]);

// const main = async () => {
//     const adapterDB = new MySQLAdapter({
//         host: MYSQL_DB_HOST,
//         user: MYSQL_DB_USER,
//         database: MYSQL_DB_NAME,
//         password: MYSQL_DB_PASSWORD,
//         port: MYSQL_DB_PORT,
//     });
//     const adapterFlow = createFlow([flowBienvenida]);
//     const adapterProvider = createProvider(BaileysProvider);
//     createBot({
//         flow: adapterFlow,
//         provider: adapterProvider,
//         database: adapterDB,
//     });
//     QRPortalWeb();
// }

// main();
const {
    createBot,
    createProvider,
    createFlow,
    addKeyword
} = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MySQLAdapter = require('@bot-whatsapp/database/mysql');

const MYSQL_DB_HOST = 'viaduct.proxy.rlwy.net';
const MYSQL_DB_USER = 'root';
const MYSQL_DB_PASSWORD = 'EbcagC-EfhBeA3ghB6Hf--b11aB-2G21';
const MYSQL_DB_NAME = 'railway';
const MYSQL_DB_PORT = '50722';
// Flow para manejar sectores del evento
const flowSectoresEvento = addKeyword(['1'])
    .addAnswer('Tenemos 3 sectores disponibles:\n\n- Pista Acceso a Pista.\n- VIP Acceso a Pista y tarima VIP con lounges y asentos extras.\n- BACKSTAGE Acceso a todos los sectores + escenario, con baño exclusivo.\nEscribe "menu" para volver al menú principal.');

// Flow para precios de las entradas
const flowPreciosEntradas = addKeyword(['2'])
    .addAnswer('PREVENTAS 01\n\n🎫 130Bs PISTA\n🎫 180Bs VIP\n🎫 230Bs BACKSTAGE\nEscribe "menu" para volver al menú principal.');

// Flow para Mesas/Lounge
const flowMesasLounge = addKeyword(['3'])
    .addAnswer('Ofrecemos los siguientes combos:\n\nCOMBO PISTA (1000BS)\n- 05 TICKETS PISTA\n- MESA ALTA EN SECTOR PISTA\n- 500BS EN CONSUMO\n\nCOMBO VIP (1800BS)\n- 05 TICKETS VIP\n- LOUNGE EN TARIMA SECTOR VIP\n- 1000BS EN CONSUMO\n\nCOMBO BACKSTAGE (3500BS)\n- 05 TICKETS BACKSTAGE\n- LOUNGE EN EL ESCENARIO\n- 2000BS EN CONSUMO.\nEscribe "menu" para volver al menú principal.');

// Flow para comprar entradas
const flowComprarEntradas = addKeyword(['4'])
    .addAnswer('Entendido. Hemos registrado tu interés en comprar entradas. Pronto nos pondremos en contacto contigo para completar tu compra.\nEscribe "menu" para volver al menú principal.');

// Flow del menú principal
const flowMenu = addKeyword(['menu', 'hola', 'ole', 'alo', 'buenas', 'saludo', 'Hola'])
    .addAnswer('🙌 ¡Hola! Bienvenido a nuestro evento. ¿En qué puedo ayudarte hoy?')
    .addAnswer([
        '👉 *1* para conocer los sectores del evento.',
        '👉 *2* para conocer los precios de las entradas.',
        '👉 *3* para información sobre mesas y lounges.',
        '👉 *4* para comprar entradas.'
    ], null, null, [flowSectoresEvento, flowPreciosEntradas, flowMesasLounge, flowComprarEntradas]);

// ... (Parte del código que no cambia)

const main = async () => {
    const adapterDB = new MySQLAdapter({
        host: MYSQL_DB_HOST,
        user: MYSQL_DB_USER,
        database: MYSQL_DB_NAME,
        password: MYSQL_DB_PASSWORD,
        port: MYSQL_DB_PORT,
    });
    const adapterFlow = createFlow([flowMenu]);
    const adapterProvider = createProvider(BaileysProvider);
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    QRPortalWeb();
}

main();
