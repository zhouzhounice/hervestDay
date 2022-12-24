const name_01:string = 'anne';
const age_01:number = 18;
const male_01:boolean = false;
const undef_01:undefined = undefined;
const null_01:null = null;
const obj_01: object = {
  name_01,
  age_01,
  male_01
};
const bigintVar1_01: bigint = 9007199254740991n;
const bigintVar2_01: bigint = BigInt(12);

const symbolVar_01:symbol = Symbol('unique');

// 开启strictNullChecks才可以
// const str_01:string = null

// void
function a_01():void {} //返回值类型为void
function b_01():void {
  return
} // 返回值类型为void
function c_01():undefined {
  return undefined
} // 返回值类型为undefined

const arr1_01:string[] = ['a','b'];
const arr2_01:Array<string> = ['a','b'];
const arr3_01:string[] = ['a','b','c'];
console.log(arr3_01[599]) // undefined

const arr4_01:[string,number,boolean] = ['a',1,true]
// console.log(arr4_01[5])

const arr5_01: [string, number?, boolean?] = ['a', 1, true]
type TupleLength = typeof arr5_01.length // 3 | 2 | 1

// 具名元组
const arr6_01:[name2_01:string,age:number,male:boolean] = ['anne',18,true]
// const [name2_01, age, male, other] = arr6_01