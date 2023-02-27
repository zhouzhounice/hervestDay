import path from 'node:path';
import {program} from "commander";
import createInitCommand from '@anne.cn/init';
import {dirname} from "dirname-filename-esm";
import fse from 'fs-extra';
import semver from 'semver';
import chalk from 'chalk';

import {log, isDebug } from '@anne.cn/utils';

const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname,'../package.json')
const LOWEST_NODE_VERSION = "14.0.0";
const pkg = fse.readJsonSync(pkgPath);

function checkNodeVersion(){
	log.verbose('node version',process.version);
	if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
		throw new Error(chalk.red(`anne-cli需要安装${LOWEST_NODE_VERSION}以上的版本`))
	}
}

function preActions(){
	checkNodeVersion()
}
process.on('uncaughtException',(e)=>{
	if(isDebug()){
		console.log(e)
	}else {
		console.log(e.message)
	}
})
export default function (args){
	log.info('version',pkg.version)
	program
		.name(Object.keys(pkg.bin)[0])
		.usage("<command> [options]")
		.version(pkg.version)
		.option('-d, --debug','是否开启调试模式',false)
		.hook('preAction',preActions)
	createInitCommand(program)
	program.parse(process.argv)
}
