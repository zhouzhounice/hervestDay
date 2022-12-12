// 1.获取玩家输入的内容
var playerAction = process.argv[process.argv.length - 1]
// console.log(`你出了${playerAction}`)
const game = require('./lib')
// const result = game(playerAction)
// console.log(result)

let count = 0;
// 判断玩家玩的次数
process.stdin.on('data', e=>{
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  console.log(result)
  if (result == -1){
    count++;
  }
  if (count === 3){
    console.log('不想玩啦')
    process.exit();
  }
  console.log(count)
})


