(async function() {
  /* try {
    await interview(1)
    await interview(2)
    await interview(3)
  }catch(e){
    return console.log(`cry at ${e.round}`)
  } */
  try {
    await Promise.all([interview(1),interview(2),interview(3)])
  } catch(e){
    return console.log(`cry at ${e.round}`)
  }
  console.log('smile')
})()

function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve('success')
      } else {
        var error = new Error('fail')
        error.round = round
        reject(error)
      }
    }, 500)
  })
}

const arr = [{name:'1'}]
const res = arr.map((item)=>{
  console.log(item)
})
console.log("res===",res)