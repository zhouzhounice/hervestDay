#!/usr/bin/env node

import importLocal from 'import-local';
import {log} from "@anne.cn/utils";
import {filename} from 'dirname-filename-esm';
import entry from "../lib/index.js";

const __filename = filename(import.meta)

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
