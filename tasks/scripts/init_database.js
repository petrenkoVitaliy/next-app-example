const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '',
    user: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
  });

  try {
    const res = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(res);
  } catch (ex) {
    console.log(ex);
  } finally {
    await connection.close();
  }
}

module.exports = {
  initDatabase,
};
