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

//静态成员
class Foo5_07 {
  static staticHandle(){
    console.log('访问静态成员')
  }
  public instanceHandle(){
    console.log(1)
  }
}

// 在类的内部静态成员无法通过this来访问，需要通过
Foo5_07.staticHandle()

// 编译之后的类的代码
/* 
var Foo5_07 = (
  function (){
    function Foo5_07(){};
    Foo5_07.staticHandler = function(){};
    Foo5_07.prototype.instanceHandle = function (){};
    return Foo5_07
  }
)()

*/

// 派生类覆盖基类方法时
class Foo6_07 extends Foo5_07 {
  instanceHandle(){
    console.log(2);
    super.instanceHandle()
  }
}

Foo6_07.prototype.instanceHandle()

// override
class Base {
  printWithLove(){}
}

class Derived extends Base {
  // override print(){}
  override printWithLove() {}
}

// 抽象类型使用abstract关键字声明
abstract class Foo7_07 {
  abstract absProp:string;
  abstract get absGetter():string;
  abstract absMethod(name:string):string;
}

class Foo8_07 implements Foo7_07 {
  absProp: string = 'anne'

  get absGetter() {
    return 'amm'
  }

  absMethod(name: string): string {
    return name
  }
}

// Newable Interface
class Foo {}
interface FooStruct {
  new():Foo
}

declare const NewableFoo:FooStruct;

const foo = new NewableFoo()