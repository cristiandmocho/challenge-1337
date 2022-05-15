import mysql from 'mysql2/promise';

export async function getDBConnection() {
    const conn = await mysql.createConnection({
        connectTimeout: 10000,
        database: 'db1337',
        host: process.env.DB_SERVER_HOST,
        port: process.env.DB_SERVER_PORT,
        user: process.env.DB_SERVER_USER,
        password: process.env.DB_SERVER_PASSWORD,
    });

    return conn;
}