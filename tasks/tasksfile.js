const { sh, cli, help } = require('tasksfile');
const dedent = require('dedent');

const { initDatabase } = require('./scripts/init_database');

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
  migrate() {
    initDatabase();
  },
};

cli({
  format,
  db,
});
