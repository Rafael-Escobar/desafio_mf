const path = require("path");
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'admin',
        password: 'admin',
        database: 'admin'
    },
    useNullAsDefault: true
});

module.exports = knex;