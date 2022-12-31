// 泛型初体验
type Factory_01<T> = T | number |string

// 用工具类型封装
// 将一个对象类型的所有属性类型为string
type Stringify1_01<T> = {
  [K in keyof T]:string
}
// 将一个对象类型完全复制
type Stringify2_01<T> = {
  [K in keyof T]: T[K]
}

// 内置类型的应用
type Stringify3_01<T> = {
  [K in keyof T]?: T[K]
}
interface IFoo1_01{
  prop1:number;
  prop2:string;
  prop3:boolean;
  prop4:() => {};
}
type Stringify4_01<T> = Stringify3_01<IFoo1_01>

/* 
  相当于：
  type Stringify4_01<T> = {
    prop1?: number | undefined;
    prop2?: string | undefined;
    prop3?: boolean | undefined;
    prop4?: (() => {}) | undefined;
}
*/

// 与条件工具结合
type IsEqual<T> = T extends true?1:2
type A_01 = IsEqual<true>
type B_01 = IsEqual<false>
type C_01 = IsEqual<'anne'>

// 给泛型设置默认值
type Factory1_02<T=boolean> = T | string | number;
const isBoolean: Factory1_02 = false

// 类型约束
type Factory2_02<ResCode extends number = 100> = ResCode extends 100 | 200| 300 ? 'success' : 'failure'

type Res1_02 = Factory2_02<100>
type Res2_02 = Factory2_02<101>
//类型“boolean”不满足约束“number”
// type Res3_02 = Factory2_02<true>

// 无需显示传入泛型参数也能调用，并且默认值为success
type Res4_02 = Factory2_02; //success