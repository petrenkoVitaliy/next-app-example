const { sh, cli, help } = require('tasksfile');
const dedent = require('dedent');

const { initDatabase, dropDatabase } = require('./scripts/database');
const { uploadFile } = require('./scripts/cloud');
const { createMigration, runMigrations, createSeed, runSeeds } = require('./scripts/sequelize');

/**
 * use in terminal:
 *  npx task [task_name] --[...options] [...arguments]
 *    OR
 *  npm run task -- [task_name] --[...options] [...arguments]     - for task execution (without [])
 *
 *  npx task --help                                               - for tasks list
 *  npx task [task_name] --help                                   - for task detailed help
 *
 *  --
 * functions are: (options: {[key: string]: string | boolean | number}, ...arguments: (string | boolean | number)[]) => void
 *
 * [task_name] can be nested, ex: format:lint
 */

const format = {
  lint() {
    sh(`eslint \"**/*.{js,ts,tsx}\" --fix`, { nopipe: true });
  },
  prettier() {
    sh(`prettier --write  \"**/*.+(ts|tsx|js|jsx)\"`, { nopipe: true });
  },
};

const db = {
  init() {
    initDatabase();
  },
  drop() {
    dropDatabase();
  },
};

const sequelize = {
  migration(...args) {
    createMigration(...args);
  },
  seed(...args) {
    createSeed(...args);
  },
  run_migrations() {
    runMigrations();
  },
  run_seeds() {
    runSeeds();
  },
};

const cloud = {
  upload_file(...args) {
    uploadFile(...args);
  },
};

cli({
  format,
  db,
  sequelize,
  cloud,
});
