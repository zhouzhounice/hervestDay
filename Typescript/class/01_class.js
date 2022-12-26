// ES5中的构造函数
function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function(){
  return `(${this.x}+${this.y})`
}

var p = new Point(1,2);

// ES6中的类
class Point_1 {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return `(${this.x}+${this.y})`
  }
}
// 类本身指向构造函数
 console.log('Point_1',Point_1 === Point_1.prototype.constructor)  // true

 // 类的调用
 class Bar {
  doStuff(){
    console.log('stuff')
  }
 }
 const b = new Bar();
 b.doStuff()

 // 实例的constructor方法
 class B{}
 const b_1 = new B()
 if(b_1.constructor === B.prototype.constructor){
  console.log(`实例的constructor方法就是B类原型的constructor方法`)
 }

 // Object.assign()方法可以很方便发一次向类添加多个方法
 class Point_2 {
  constructor(){}
 }
 Object.assign(Point_2.prototype,{
  toString(){},
  toValue(){}
 })
 // 类内部定义的所有方法是不可枚举的
//  console.log(Object.keys(Point_1.prototype))
//  console.log(Object.getOwnPropertyNames(Point_1.prototype))
 
 // 让constructor返回别的对象
 class Foo_1 {
  constructor(){
    return Object.create(null)
  }
 }

//  console.log(new Foo_1() instanceof Foo_1) //false

 // 自身属性与原型上的属性
 class Point_3 {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return `${this.x}+${this.y}`
  }
 }

 var p_3 = new Point_3(2,3);
 var p_4 = new Point_3(2,3);

 p_3.toString();

// console.log(p_3.hasOwnProperty('x')) // true
// console.log(p_3.hasOwnProperty('y')) // true
// console.log(p_3.hasOwnProperty('toString')) // false
// console.log(p_3.__proto__.hasOwnProperty('toString')) // true

// 所有实例共享一个原型对象
console.log(p_3.__proto__ === p_4.__proto__) // true

// 实例属性的新写法
class Point_5 {
  _count = 0;
  get value(){
    console.log('Getting the current value!')
    return this._count
  }
  increment(){
    this._count++;
  }
}

// get和set属性
class Point_6 {
  constructor(){}
  get prop(){
    return 'getter';
  }
  set prop(value){
    console.log('setter:'+value)
  }
}
let inst = new Point_6();
// inst.prop = 123; //setter:123

// console.log('prop',inst.prop) // getter

// 类的属性名可以采用表达式
let methodName = 'getArea';

class Square {
  constructor(length){

  }
  [methodName](){}
}

// 类的表达式声明
const myClass = class Me {
  getClassName(){
    return Me.name
  }
}

let myclass = new myClass();
console.log(myclass.getClassName()) // Me
// console.log(Me.name) // ReferenceError: Me is not defined

// 立即执行的Class
let Person = new class {
  constructor(name){
    this.name = name
  }
  sayName(){
    console.log(this.name)
  }
}('张三')
Person.sayName()

// 静态方法
class Foo_5 {
  static classMethod(){
    return 'Hello'
  }
}
const res = Foo_5.classMethod()
console.log(res) // Hello

let foo_5 = new Foo_5()
// foo_5.classMethod() //TypeError: foo_5.classMethod is not a function

// 静态方法的this关键字
class Foo_6 {
  static bar(){
    this.baz()
  }
  static baz(){
    console.log('hello');
  }
  baz(){
    console.log('world');
  }
}

Foo_6.bar() // hello

// 静态属性
class Foo_7 {

}
Foo_7.prop = 1;
console.log(Foo_7.prop) // 1

// 新写法
class Foo_8 {
  static prop = 1
}