console.log(async function(){
  return 4
}())

console.log(function(){
  return new Promise(resolve => {
    resolve(4);
  })
}())

(
  function(){
    const result = async function(){
      var content = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(6)
        },500)
      })
      console.log(content)
      return 4
    }()
    setTimeout(() => {
      console.log(result)
    }, 800)
  }  
)()