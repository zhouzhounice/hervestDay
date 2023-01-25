import download from "download-git-repo";

const downLoadFun = (url,proj) =>{
  download(`direct:${url}`,`../framwork/${proj}`,{clone:true},(err)=>{
  console.log(err)
})
}

export default downLoadFun;