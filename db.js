const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});


pool.execute(`SELECT VERSION() AS version`, [], function (err, result) {
  if (err) throw err;

  console.log(`sql version - ${result[0].version}`);
});


module.exports = pool.promise();
