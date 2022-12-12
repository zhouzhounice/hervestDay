// console.log('hello world')

// console.log(Date);
// console.log(Math);

// console.log(setInterval)
// console.log(setTimeout)

// 1.获取玩家输入的内容
var playerAction = process.argv[process.argv.length - 1]
console.log(playerAction)

// 2.生成随机数让电脑可以生成随机的石头剪刀布
var random = Math.random() * 3;

// 3.根据生成不同的随机数决定输出石头 剪刀 还是 布
if(random < 1) {
  var componentAction = 'rock';
} else if (random > 2) {
  var componentAction = 'scissor';
} else {
  var componentAction = 'paper';
}
// 4.如果输入的跟随机生成的相同 则为平局
if( componentAction == playerAction ){
  console.log('平局')
}else if(
  (componentAction === "rock" && playerAction === "paper") ||
  (componentAction === "paper" && playerAction === "scissor") ||
  (componentAction === "scissor" && playerAction === "rock")
){
  // 5.判断玩家赢的情况和输的情况
  console.log('你赢了')
}else {
  console.log('你输了')
}


