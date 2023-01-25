import download from "download-git-repo";
import ora from "ora";

const downLoadFun = (url,proj) =>{
  const spinner = ora().start();
  spinner.text = '代码模板正在下载中...';
  download(`direct:${url}`,`../framwork/${proj}`,{clone:true},(err)=>{
    if(!err){
      spinner.succeed('代码模板下载成功！')
    }else{
      spinner.fail('代码模板下载失败！')
    }
    console.log(`Done! you run :`);
    console.log(`cd ${proj}`);
    console.log(`npm install`);
    console.log(`npm run dev`);
})
}

export default downLoadFun;