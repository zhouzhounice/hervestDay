import inquirer from "inquirer";
import config from '../config/index.js';

const myAction = function(proj,args){
  // 询问用户需要下载什么样的后台框架
  inquirer.prompt([
    {
      type:'input',
      name:'projectName',
      message:'请输入你要创建的项目名称：'
    },
    {
      type:'list',
      name:'framwork',
      choices:config.framwork,
      message:'请选择你要使用的框架：'
    },
  ]).then(answer =>{
    console.log(answer)
  })
}
// exports.myAction = myAction
export default myAction