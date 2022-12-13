(function(){
  /* 多家公司面试 */
  Promise.all([
    interview('geekbang'),
    interview('Tencent')
  ]).then((res)=>{
    console.log("smile")
  }).catch((err)=>{
    console.log('cry for'+ err.name)
  })
  /* 多轮面试 */
  // var promise = interview(1)
  //   .then((res)=>{
  //     return interview(2)
  //   })
  //   .then((res)=>{
  //     return interview(3)
  //   })
  //   .then((res)=>{
  //     console.log('smile')
  //   })
  //   .catch((err)=>{
  //     console.log(`cry at ${err.round} round`)
  //   })

    /* 普通面试 */
  // promise.then((res)=>{
  //   console.log('smile')
  // }).catch((err)=>{
  //   console.log('cry')
  // })

})()

function interview(name) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve('success')
      } else {
        var error = new Error('fail');
        error.name = name
        reject(error)
      }
    }, 500)
  })
}

