import { ref,computed,watchEffect,Ref } from "vue";
import { useStorage } from './useStorage';

interface Todo {
  title:string;
  done:boolean;
  key:string;
}
export function useTodos(){
  let title = ref('')
  let todos:Ref<Todo[]> = useStorage('todos',[])

  watchEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos.value))
  })
  function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
    key:`${new Date().getTime()}`
  });
  title.value = "";
}
function clear(){
  todos.value = todos.value.filter((v)=>!v.done)
}
let active = computed(()=> {
  return todos.value.filter((v)=> v.done).length
});

let all = computed(()=> todos.value.length)
let allDone = computed({
  get:function(){
    return active.value !== 0;
  },
  set:function(value){
    console.log(value)
    todos.value.forEach((todo)=>{
      todo.done = value
    })
  }
});



return { title, todos, addTodo, clear, active, all, allDone}

}