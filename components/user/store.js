const Model = require('./model');

function addUser(user){
    const MyUser = new Model(user);
    return MyUser.save();
}

async function getAllUser(){
    const users = await Model.find();
    return users;
}

module.exports = {
    add: addUser,
    get: getAllUser
}