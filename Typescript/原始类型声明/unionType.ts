// 联合类型与字面量结合
interface Res {
  code:200|300|401|500;
  status:'success' | 'failure';
  data:any;
}

declare var res:Res;
// 输入时会有精确的类型推导
if(res.status === 'success'){
  console.log('success')
}

const str1_04:'anne' = 'anne';
const str2_04:string = 'lala';

interface Tmp1_04 {
  mixed:true|string|200|{}|(()=>{})|(1|2)
}

// 对象属性的互斥
interface Tmp2_04 {
  user:
  | {
    vip:true;
    expires:string;
  }
  | {
    vip:false;
    promotion:string;
  }
}
declare var tmp2:Tmp2_04;
if(tmp2.user.vip){
  console.log(tmp2.user.expires)
}