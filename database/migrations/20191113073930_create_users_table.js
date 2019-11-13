
exports.up = function(knex) {
    return knex.schema.createTable('userList', table =>{
        table.increments();
        table.string("username", 100).notNullable();
        table.string("password", 100).notNullable();
        table.string("department",100).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('userList');  
};
