import { IsTrue } from '../../Typescript_test/test-utils';
let unknownVar:unknown;
// (unknownVar as { foo: ()=>{}}).foo() //编译器不报错 但是运行时报错

// 联合类型中断言具体分支
function foo1_08(union:string | number){
  if((union as string).includes('anne')){}
  if((union as number).toFixed() === '599'){}
}
// 正确使用
interface IFoo {
  name:string;
}

declare const obj:{
  foo2_08:IFoo
}

const { foo2_08 = {} as IFoo } = obj

// 双重断言
const str1_08: string = 'anne';
(
  str1_08 as unknown as { handle: () => {} }
).handle();

// 使用尖括号
(<{ handler:()=>{}}>(<unknown>str1_08)).handler();


// 非空断言
declare const foo3_08: {
  func?: () => {
    prop?: number | null
  }
}

foo3_08.func!().prop!.toFixed();
foo3_08.func?.().prop?.toFixed();

// 其他场景
const element = document.querySelector('#id')!;
const target = [1,2,3,599].find(item => item === 599)!;

interface IStruct {
  foo: string
  bar: {
    barPropA: string
    barPropB: number
    barMethod: () => void
    baz: {
      handler: () => Promise<void>
    }
  }
}

// const obj1_08: IStruct = {}  // 缺少属性

const obj1_08 = <IStruct>{
  bar:{
    baz:{}
  }
}

