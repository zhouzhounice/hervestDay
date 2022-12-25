// 函数的类型签名

// 1.函数式声明
function foo1_06(name:string):number{
  return name.length
}
// 2.函数表达式
const foo2_06 = function(name:string):number{
  return name.length
}
// 3.变量类型标注
const foo3_06:(name:string) => number = function(name){
  return name.length
}

// 用类型别名将函数声明抽离出来
type FunFoo1_06 = (name:string) => number
const foo4_06 : FunFoo1_06 = (name) =>{
  return name.length
}

//用interface
interface FuncFooStruct {
  (name:string): number
}

// 没有调用return 语句
function foo5_06():void {}
//调用return但没有返回值
function foo6_06():undefined {
  return;
}

// 可选参数

// 在函数逻辑中注入可选参数默认值
function foo7_06(name:string,age?:number):number {
  const inputAge = age || 18;
  return name.length + inputAge
}

// 直接为可选参数声明默认值
function foo8_06(name:string,age:number = 18):number {
  return name.length + age
}

// 参数有默认值时可省略?
function foo9_06(name:string,age:number = 18):number{
  return age + name.length
}

// rest参数的标注
function f0010_06(arg1:string,...rest:any[]){}
// 使用元组类型进行标记
function foo11_06(arg1:string,...rest:[number,boolean]){

}

// 重载
function foo12_06(foo:number,bar?:boolean):string | number {
  if(bar){
    return String(foo)
  } else {
    return foo*0
  }
}
// 改写上例

// 重载签名一 传入bar的值为true时，函数返回类型为string
function func1_06(foo:number,bar:true):string;
// 重载签名二 不传入bar时或者传入的值为false时 函数返回值为number
function func1_06(foo:number,bar?:false):string;
// 函数的实现签名，会包含重载签名的所以情况
function func1_06(foo:number,bar?:boolean):string | number{
  if(bar){
    return String(foo);
  } else {
    return foo * 0
  }
};
// 实现了将入参和返回值类型的可能情况进行关联，获得了更精确的标注能力


// 异步函数 Generator函数的类型签名
async function asyncFunc1_06():Promise<void> {
 
}

function* genFunc1_06():Iterable<void>{}

// async function asyncFunc2_06(): AsyncIterable<void>{}