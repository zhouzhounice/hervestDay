import ora from 'ora';
const spinner = ora().start();
spinner.text = 'loading...';

setTimeout(()=>{
  console.log('任务执行中...');
  spinner.succeed('任务结束')
},3000)