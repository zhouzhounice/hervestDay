// 映射类型
type stringify1_01<T> = {
  [K in keyof T]:string
}
/* 
接收一个对象类型
使用keyof获得对象类型的键名组成字面量联合类型
通过映射类型(in关键字)将联合类型的每个成员映射出来，并将其键值类型设置为string
*/

// 具体使用
interface Foo1_11 {
  prop1:string;
  prop2:number;
  prop3:boolean;
  prop4:() => void;
}
type StringifiedFoo1 = stringify1_01<Foo1_11>
// 等价于
/* interface StringifiedFoo1 {
  prop1: string
  prop2: string
  prop3: string
  prop4: string
} */
// 拿到了一个接口的所有属性名的类型映射 可以通过键名拿到键值
type Clone<T> = {
  [k in keyof T]:T[k]
}

type StringifiedFoo2 = Clone<Foo1_11>