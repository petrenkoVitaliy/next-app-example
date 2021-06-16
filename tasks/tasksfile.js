const { sh, cli, help } = require('tasksfile');
const dedent = require('dedent');

const { initDatabase, dropDatabase, fullReload } = require('./scripts/database');
const { uploadFile } = require('./scripts/cloud');
const {
  createMigration,
  runMigrations,
  createSeed,
  runSeeds,
  buildSeeds,
} = require('./scripts/sequelize');

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
  schema: {
    init() {
      initDatabase();
    },
    drop() {
      dropDatabase();
    },
    reload() {
      fullReload();
    },
  },

  migration: {
    add(...args) {
      createMigration(...args);
    },
    run() {
      runMigrations();
    },
  },

  seed: {
    add(...args) {
      createSeed(...args);
    },
    run() {
      runSeeds();
    },
    build() {
      buildSeeds();
    },
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
  cloud,
});
