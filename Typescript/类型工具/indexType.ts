// 意味着实现这个类型结构的变量中只能声明字符串类型的键
interface AllStringType1 {
  [key:string]: string
}

type AllStringType2 = {
  [key:string]:string
}

type PropType1_01 = AllStringType1['anne']
type PropType1_02 = AllStringType1['299']

const foo1_10:AllStringType1 = {
  "anne":'456',
  599:'456',
  [Symbol('add')]:'symbol'
}

interface AllStringType3 {
  // propA:number;
  [key:string]:boolean;
}
interface AllStringType4 {
  propA:number;
  propB:boolean;
  [key:string]:boolean | number;
}

interface AnyTypeHere {
  [key:string]:any
}
const foo2_10:AnyTypeHere['lin'] = 'any value'

// 索引类型查询
type Foo_10 = {
  "anne": 1,
  599: 2
}

type FooKeys = keyof Foo_10
type TestKeys = keyof any;

const str_10:FooKeys = 'anne'

// 索引类型访问

interface NumberRecord {
  [key:string]:number;
}
type PropType = NumberRecord[string]

interface objType1 {
  propA:number;
  propB:boolean;
}
type PropAType = objType1['propA'];
type PropBType = objType1['propB'];

// 利用keyof操作符
interface objType2 {
  propA: number;
  propB: boolean;
  propC: string;
}
type PropTypeUnion = objType2[keyof objType2]; // string | number | boolean

// 注意：
interface objType3 {
  propA:string;
  [key:string]:string
}

type PropATypes1 = objType3[string]