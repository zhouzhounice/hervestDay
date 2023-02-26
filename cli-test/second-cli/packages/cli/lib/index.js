const commander = require("commander");
const createInitCommand = require('@anne.cn/init');
const semver = require('semver')

const { program } = commander;
const { log } = require('@anne.cn/utils')
const pkg = require("../package.json")
const LOWEST_NODE_VERSION = "14.0.0";

function checkNodeVersion(){
	log.verbose('node version',process.version);
	if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
		throw new Error(`anne-cli需要安装${LOWEST_NODE_VERSION}以上的版本`)
	}
}

function preActions(){
	checkNodeVersion()
}
process.on('uncaughtException',(e)=>{
	console.log(e.message)
})
module.exports = function (args){
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
