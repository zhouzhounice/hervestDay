// Proxy 解决了vue2的一些缺陷 
let getDoube = n => n*2;
let count = 1;
let obj = {};
let doube = getDoube(count);

let proxy = new Proxy(obj,{
  get(target,prop){
    return target[prop]
  },
  set(target,prop,value){
    target[prop] = value
    if(prop === 'count'){
      doube = getDoube(value)
    }
  },
  deleteProperty(target,prop){
    delete target[prop]
    if(prop === 'count'){
      doube = NaN
    }
  }
})

console.log(obj.count,doube)
proxy.count = 2
console.log(obj.count,doube)
delete proxy.count
console.log(obj.count,doube)
