// class类型标注
class Foo1_07 {
  prop:string;

  constructor(inputProp:string){
    this.prop = inputProp
  }
  print(addon:string):void {
    console.log(`${this.prop} and ${addon}`)
  }
  get propA():string {
    return `${this.prop}`
  }
  set propA(value:string){
    this.prop = `${value} + A`
  }
}

// 类表达式
const Foo2_07 =class  {
  prop: string

  constructor(inputProp: string) {
    this.prop = inputProp
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }
  get propA(): string {
    return `${this.prop}`
  }
  set propA(value: string) {
    this.prop = `${value} + A`
  }
}

// 修饰符
class Foo3_07 {
  private prop:string;
  constructor(inputProp:string){
    this.prop = inputProp;
  }
  protected print(addon:string):void {
    console.log(`${this.prop} and ${addon}`)
  }
  public get propA():string {
    return `${this.prop}+A`
  }
  public set propA(value:string){
    this.propA = `${value} + A`
  }
}

//  在构造函数中对参数应用访问性修饰符
class Foo4_07 {
  constructor(public arg1:string,private arg2:boolean){}
}
// 此时参数会被直接作为类的成员(即实例的属性值)，免去后续的手动赋值
new Foo4_07('anne',true)