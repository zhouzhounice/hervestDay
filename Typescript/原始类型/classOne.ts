const name1:string = 'zlj';
const age1:number = 24;
const male1:boolean = false;
const undefin:undefined = undefined;
const nul:null = null;
const obj_119:object = {name1,age1,male1};
const bigintVar1:bigint = 9007199254740991n;
const bigintVar2:bigint = BigInt(123);
const symbolVar:symbol = Symbol('unique');

const voidVar1:void = undefined;
// const voidVar2:void = null;  需要关闭 strictNullChecks

// 声明数组的两种方式：
const arr1: string[] = ['a','b'];
const arr2: Array<string> = ['a','b']

const arr3: string[] = ['lin','bu','du'];
const arr4:[string,number?,boolean?] = ['linbudu']
const arr5:[string,number?,boolean?] = ['linbudu',,]
type TupleLength = typeof arr5.length; // 1|2|3

const arr6:[name:string,age:number,male:boolean] = ['xiaoming',12,true]

//对象
interface IDescription {
  name:string;
  age:number;
  male:boolean;
}

const obj_1:IDescription = {
  name:'Anne',
  age:12,
  male:true
}

// 规定可选与只读属性
interface IDescription_1 {
 readonly name:string;
  age:number;
  male?:boolean;
  func?:(...args:any[]) => any;
}

const obj_2:IDescription_1 = {
  name:'Anne',
  age:12,
  male:true
}

obj_2.func = () =>{}
// obj_2.name = '12'

const obj_3:Record<string,unknown> = {name:'Anne'}
const obj_4:Record<string,any> = {name:'Anne'}

const arr7:unknown[] = [1 ,2,false]

// 关于unique symbol  
const uniqueSymbolFoo: unique symbol = Symbol('Anne');
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo //报错

// 引用已创建的unique symbol类型
declare const uniqueSymbolBar:unique symbol;
const _uniqueSymbolBar:typeof uniqueSymbolBar = uniqueSymbolBar


