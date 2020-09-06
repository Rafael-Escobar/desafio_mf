const knex =require('knex');

exports.up= function( knex) {
    return knex.schema.createTable('contacts', table => {
        table.increments('id').primary()
        table.string('nome',200).notNullable()
        table.string('celular',20).notNullable()
    })
}

exports.down= function ( knex) {
    return knex.schema.dropTable('contacts')
}

