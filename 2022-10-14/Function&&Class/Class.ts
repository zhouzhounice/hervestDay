// Class类
class Foo {
  prop: string;
  constructor(inputProp:string){
    this.prop = inputProp
  }
  print(addon:string):void {
    console.log(`${this.prop} and ${addon}`)
  }
  get propA():string {
    return `${this.prop}+A`
  }
  set propA(value:string) {
    this.prop = `${value}+A`
  }
}

// 在构造函数中对参数应用访问性修饰符
class Foo_1 {
  constructor(public arg1:string,private arg2:boolean){}
}
new Foo_1('Anne',true)

// 静态成员 用static关键字标识一个静态成员
class Foo_2 {
  // 静态成员被挂载到函数体上
  static staticHandler(){}
  // 实例成员挂载在原型上
  public instanceHandler(){}
}
