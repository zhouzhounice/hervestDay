interface IDescription {
  name1_02:string;
  age1_02:number;
  male1_02:boolean;
}

const obj1_02:IDescription = {
  name1_02:'anne',
  age1_02:18,
  male1_02:false
}

//obj1_02.other = 'a'; // 类型上不存在other属性

// 对象属性的修饰符
interface IDescription1 {
 readonly name1_02: string;
  age1_02?: number;
  male1_02: boolean;
  fun?:Function;
}

const obj2_02:IDescription1 = {
  name1_02:'anne',
  male1_02:true
}

// obj2_02.name1_02 = 'a'  // 无法为name1_02赋值，因为是只读属性
type objectType = typeof obj2_02.age1_02 // number | undefined

obj2_02.age1_02 =  13;
// obj2_02.fun() //不能调用可能是未定义的方法
obj2_02.fun = () =>{} 

// type 与 interface
interface User {
  name3_02:string;
  age3_02:number;
}

interface SetUser {
  (name4_02:string,age4_02:number): void;
}

type User1 = {
  name3_02: string
  age3_02: number
}

type SetUser1 = (name4_02:string,age4_02:number) => void

// 拓展属性
interface Test1 {
  name5_02:string;
}

interface Test2 extends Test1 {
  age5_02:number
}

type Test3 = {
  name5_02:string;
}
type Test4 = Test3 & {age5_02:number}

interface Test5 extends Test3 {
  age5_02:number;
}

type Test6 = Test2 & {age5_02:number}

// type可以做的事

// 1.声明基本类型别名，联合类型以及元组
type name6_02 = string;
interface Dog {
  wang:()=>void;
}
interface Cat {
  miao:()=>void;
}
type Pet = Dog | Cat;
type PetList = [Dog,Cat]

// type语句可以使用typeof获取实例的 类型进行赋值
let div = document.createElement('div');
type dom_02 = typeof div;

// 其他骚操作
type StringOrNumber_02 = string | number;
type Text9 = string | {text:string};
// type NameLookup = Dictionary<string, Person>
type Callback<T> = (data:T) => void;
type Pair<T> = [T,T]
type Coordinates = Pair<number>;
type Tree<T> = T | {left:Tree<T>,right:Tree<T>}

// interface可以做 合并声明
interface Test7 {
  name_02:string;
  age_02:number;
}

interface Test7 {
  male_02:boolean;
}

const obj4_02:Test7 = {
  name_02:'a',
  age_02:14,
  male_02:true
}

// 装箱类型 与 Object
const tmp1_02:Object = 'anne';
const tmp2_02:Object = 30;
const tmp3_02:Object = {name_02:'anne'};
const tmp4_02:Object = ()=>{};
const tmp5_02:Object = []
// const tmp6_02:String = 599