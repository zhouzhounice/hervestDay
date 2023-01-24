import myAction from './action.js';

const myCommander = function(program){
// 设置一个创建脚手架的命令
  program
.command('create <project> [other...]')
.alias('crt')
.description('创建项目')
.action(myAction)
}
// exports.myCommander = myCommander
export default myCommander