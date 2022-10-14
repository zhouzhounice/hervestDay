interface Res {
  code:200 | 401 | 500;
  status:'success' | 'failure';
  data:any;
}
// 快速生产符合指定类型
declare var res: Res;

if(res.status === 'failure') {
  console.log(res.code)
}

// let str1:'Anne' = 'anne'; 
// 不能将类型“"anne"”分配给类型“"Anne"”

interface Tmp {
  mixed:true | string |599 |{} |(()=>{}) |(1|2)
}
// 联合类型中的函数需要用()包裹
// 函数类型不存在字面量类型，因此(()=>{})为合法的函数类型
// 可在联合类型中再次嵌套联合类型，最终嵌套的联合类型都会展开
