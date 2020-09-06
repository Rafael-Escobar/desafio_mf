const path = require("path");
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'admin',
        password: 'admin',
        database: 'admin'
    }
});

module.exports = knex;