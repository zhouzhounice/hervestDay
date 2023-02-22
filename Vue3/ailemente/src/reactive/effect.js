const targetMap = new  WeakMap();

export function track(target,type,key){
  console.log(`触发tarck -> target: ${target} type: ${type} key: ${key}`)
  let depsMap = targetMap.get(target)
  if(!depsMap){
    targetMap.set(target,(depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if(!deps){
    deps = new Set()
  }
  if(!deps.has(activeEffect)&&activeEffect){
    // 防止重复注册
    deps.add(activeEffect)
  }
  depsMap.set(key,deps)
}

export function trigger(target,type,key){
  const depsMap =targetMap.get(target)
  if(!deps){
    return 
  }
  const deps = depsMap.get(key)
  if(!deps){
    return
  }
  deps.forEach(item =>{
    if(item.scheduler){
      item.scheduler()
    }else{
      item()
    }
  })
}

export function effect(fn,options ={}){
  const effectFn = () =>{
    try {
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }
  }
  if(!options.lazy){
    effectFn()
  }
  effectFn.scheduler = options.scheduler
  return effectFn
}