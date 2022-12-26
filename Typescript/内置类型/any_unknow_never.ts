let foo1_01; //any
// function fun_01(foo){}

let anyVar:any = 'anne';

anyVar = 1;
anyVar = false;

const val1:string = anyVar;
const val2:number = anyVar;
const val3:boolean = anyVar;
const val4:undefined = anyVar;

let unknowVar: unknown = 'anne';

unknowVar = false
unknowVar = {
  site:'jue'
}

// const val5:string = unknowVar // Error
// const val6:boolean = unknowVar // Error
const val7:any = unknowVar 
const val8:unknown = unknowVar 

// 要访问unknown变量时，要进行类型断言
let unknowVar_1:unknown;
// (unknowVar_1 as { foo: ()=>{} }).foo()

// void 与 never的兼容性
declare let v1:never;
declare let v2:void;

// v1 = v2; // 不能将void的类型赋值给never
// v2 = v1

// never
function justThrow(): never {
  throw new Error()
}

function foo_02(input:number){
  if(input>1){
    justThrow();
    const name = 'anne'
    console.log(name)
  }
}

// foo_02(2)