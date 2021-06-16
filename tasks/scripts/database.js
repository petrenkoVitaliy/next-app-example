const mysql = require('mysql2/promise');
require('dotenv').config();
const { runMigrations, runSeeds } = require('./sequelize');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || '',
      port: process.env.DB_PORT || '',
      user: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
    });

    return connection;
  } catch (ex) {
    console.log('cant connect to DB: ');
    console.log(ex);
  }
}

async function initDatabase() {
  const connection = await connectToDatabase();
  try {
    const res = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(res);
  } catch (ex) {
    console.log(ex);
  } finally {
    await connection.close();
  }
}

async function dropDatabase() {
  const connection = await connectToDatabase();

  try {
    const res = await connection.query(`DROP DATABASE IF EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(res);
  } catch (ex) {
    console.log(ex);
  } finally {
    await connection.close();
  }
}

async function fullReload(options) {
  await dropDatabase();
  await initDatabase();
  await runMigrations();
  await runSeeds();
}

module.exports = {
  initDatabase,
  dropDatabase,
  fullReload,
};
