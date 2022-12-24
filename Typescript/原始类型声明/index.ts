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