const path = require("path");
module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'admin',
        password: 'admin',
        database: 'admin'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true
}