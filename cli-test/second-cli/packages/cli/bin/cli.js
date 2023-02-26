#!/usr/bin/env node

const importLocal = require('import-local');
const {log} = require("@anne.cn/utils");
const entry = require("../lib/index")

if(importLocal(__filename)){
	log.info('cli','使用本次  anne-cli  版本')
}else {
	entry(process.argv.slice(2))
}
// console.log(importLocal(__filename))
// console.log(process.argv.slice(2))
// module.exports = cli;
//
// function cli() {
//   return 'Hello from cli';
// }
