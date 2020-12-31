const store = require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name,
    };

    return store.add(user);
}

function getAllUsers(){
    return new Promise((resolve, reject) => {
        resolve(store.get());
    })
}

module.exports = {
    addUser,
    getAllUsers
}