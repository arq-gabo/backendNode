const db = require('mongoose');

db.Promise = global.Promise;

//`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`;
async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[DB]Connectado con éxito!!!')
}

module.exports = connect;