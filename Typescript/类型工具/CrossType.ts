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