const { sh } = require('tasksfile');

require('dotenv').config();

async function runMigrations(options) {
  try {
    sh(`npx sequelize-cli db:migrate`, { nopipe: true });
  } catch (ex) {
    console.log(ex);
  }
}

async function runSeeds(options) {
  sh(`npx sequelize-cli db:seed:all`, { nopipe: true });
}

async function createMigration(options) {
  if (!options.name) {
    console.log('no name provided => add --name="NAME_HERE"');
    return;
  }
  console.log(options.name);

  sh(`npx sequelize-cli migration:generate --name ${options.name}`, { nopipe: true });
}

async function createSeed(options) {
  if (!options.name) {
    console.log('no name provided => add --name="NAME_HERE"');
    return;
  }
  console.log(options.name);

  sh(`npx sequelize-cli seed:generate --name ${options.name}`, { nopipe: true });
}

module.exports = {
  createMigration,
  createSeed,
  runMigrations,
  runSeeds,
};
