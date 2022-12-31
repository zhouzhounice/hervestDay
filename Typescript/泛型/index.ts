
// 泛型初体验
type Factory_01<T> = T | number |string

// 用工具类型封装
// 将一个对象类型的所有属性类型为string
type Stringify1_01<T> = {
  [K in keyof T]:string
}
// 将一个对象类型完全复制
type Stringify2_01<T> = {
  [K in keyof T]: T[K]
}

// 内置类型的应用
type Stringify3_01<T> = {
  [K in keyof T]?: T[K]
}
interface IFoo1_01{
  prop1:number;
  prop2:string;
  prop3:boolean;
  prop4:() => {};
}
type Stringify4_01<T> = Stringify3_01<IFoo1_01>

/* 
  相当于：
  type Stringify4_01<T> = {
    prop1?: number | undefined;
    prop2?: string | undefined;
    prop3?: boolean | undefined;
    prop4?: (() => {}) | undefined;
}
*/

// 与条件工具结合
type IsEqual<T> = T extends true?1:2
type A_01 = IsEqual<true>
type B_01 = IsEqual<false>
type C_01 = IsEqual<'anne'>

// 给泛型设置默认值
type Factory1_02<T=boolean> = T | string | number;
const isBoolean: Factory1_02 = false

// 类型约束
type Factory2_02<ResCode extends number = 100> = ResCode extends 100 | 200| 300 ? 'success' : 'failure'

type Res1_02 = Factory2_02<100>
type Res2_02 = Factory2_02<101>
//类型“boolean”不满足约束“number”
// type Res3_02 = Factory2_02<true>

// 无需显示传入泛型参数也能调用，并且默认值为success
type Res4_02 = Factory2_02; //success

// 多泛型关联
type Condition<Type,Condition,TruthyResult,FalsyResult> = Type extends Condition? TruthyResult : FalsyResult;

type Result1 = Condition<'anne',string,"passed!","reject!">; // passed!
type Result2 = Condition<'anne',boolean,"passed!","reject!">;// reject!

type ProcessInput<
Input,
SecondInput extends Input = Input,
ThirdInput extends Input = SecondInput
> = number

// 响应类型的泛型处理
interface IRes<TData = unknown> {
  code:number;
  error?:string;
  data:TData;
}

interface IUserProfileRes {
  name:string;
  homepage:string;
  avatar:string
}

// function fetchUserProfile():Promise<IRes<IUserProfileRes>>{}

type StatusSucceed = boolean;
// function handleOperation():Promise<IRes<StatusSucceed>>{}

// 函数的泛型
function handle_01<T>(input:T):T{
  return input
}
const parameter1 = 'anne';
let parameter2 = 24;

handle_01(parameter1)
handle_01(parameter2)

function swap<T,U>([start,end]:[T,U]):[U,T]{
  return [end,start]
}
// 函数泛型的约束与默认值
function handle_02<T extends string | number>(Input:T):T{
  return Input
}

function Swap<T extends number,U extends number>([start,end]:[T,U]){
  return [start,end]
}
/* 
const obj = {a:1,b:2,c:3}
pick(obj,["a","c"]) // {a:1.c:3}
*/
// pick的类型声明
// pick<T extends object, U extends keyof T>(object: T, ...props: Array<U>): Pick<T, U>;
// 被函数内部逻辑消费
function handle_03<T>(payload:T):Promise<[T]>{
  return new Promise<[T]>((res,rej)=>{
    res([payload])
  })
}

// 箭头函数的泛型
// const handle_04 = <T>(input:T):T => {
//   return input
// }
 const handle_04 = <T extends any>(input:T):T =>{
  return input
 }

 // class中的泛型
 class Queue<TElementType> {
  private _list: TElementType[];

  constructor(initial:TElementType[]){
    this._list = initial
  }
  // 入队一个队列泛型子类型的元素
  enqueue<TType extends TElementType>(ele:TType):TElementType[]{
    this._list.push(ele);
    return this._list
  }

  // 入队一个任意类型元素(无需为队列泛型子类型)
  
 }