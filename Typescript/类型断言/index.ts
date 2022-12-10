let unknownVar: unknown;
(unknownVar as {foo:()=>{}}).foo()

// 断言具体分支
function fn1(union:string|number){
  if((union as string).includes("Anne")){}
  if((union as number).toFixed() === '599'){}
}
// 分析不正确或不符合预期时
interface IFoo{
  name: string;
}

declare const obj:{
  foo: IFoo
}

const {foo = {} as IFoo} = obj

// 双重断言
const str_01: string = 'Anne';
// 普通类型断言
(str_01 as unknown as {handler:() =>{}}).handler();
// 尖括号断言

// 非空断言
declare const fn3:{
  func?:() =>({
    prop?:number | null;
  })
};
fn3.func!().prop!.toFixed();
fn3.func?.().prop?.toFixed();

// 常见的非空断言
const element = document.querySelector("#id")!;
const target = [1,2,3,599].find(item => item === 599)

// 作为代码提示的工具
interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod:() => void;
    baz:{
      handler:() => Promise<void>
    }
  }
}

// const obj_01:IStruct = {}

const obj_01 = <IStruct>{
  bar:{
    baz:{
      handler:() =>{}
    }
  }
}