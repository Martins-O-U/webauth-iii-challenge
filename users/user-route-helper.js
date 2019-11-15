const db =require('../database/db-config')

module.exports ={
    getUsers,
    getUserById,
    getUsersBY,
    addUser
}

function getUsers() {
    return db("userList")
        .select("userList.id", "userList.username", "userList.department")
}

function getUserById(id){
    return db('userList').where({id}).first()
}

function getUsersBY (filter){
    return db('userList').where(filter)
}

function addUser (user) {
    return db("userList").insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return getUserById(id);
        })
}
