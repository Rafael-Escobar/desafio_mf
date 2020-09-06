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
// const knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'database.macapa.sqlite')
//     },
//     useNullAsDefault: true
// });

module.exports = knex;