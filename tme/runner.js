const fs = require("fs");
const path = require("path");

const chalk = require("chalk");

const render = require("./render");
const forbidenDirs = ["node_modules"];
class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runnTest() {
    for (let file of this.testFiles) {
      console.log(chalk.gray(`===runing ${file.shortName}`));
      const beforEaches = [];
      global.render = render;
      global.beforeEach = (fn) => {
        beforEaches.push(fn);
      };
      global.it = async (desc, fn) => {
        beforEaches.forEach((func) => func());
        try {
          await fn();
          console.log(chalk.green(`\t OK - ${desc}`));
        } catch (err) {
          const message = err.message.replace(/\n/g, "\n\t\t");
          console.log(chalk.red(`\t X -${desc}`));
          console.log(chalk.red(`\t error mesage : ${message}`));
        }
      };

      try {
        require(file.name);
      } catch (err) {
        // console.log(`error loading file ${file.name} `);
        console.log(chalk.red(err));
      }
    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes(".test.js")) {
        this.testFiles.push({ name: filepath, shortName: file });
      } else if (stats.isDirectory() && !forbidenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);

        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
