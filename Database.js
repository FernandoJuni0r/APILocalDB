const {Client} = require('pg')

const client = new Client({
    host:   "localhost",
    user:   "postgres",
    port:       5432,
    password:   '0809',
    database: "Blioteca_Virtual"
})

module.exports = client