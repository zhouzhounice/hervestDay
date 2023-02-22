import { track, trigger } from "./effect"
const get = createGetter();
const set = createSetter();

function createGetter(shallow = false){
  return function get(target,key,receiver){
    const res = Reflect.get(target,key,receiver)
    track(target,'get',key)
    if(isObject(res)){
      return shallow?res:reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target,key,value,receiver){
    const result = Reflect.set(target,key,value,receiver)
    trigger(target,'set',key)
    return result
  }
}

export const mutableHandles = {
  get,
  set
}