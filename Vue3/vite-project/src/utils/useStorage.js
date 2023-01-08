import { ref,watchEffect } from 'vue';

export function useStorage(name,value=[]){
  console.log(value)
  let data =localStorage.getItem(name)&& ref(JSON.parse(localStorage.getItem(name)||value)) ;
  watchEffect(()=>{
    localStorage.setItem(name,JSON.stringify(data.value))
  })
  return data
}