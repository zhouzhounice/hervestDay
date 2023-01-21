function executor(resolve,reject){
  resolve(100)
}

// let demo = new Promise(executor)

// function onResolve(value){
//   console.log(value)
// }

// demo.then(onResolve)

// 手动实现Promise
function Bromise(executor){
  var onResolve_ = null;
  var onReject_  = null;
  // 模拟实现resolve和then,暂不支持reject
  this.then = function(onResolve,onReject){
    onResolve_ = onResolve
  };
  function resolve(value){
    setTimeout(()=>{
      onResolve_(value)
    },0)
  }
  executor(resolve,null);
}

let demo = new Bromise(executor)

function onResolve(value){
  console.log(value)
}

demo.then(onResolve)