// const inquirer = require('inquirer');
import inquirer from 'inquirer';

inquirer.prompt([
{
  type:'input',
  name:'userName',
  message:'请输入你的名字：'
}
]).then((answer)=>{
  console.log(answer)
})