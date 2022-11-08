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