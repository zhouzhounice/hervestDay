// 函数式声明
function foo_99(name: string):number {
  return name.length
}
// 函数表达式声明
const foo_1 = function(name:string):number{
  return name.length
}
// 类型标注
const foo_2: (name:string) => number = (name) => name.length

// 类型别名
type FunctionFoo = (name: string) => number

const foo_3: FunctionFoo = (name) => name.length

// interface
interface FunctionFooStruct {
  (name:string):number
}

// void类型-没有调用return语句
function foo_4(): void{}
// void类型-调用return语句但是没有返回值
function foo_5():void{
  return;
}
// 第二种空值方式可以用更好的方式描述
function foo_6():undefined{
  return;
}

// 可选参数
function foo_7(name:string,age?:number):number{
  const inputAge = age || 18;
  return name.length + inputAge;
}

// 直接为可选参数声明默认值
function foo_8(name:string,age:number = 18):number{
  const inputAge = age;
  return name.length + inputAge;
}

// rest参数
function foo_9(arg1:string, ...rest:any[]){

}
// rest 元组标记
function foo_10(arg1:string,...rest:[number, boolean]){}
foo_10('Anne',18,true)

// 函数重载签名
function foo_11(foo: number,bar:true): string;
function foo_11(foo: number,bar?:false): number;

function foo_11(foo:number,bar?:boolean):string | number {
  if(bar) {
    return String(foo);
  }else{
    return foo*100
  }
}

const res1 = foo_11(599)
const res2 = foo_11(599,true)
const res3 = foo_11(599,false)
console.log(res1)
console.log(res2)
console.log(res3)

// 异步函数、Generator函数等类型签名
async function asyncFunc(): Promise<void>{

}
function* genFunc(): Iterable<void> {}

async function* asyncGenFunc(): AsyncIterable<void> {}