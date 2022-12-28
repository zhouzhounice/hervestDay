// 类型别名
type A = string;

// 抽离一组联合类型
type StatusCode = 200 | 301 | 400 | 500;
type PossibleDataType = string | number | (()=> unknown);

const status_01:StatusCode = 400;

// 抽离函数类型
type Handler = (e:Event) => void;

const func1_01:Handler = (e) =>{}
const func2_01:Handler = (e) =>{}
const func3_01:Handler = (e) =>{}

// 声明一个对象类型
type ObjType = {
  name: string;
  age: number;
}

// 配合泛型使用
type Factory<T> = T | number | string;
const foo1_09: Factory<boolean> = true;

// 一般不会直接用工具类型做类型标注，而是再度声明一个新的类型别名
type FactoryWithBoolean = Factory<boolean>
const foo2_09:FactoryWithBoolean = true

// 声明一个简单的工具类型
type MaybeNull<T> = T | null
function process_01(input:MaybeNull<{handler:()=>{}}>){
  input?.handler();
}

// 类似的MaybePromise MaybeArray 
type MaybeArray<T> = T | T[];
function ensureArray<T>(input:MaybeArray<T>):T[] {
  return Array.isArray(input)?input:[input]
}