import chalk from 'chalk';

class LoggerModel {
  routePrefix = chalk.yellowBright(`--> :: ROUTE :: `);
  eventPrefix = chalk.green(`:: EVENT :: `);
  statusPrefix = chalk.yellow(`:: STATUS :: `);
  logPrefix = chalk.magenta(`:: LOG :: `);
  errorPrefix = chalk.red(`:: ERROR :: `);

  __getObjLog(msg: any) {
    return require('util').inspect(msg, { colors: true, depth: null });
  }

  route(msg?: string) {
    console.log(`${this.routePrefix}`, chalk.yellowBright(msg));
  }

  event(...msg: any) {
    console.log(`${this.eventPrefix}`, chalk.blue(this.__getObjLog(msg)));
  }

  status(...msg: any) {
    console.log(`${this.statusPrefix}`, chalk.yellow(this.__getObjLog(msg)));
  }

  log(...msg: any) {
    console.log(`${this.logPrefix}`, chalk.bold.cyan(this.__getObjLog(msg)));
  }

  error(...msg: any) {
    console.log(`${this.errorPrefix}`, chalk.bold.redBright(this.__getObjLog(msg)));
  }
}

export const Logger = new LoggerModel();
