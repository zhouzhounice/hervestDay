import { IsFalse } from '../../Typescript_test/test-utils';
import { Input } from 'antd';
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

// in关键字的使用
interface Foo1_12 {
  foo:string;
  fooOnly:boolean;
  shared:number;
}
interface Foo2_12 {
  bar:string;
  barOnly:boolean;
  shared:number;
}

function handle(input:Foo1_12 | Foo2_12){
  if('foo' in input){
    input.fooOnly
  }else {
    input.barOnly
  }
}

// 共同属性的字面量类型差异
function ensureArray(input:number|number[]):number[]{
  if(Array.isArray(input)){
    return input
  }else{
    return [input]
  }
}

interface Foo3_12 {
  kind:'foo';
  diffType:string;
  fooOnly:boolean;
  shared:number;
}

interface Bar3_12 {
  kind:'bar';
  diffType:number;
  barOnly:boolean;
  shared:number;
}

function handle1(input:Foo3_12 | Bar3_12){
  if(input.kind === 'foo'){
    input.fooOnly;
  }else{
    input.barOnly;
  }
}

// 对于同名，但不同类型的属性 需要用字面量类型区分，并不能用简单的typeof
function handle2(input:Foo3_12 | Bar3_12){
  if(typeof input.diffType === 'string'){
    // input.fooOnly; // 类型上不存在属性
  }
}

// instanceof也可以用来进行类型保护
class FooBase {}
class BarBase {}
class Foo extends FooBase {
  fooOnly(){}
}
class Bar extends BarBase {
  barOnly(){}
}

function handle4(Input: Foo | Bar){
  if(Input instanceof FooBase){
    Input.fooOnly()
  } else {
    Input.barOnly();
  }
}