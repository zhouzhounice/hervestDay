#!/usr/bin/env node
const commander = require('commander');
const process = require('process');
const pkg = require('../package.json');
const program = new commander.Command(); // 新创建一个实例

// program
//   .version(pkg.version)
//   .parse(process.argv)

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug','是否开启调试模式',false)
  .option('-e, --env <envName>','获取环境变量名称')
  .parse(process.argv)

console.log(program.opts().debug)
console.log(program.opts().env)