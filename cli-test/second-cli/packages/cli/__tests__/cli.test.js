import path from "node:path";
import {execa} from "execa";
import help from "../../../../../node.js/myCli/lib/core/help";

const CLI = path.join(__dirname,'../bin/cli.js')
const bin = () => (...args) => execa(CLI,args)
// 运行错误的命令
test('run error command', async ()=>{
	const { stderr } = await bin()('iii');
	expect(stderr).toContain('iii')
})

// 测试help命令不报错
test('shold not throw error when use --help',async ()=>{
	let err = null;
	try {
		await bin()("--help");
	}catch (e){
	err = e;
	}
	expect(err).toBe(null)
})
// 测试version正确显示
test('show correct version',async ()=>{
	const { stdout } =await bin()('-V');
	expect(stdout).toContain(require('../package.json').version)
})

// 测试是否正确开启debug模式
test('open debug mode', async ()=>{
	let error = null
	try {
	const r =await bin()("--debug")
	}catch (e) {
	error = e
	}
	expect(error?.message).toContain('launch debug mode')
})
