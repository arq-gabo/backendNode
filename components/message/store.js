const db = require('mongoose');
const Model = require('./model');
const { config } = require('../../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DB_NAME = encodeURIComponent(config.dbName);

//Connect to database
//mongodb+srv://gabo:<password>@cluster0.ygg7d.mongodb.net/<dbname>?retryWrites=true&w=majority
const uri = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[DB]Connectado con éxito!!!')

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    //return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //get
    //update
    //delete
}