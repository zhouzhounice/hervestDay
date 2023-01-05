type LiteraType<T> = T extends string ? "string" : "other";
type Res1 = LiteraType<'anne'> // string
type Res2 = LiteraType<599> // other

// 条件类型中的多嵌套
type LiteraType_1<T> = T extends string?"string" 
: T extends number ? number
: T extends boolean? boolean
: T extends null ? null
: T extends undefined ? undefined
: never

type Res3 = LiteraType_1<'Anne'>
type Res4 = LiteraType_1<599>
type Res5 = LiteraType_1<false>
type Res6 = LiteraType_1<null>
type Res7 = LiteraType_1<undefined>
type Res8 = LiteraType_1<{}>

// 函数中的条件类型与泛型搭配
function universalAdd<T extends number| bigint | string>(x:T,y:T){
  return x+(y as any)
}
universalAdd(599,1) //T填充为599 | 1
universalAdd("599","1")  // T填充为“599” “1”


// 使用嵌套类型的条件类型进行字面量类型到基础类型地体取
type LiteralToPrimitive<T> = T extends number
? number
:T extends bigint
? bigint
:T extends string
? string :
never;

function universalAdd_1<T extends number|bigint|string>(x:T,y:T):LiteralToPrimitive<T>{
 return x + (y as any)
}
universalAdd_1("anne","ch");
universalAdd_1(599,1)
universalAdd_1(10n,10n)

// 更复杂的类型比较
type Func = (...args:any[]) => any

type FunctionConditionType<T extends Func> = T extends(...args:any[]) => string ? 'A string return func!' : 'A non-string return func';

type StringResult = FunctionConditionType<() => string>
type NonStringResult1 = FunctionConditionType<() => boolean>
type NonStringResult2 = FunctionConditionType<() => number>
