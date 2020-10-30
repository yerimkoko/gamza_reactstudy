import knex from 'knex';

const db = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        database: "potato_server_db",
        password: "0217"
    }
})