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