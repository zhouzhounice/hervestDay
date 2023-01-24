// 配置help命令 选项
const myHelp = function(program){
  // 设置一个指令参数
  program.option('-f --framwork <framwork>','设置框架')
}

// module.exports.myHelp = myHelp
export default myHelp