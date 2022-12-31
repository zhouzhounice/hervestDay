// 声明一个交叉类型
interface NameStruct {
  name:string;
}
interface AgeStruct {
  age:number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile:ProfileStruct = {
  name:'anne',
  age:12
}

// 原始类型
type StringNumber = string & number //never

// 对象类型的交叉声明
type Struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  }
}

type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  }
}

type Composed = Struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp']; // never
type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

// 联合类型与交叉类型结合
type UnionIntersection1 = (1|2|3)&(string|2); // 2
type UnionIntersection2 = (string|number|symbol)&(string | symbol) // string | symbol

// 接口的交叉类型
interface Struct1_08 {
  primitiveProp:string;
  objectProp:{
    name:string;
  }
  unionProp:string | number
}

interface Struct2_08 extends Struct1_08 {
  // “primitiveProp”的类型不兼容。不能将类型“number”分配给类型“string”。
  // primitiveProp: number
  // objectProp中缺少属性
  // objectProp: {
  //   age: number
  // }
  unionProp:string
}

const obj1_08: Struct2_08 = {
  unionProp: '1',
  primitiveProp: 'a',
  objectProp:{
    name:'anne'
  },
}

// 声明等多个同名属性
interface Struct1_08 {
  // 后续属性声明必须属于同一类型。属性“primitiveProp”的类型必须为“string”，但此处却为类型“number”。
  // primitiveProp: number;
  primitiveProp: string;
}

// 接口与类型别名的合并
type Base1_08 = {
  name:string;
}
interface IDerived extends Base1_08 {
  // 报错！就像继承接口一样需要类型兼容
  // name:number;
  age: number
}

interface Base2_08 {
  name:string;
}
type Derived_08 = Base2_08 & {
  name:number;
}
type CheckType = keyof Derived_08

// const p_08: Derived_08 = {
//    name:never,
// }
// type NewType = typeof p_08.name // never