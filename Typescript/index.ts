// console.log('Hello TS')
import {expectType} from 'tsd'

interface Foo {
  name:string;
  age:number;
}

interface Bar {
  name:string;
  job:string;
}

declare let foo:Foo;
declare let bar:Bar;

// foo=bar 
//类型中缺少属性

expectType<string>('anne')
// expectType<string>(123)
// 类型number的参数不能赋给string
