// 简易版的数据相应式 Object.defineProperty
let getDouble = n => n*2
let obj = {}
let count = 1;
let double = getDouble(count)

Object.defineProperty(obj,'count',{
  get(){
    return count;
  },
  set(value){
    count = value;
    double = getDouble(value)
  }
})

console.log(double) // 2

obj.count = 2;
console.log(double) //4

// 语法缺陷： 
// 1.当删除obj的属性时，set就不会再执行 所以需要单独提供$delete函数去删除数据
// 2.对数组的一些改变也监听不到，所以需要重写数组的push等方法来达到相应式的目的

