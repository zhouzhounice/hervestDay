import inquirer from "inquirer";
import config from '../config/index.js';
import downloadFun from './download.js';

const myAction = async function(proj,args){
  // 询问用户需要下载什么样的后台框架
const answer = await  inquirer.prompt([
    {
      type:'list',
      name:'framwork',
      choices:config.framwork,
      message:'请选择你要使用的框架：'
    },
  ])
  const {framwork} = answer;
  const url = `${config.framworkUrl[framwork]}`
  // 下载代码模板
  downloadFun(url,proj)
  // console.log(answer);
}
// exports.myAction = myAction
export default myAction