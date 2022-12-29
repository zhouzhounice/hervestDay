import { IsFalse } from '../../Typescript_test/test-utils';
function Foo1_12(input:string | number) {
  if(typeof input === 'string') {}
  if(typeof input === 'number') {}
}
// 分支处理类型
declare const StrOrNumOrBool_01:string | number | boolean;

if(typeof StrOrNumOrBool_01 === "string"){
  // 一定是字符串
  StrOrNumOrBool_01.charAt(1)
}else if(typeof StrOrNumOrBool_01 === "number"){
  // 一定是数字
  StrOrNumOrBool_01.toFixed();
}else if(typeof StrOrNumOrBool_01 === 'boolean'){
  // 一定是布尔值
  StrOrNumOrBool_01 === true
}else {
  const _exhaustiveCheck:never = StrOrNumOrBool_01;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`)
}
// 提取if条件中的表达式
function isString(input:unknown):boolean{
  return typeof input === "string"
}
// 类型控制流分析做不到跨函数上下文来进行类型的信息收集
function foo1_12(input:string|number){
  if(isString(input)){
    // (input).replace('anne','anne123'); // 类型上不存在属性
  }
}

// 为了实现提取函数外部的封装逻辑 引入is关键字
function isString1(input:unknown): input is string{
  return typeof input === "string"
}
function foo2_12(input:string | number){
  if(isString1(input)){
    (input).replace('anne','anne124')
  }
}

// 我们还可以在类型守卫中使用对象类型、联合类型等
type Falsy = false | '' | 0 | null | undefined;
const IsFalse = (val:unknown):val is Falsy => !val;

type Primitive = string | number | boolean | undefined;
const isPrimitive = (val:unknown):val is Primitive => ['string','unknown','boolean','undefined'].includes(typeof val);

