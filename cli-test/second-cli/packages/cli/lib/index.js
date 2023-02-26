const commander = require("commander");
const createInitCommand = require('@anne.cn/init')

const { program } = commander;
const { log } = require('@anne.cn/utils')
const pkg = require("../package.json")

module.exports = function (args){
	log.info('version',pkg.version)
	program
		.name(Object.keys(pkg.bin)[0])
		.usage("<command> [options]")
		.version(pkg.version)
		.option('-d, --debug','是否开启调试模式',false)
	createInitCommand(program)
	program.parse(process.argv)
}
