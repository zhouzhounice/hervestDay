import download from 'download-git-repo';

download('direct:https://gitee.com/beiyaoyaoyao/egg-template.git','./egg',{clone:true},(err)=>{
  console.log(err)
})