import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSOWORD,  
    database: process.env.BD
})

console.log(`api conectada com ${process.env.BD}`);
export default con;




