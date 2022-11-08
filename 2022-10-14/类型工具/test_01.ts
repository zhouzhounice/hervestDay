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
  [key: string]:string;
}

type PropType1 = AllStringTypes['123']
type PropType2 = AllStringTypes['Anne']