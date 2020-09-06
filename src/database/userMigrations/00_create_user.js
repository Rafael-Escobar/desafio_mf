const knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary()
        table.string('user', 50).notNullable()
        table.string('password', 100).notNullable()
    })
}

exports.down= function(knex) {
    return knex.schema.dropTable('user')
}