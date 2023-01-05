// infer体取函数返回类型
type Func_1 = (...args: any[]) => any;
type FunctionReturnType<T extends Func_1> = 
T extends (...args:any[]) => infer R ? R : never;
/* 
  当传入的类型参数满足T extends (...args:any[]) => infer R
  这样一个结构，返回infer R位置的值 即R
*/

// 对于数组
type Swap<T extends any[]> = T extends [infer A, infer B] ? [B,A] : T;
type SWapResult1 = Swap<[1,2]> // [2,1]
type SWapResult2 = Swap<[1,2,3]> // [1,2,3]

// 用rest操作符来处理任意长度的情况
type ExtractStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...any[],
  infer End,
] ? [Start,End] : T

// 调换首位
type ExtractStartAndEnd_1<T extends any[]> = T extends [
  infer Start,
  ...infer Left,
  infer End,
] ? [End,...Left,Start] : T

// 调换开头两个
type ExtractStartAndEnd_2<T extends any[]> = T extends [
  infer Start1,
  infer Start2,
  ...infer Left,
] ? [Start1,...Left,Start2] : T

// 实现结构层面的转化 比如从数组到联合类型
type ArrayItemType<T> = T extends Array<infer ElementType> ? ElementType : never;

type ArrayItemTypeResult1 = ArrayItemType<[]>
type ArrayItemTypeResult2 = ArrayItemType<string[]>
type ArrayItemTypeResult3 = ArrayItemType<[string,number]>

// 除了数组infer也可以是接口
type PropType_02<T, K extends keyof T> = T extends {
  [Key in K]: infer R
}? R : never

type PropTypeResult1 = PropType_02<{name:string},'name'>
type PropTypeResult2 = PropType_02<{name:string;age:number},'name'|'age'>

// 反转键名与键值
type ReverseKeyValue<T extends Record<string,unknown>>=
T extends Record<infer K,infer V>?Record<V &string,K>:never;

type ReverseKeyValueRestule1 = ReverseKeyValue<{"key":'value'}> // {"value","key"}

// 还可以是promise结构
type PromiseValue<T> = T extends Promise<infer V> ? V:T;

type PromiseValueResult1 = PromiseValue<Promise<number>>
type PromiseValueResult2 = PromiseValue<number> // number 但并未发生提取
type PromiseValueResult3 = PromiseValue<Promise<Promise<boolean>>> // Promise<boolean>

// 嵌套提取
type PromiseValue_1<T> = 
T extends Promise<infer V> ? V extends Promise<infer N> ? N : V : T;
type PromiseValueResult4 = PromiseValue_1<Promise<Promise<boolean>>> // Promise<boolean>

// 分布式条件类型
type Condition_1<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
type Res1_1 = Condition_1<1 | 2 | 3 | 4 | 5>; // 2|1|3
type Res2_1 = 1|2|3|4|5 extends 1|2|3 ? 1|2|3|4|5 : never;

type Naked<T> = T extends boolean ? 'Y' : 'N';
type Wrapped<T> = [T] extends [boolean]? 'Y':'N';

type Res3_1 = Naked<number | boolean>; // "N" | "Y"
type Res4_1 = Wrapped<number | boolean>; // "N"

// 使用数组包裹泛型参数另一种方式
type NoDistribute<T> = T & {};
type Wrapped_1<T> = NoDistribute<T> extends boolean?'Y' :'N';
type Res5_1 = Wrapped<number|boolean> // "N"
type Res6_1 = Wrapped<true | false> // "Y"
type Res7_1 = Wrapped<true | false | 599> // "N"

//希望禁用分布式条件类型
type CompareUnion<T,U> = [T] extends [U]?true:false;
type CompareRes1 = CompareUnion<1|2,1|2|3> // true
type CompareRes2 = CompareUnion<1|2,1> // false

//像判断一个类型是否为never
type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes1 = IsNever<never>; // true
type IsNeverRes2 = IsNever<'anne'>; // false

// 交集
type Intersection<A,B> = A extends B ? A : never;
type IntersectionRes = Intersection<1|2|3,2|3|4> // 2|3