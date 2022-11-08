// 对象的联合
interface Tmp{
  user:
  |{
    vip: true;
    expires: string;
  }
  |{
    vip: false;
    promotion: string;
  }
}

declare let tmp:Tmp;
console.log(tmp)

if(tmp.user.vip) {
  console.log(tmp.user.expires)
}

// 对象的字面量
interface Tmp {
  obj:{
    name: "Anne",
    age: 18
  }
}

const tmp_1: Tmp = {
  obj: {
    name: "Anne",
    age: 18
  },
  user: {
    vip: true,
    expires: ""
  }
}

