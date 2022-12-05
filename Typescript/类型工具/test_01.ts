// 类型别名
type A = string;

//  抽离一组联合类型
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes =  string | number | (()=>unknown)

const status_01: StatusCode = 502;

// 抽离一个函数类型
type handler = (e:Event) => void;

const clickHandler:handler = (e) => {}

// 抽离一个对象类型
type ObjType = {
  name: string;
  age: number;
}

// 
type Factory<NewType> = NewType | number | string;
type MaybeNull<T> = T | null;

function process(input: MaybeNull<{handler:()=>{}}>){
  input?.handler();
}

// 声明交叉类型
interface NameStruct {
  name: string
}

interface AgeStruct {
  age: number
}

type ProfileStruct = NameStruct & AgeStruct;

const profile:ProfileStruct = {
  name: 'Anne',
  age:18
}
// 同名属性类型按照交叉类型进行合并
type Struct1 = {
  primitiveProp: string;
  objectProp:{
    name: string;
  }
}

type Struct2 = {
  primitiveProp:number;
  objectProp:{
    age:number;
  }
}

type Composed = Struct1 & Struct2;

type primitiveProp = Composed['primitiveProp'];
type objectPropType = Composed['objectProp'];

// 两个联合类型组成的交叉类型
type UnionIntersection1 = (1|2|3) & (1|2);
type UnionIntersection2 = (string|number|symbol) & string;

// 索引签名类型 - 在接口或者类型别名中，通过语法快速声明一个键值类型一致的类型结构
interface AllStringTypes {
  // propA:number;
  [key: string]:string;
}

type PropType1 = AllStringTypes['123']
type PropType2 = AllStringTypes['Anne']

// 字符串索引签名类型中声明数字类型的健或symbol类型的健
const obj_14: AllStringTypes = {
  "anne" : "455",
  599:'anne',
  [Symbol('ddd')]:'symbol'
}

// 索引签名类型也可以和具体的键值对类型声明并存，但是键值类型要符合签名类型的声明
interface StringOrBooleanTypes {
  propA: number;
  propB: boolean;
  [key: string]: number | boolean;
}

// 索引类型查询、
interface Foo_01 {
  anne:1;
  599:2;
}
type FooKeys = keyof Foo_01

// 索引类型访问
interface NumberRecode {
  [key: string]: number;
}
type PropType3 = NumberRecode[string]

// 映射类型
type Stringify<T> = {
  [K in keyof T]: string;
}

interface Foo_02 {
  prop1:string;
  prop2:number;
  prop3:boolean;
  prop4:() => void;
}

type StringifiedFoo = Stringify<Foo_02>

// 等价于
// interface StringifiedFoo {
//   prop1: string;
//   prop2: string;
//   prop3: string;
//   prop4: string;
// }

// 熟悉又陌生的typeof
const str = 'anne';
const obj = {name:'anne'};

const nullValue = null;
const undefinedValue = undefined;

type Str = typeof str;
type Obj = typeof obj;
type Null = typeof nullValue;
type Undefined = typeof undefinedValue;

// 在工具类型中使用typeof
const func = (input: string) =>{
  return input.length>10
}

const func2: typeof func = (name: string) => {
  return name ==='anne'
}

// 类型守卫
function foo_15(input: string | number) {
  if(typeof input === 'string'){}
  if(typeof input === 'number'){}
}

declare const strOrNumberOrBool: string | number |boolean;
if(typeof strOrNumberOrBool === "string"){
  strOrNumberOrBool.charAt(1);
}else if(typeof strOrNumberOrBool === 'number'){
  strOrNumberOrBool.toFixed();
} else if(typeof strOrNumberOrBool === 'boolean'){
  strOrNumberOrBool === true;
} else {
  const _exhaustiveCheck: never = strOrNumberOrBool;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`)
}

// 提取出来
function isString(input:unknown):input is string {
  return typeof input === "string"
}

function foo_16(input:string|number){
  if (isString(input)) {
    // 类型“string | number”上不存在属性“replace”。
    (input).replace("linbudu", "linbudu599")
  }
  if (typeof input === 'number') { }
  // ...
}
// 常用守卫 类型保护
export type Falsy = false | "" | 0 | null | undefined;
export const isFalsy = (val: unknown): val is Falsy => !val;

export type Primitive = string | number | boolean | undefined;
export const isPrimitive = (val: unknown): val is Primitive => ['string','number','boolean','undefined'].includes(typeof val)

// in 与 instanceof 的类型保护
interface Foo_03 {
  foo: string;
  fooOnly: boolean;
  shared:number;
}

interface Bar_03 {
  bar: string;
  barOnly: boolean;
  shared: number;
}

function handle(input:Foo_03 | Bar_03){
  if('foo' in input){
    input.fooOnly;
  }else {
    input.barOnly;
  }
}