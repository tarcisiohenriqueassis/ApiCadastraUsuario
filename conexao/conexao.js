import mysql from 'mysql2/promise';

export const Pool = mysql.createPool({
    host:"localhost",
    user:"cadastro_cliente",
    password:"123456",
    database:"bd_cadastro_clientes"
});

