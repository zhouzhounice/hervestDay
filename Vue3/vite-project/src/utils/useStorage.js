import { ref,watchEffect } from 'vue';

export function useStorage(name,value=[]){
  let data =localStorage.getItem(name)&& ref(JSON.parse(localStorage.getItem(name)||value)) ;
  console.log(data)
  watchEffect(()=>{
    if(!data) {

      localStorage.setItem(name,JSON.stringify([]))
    }else{
      localStorage.setItem(name,JSON.stringify(data.value))
    }
  })
  return data
}