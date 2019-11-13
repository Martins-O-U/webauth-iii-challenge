const db =require('../database/db-config')

module.exports ={
    getUsers,
    getUserById,
    getUsersBY,
    addUser
}

function getUsers(){
    return db('userList')
}

function getUserById(id){
    return db('userList').where({id}).first()
}

function getUsersBY (filter){
    return db('userList').where(filter)
}

function addUser (user) {
    return db("usersList").insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return getUserById(id);
        })
}