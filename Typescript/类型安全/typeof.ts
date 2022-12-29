// 类型检查工具typeof
const str = "anne";

const obj = {
  name: 'anne',
}

const nullVar = null;

const undefinedVar = undefined;

// const func = (input:string) =>{
//   return input.length > 2
// }

type Str = typeof str; // anne
type Obj = typeof obj; // { name: "anne"}
type Null = typeof nullVar; // null
type Undefined = typeof undefinedVar; // undefined 
// type Func = typeof func;// (input:string) => boolean

// 在类型工具中使用
const func = (input:string) =>{
  return input.length > 2
}

const func1:typeof func = (name:string) => {
  return name === 'anne'
}

// 类型查询操作符后面不允许使用表达式
const isInputValid = (input:string) => {
  return input.length > 2;
}
// let isValid: typeof isInputValid('anne');