const { sh } = require('tasksfile');

require('dotenv').config();

async function buildMigrations(options) {
  try {
    sh(`rm -rf ./database/.build/migrations`, { nopipe: true });
    sh(`tsc database/raw_migrations/* --outDir "./database/.build/migrations"`, { nopipe: true });
  } catch (ex) {
    console.log(ex);
  }
}

async function runMigrations(options) {
  try {
    await buildMigrations();
    sh(`npx sequelize-cli db:migrate`, { nopipe: true });
  } catch (ex) {
    console.log(ex);
  }
}

async function buildSeeds(options) {
  try {
    sh(`rm -rf ./database/.build/seeders`, { nopipe: true });
    sh(`tsc database/raw_seeders/* --outDir "./database/.build/seeders"`, { nopipe: true });
  } catch (ex) {
    console.log(ex);
  }
}

async function runSeeds(options) {
  try {
    await buildSeeds();
    sh(`npx sequelize-cli db:seed:all`, { nopipe: true });
  } catch (ex) {
    console.log(ex);
  }
}

async function createMigration(options) {
  if (!options.name) {
    console.log('no name provided => add --name="NAME_HERE"');
    return;
  }
  console.log(options.name);

  sh(
    `npx sequelize-cli migration:generate --migrations-path ./database/raw_migrations --name ${options.name}`,
    { nopipe: true },
  );
}

async function createSeed(options) {
  if (!options.name) {
    console.log('no name provided => add --name="NAME_HERE"');
    return;
  }
  console.log(options.name);

  sh(
    `npx sequelize-cli seed:generate --migrations-path ./database/raw_seeders --name ${options.name}`,
    { nopipe: true },
  );
}

module.exports = {
  createMigration,
  createSeed,
  runMigrations,
  runSeeds,
  buildSeeds,
};
