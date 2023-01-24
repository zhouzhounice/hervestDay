#! /usr/bin/env node

// console.log('myCli')

// 与命令行做交互
// console.log(process.argv[2])
// const str = process.argv[2]
// if(str==='--help'){
//   console.log('获取到命令参数')
// }

const { program } = require('commander');

// 设置一个指令参数
program.option('-f --framwork <framwork>','设置框架')
program.parse(process.argv)