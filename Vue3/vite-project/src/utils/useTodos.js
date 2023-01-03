import { ref,computed } from "vue";

export function useTodos(){
  let title = ref('')
  let todos = ref([{title:'学习Vue',done:true,key:'0'}])

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