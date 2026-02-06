import mysql from "mysql2/promise"

const pool = await mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"bookmarker",
    connectionLimit:10
});

export const db = pool;