var a = 2;
function add(b,c){
  console.trace()
  return b+c
}

function addAll(b,c){
  var d = 10;
  result = add(b,c)
  return a + result + d
}

addAll(3,6)

// function runStack(n){
//   while(n){
//     n-=2
//   }
//   return 100
// }

// console.log(runStack(5000))

// 蹦床函数 避免递归
function runStack (n) {
  if (n === 0) return 100;
  return runStack.bind(null, n- 2); // 返回自身的一个版本
}
// 蹦床函数，避免递归
function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}
trampoline(runStack(1000000))