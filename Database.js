const pg = require('pg')

var pool = pg.createPool({
    "user": process.env.pg_user,
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port
})

exports.pool = pool