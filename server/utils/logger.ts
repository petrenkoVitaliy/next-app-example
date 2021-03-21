import chalk from 'chalk';

class LoggerModel {
  eventPrefix = chalk.green(`:: EVENT :: `);
  statusPrefix = chalk.yellow(`:: STATUS :: `);
  logPrefix = chalk.magenta(`:: LOG :: `);
  errorPrefix = chalk.red(`:: ERROR :: `);

  __getObjLog(msg: any) {
    return require('util').inspect(msg, { colors: true, depth: null });
  }

  event(msg: string) {
    console.log(`${this.eventPrefix}`, chalk.blue(msg));
  }

  status(msg: string) {
    console.log(`${this.statusPrefix}`, chalk.yellow(msg));
  }

  log(...msg: any) {
    console.log(`${this.logPrefix}`, chalk.bold.cyan(this.__getObjLog(msg)));
  }

  error(...msg: any) {
    console.log(`${this.errorPrefix}`, chalk.bold.redBright(this.__getObjLog(msg)));
  }
}

export const Logger = new LoggerModel();
